dias_avos = 0
alert = 'deseja receber avisos deste site'
function calcularEncargos() {

  data = (document.getElementById("text1")).value;
  data2 = (document.getElementById("text2")).value;

  t_rescisao = document.querySelector("#tipo_rescisao");
  tipo_de_rescisao = t_rescisao.value;

  tem_feria_vencida = document.querySelector('input[name="ferias"]:checked').value;
  feria_vencida = tem_feria_vencida;

  adicionais = document.querySelector('input[name="adicional"]:checked').value;
  adicional_recebido = adicionais

  adc = ['insalubridade_min_10%', 'insalubridade_med_20%', 'insalubridade_max_40%', 'Nao_Recebe'];
  percentual = [0.1, 0.2, 0.4, 0.0];

  salario_minimo = 1412.00
  valor_do_adicional = 0

  for (i = 0; i < adc.length; i++) {
    if (adicional_recebido == adc[i]) {
      valor_do_adicional = salario_minimo * percentual[i]
      break
    }
    else {
      valor_do_adicional = valSal * .3
    }
  }

  dia1 = Number(data.slice(8, 10))
  mes1 = Number(data.slice(5, 7))
  ano1 = Number(data.slice(0, 4))



  dia2 = Number(data2.slice(8, 10))
  mes2 = Number(data2.slice(5, 7))
  ano2 = Number(data2.slice(0, 4))

  avos_anual = ano2 - ano1
  avos_anual = avos_anual * 3



  valor_avo_prop = 1676.89 / 30 * avos_anual  


  let valSal = parseFloat(document.getElementById("val_sal").value)
  let valNot = parseFloat(document.getElementById("val_not").value)
  let valHe = parseFloat(document.getElementById("val_he").value)

  let faltas = parseFloat(document.getElementById("faltas").value)
  let pensao = parseFloat(document.getElementById("pensao").value)
  let depir = parseFloat(document.getElementById("depir").value)



  let valordepir = depir * 189.59

  let proventos = valSal + valNot + valHe + valor_do_adicional
  let valDia = proventos / 30

  baseInss = proventos - faltas

  if (baseInss < 1412) {
    valorInss = baseInss * 7.5 / 100

  }
  else if (baseInss < 2666.68) {
    valorInss = (baseInss * 9 / 100) - 21.18
  }

  else if (baseInss < 4000.03) {
    valorInss = (baseInss * 12 / 100) - 101.18
  }

  else if (baseInss < 7786.02) {
    valorInss = (baseInss * 14 / 100) - 181.18
  }

  else if (baseInss > 7786.02) {
    valorInss = 908.85
  }


  deducao = valorInss + pensao + valordepir

  if (deducao <= 528) {
    deducao = 528
  }

  baseIR = baseInss - deducao


  if (baseIR < 0) {
    baseIR = 0
  }

  if (baseIR < 2112) {
    IR = 0

  }
  else if (baseIR < 2826.66) {
    IR = (baseIR * 7.5 / 100) - 158.4
  }

  else if (baseIR < 3751.06) {
    IR = (baseIR * 15 / 100) - 370.40
  }

  else if (baseIR < 4664.69) {
    IR = (baseIR * 22.5 / 100) - 651.73
  }

  else if (baseIR > 4664.68) {
    IR = (baseIR * 27.5 / 100) - 884.96
  }

  document.getElementById("diasRes").innerHTML = "Dias de Rescisões : " + dia2;
  document.getElementById("valorDia").innerHTML = "Valor Diario : " + valDia;
  document.getElementById("valorAdc").innerHTML = "Valor Adicional: " + valor_do_adicional;
  document.getElementById("avisoProjetado").innerHTML = "Aviso Projetado: " + avos_anual + " dias";
  document.getElementById("tipo_adicional").innerHTML = "Adicionais: " + adicional_recebido
  document.getElementById("rescisao").innerHTML = "Rescisão: " + tipo_de_rescisao;
  document.getElementById("feriasVencidas").innerHTML = "Férias Vencidas: " + feria_vencida;

  document.getElementById("inss_base").innerHTML = 'BASE do Inss      R$: ' + baseInss.toFixed(2);
  document.getElementById("inss_valor").innerHTML = 'Valor do Inss      R$: ' + valorInss.toFixed(2);
  document.getElementById("irrf_base").innerHTML = 'BASE do IR      R$: ' + baseIR.toFixed(2);
  document.getElementById("irrf_valor").innerHTML = 'Valor do IR      R$: ' + IR.toFixed(2);


}

