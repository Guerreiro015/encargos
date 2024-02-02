dias_avos = 0
alert = 'deseja receber avisos deste site'
function calcularEncargos() {

  data1 = (document.getElementById("text1")).value;
  data2 = (document.getElementById("text2")).value;

  t_rescisao = document.querySelector("#tipo_rescisao");
  tipo_de_rescisao = t_rescisao.value;

  tem_feria_vencida = document.querySelector('input[name="ferias"]:checked').value;
  feria_vencida = tem_feria_vencida;

  adicionais = document.querySelector('input[name="adicional"]:checked').value;
  adicional_recebido = adicionais

  adc = ['Insal._Min_10%', 'Insal._Med_20%', 'Insal._Max_40%', 'Nao_Recebe'];
  percentual = [0.1, 0.2, 0.4, 0.0];

  salario_minimo = 1412.00
  valor_do_adicional = 0


  dia1 = Number(data1.slice(8, 10))
  mes1 = Number(data1.slice(5, 7))
  ano1 = Number(data1.slice(0, 4))


  dia2 = Number(data2.slice(8, 10))
  mes2 = Number(data2.slice(5, 7))
  ano2 = Number(data2.slice(0, 4))




  ano_anterior = 12 - mes1


  // Cálculo dos avos das férias proporcinais//
  if (ano1 < ano2 && mes1 == mes2 && dia1 <= dia2) { meses_prop = 0 }
  else {
    if (ano1 < ano2 && mes1 == mes2 && dia1 > dia2) { meses_prop = 11 }
    else {

      if (ano1 < ano2 && mes1 < mes2 && dia1 <= dia2) { meses_prop = mes2 - mes1 }
      else {
        if (ano1 < ano2 && mes1 < mes2 && dia1 > dia2) { meses_prop = mes2 - mes1 - 1 }
        else {

          if (ano1 < ano2 && mes1 > mes2 && dia1 <= dia2) { meses_prop = (12 - mes1) + mes2 }
          else {
            if (ano1 < ano2 && mes1 > mes2 && dia1 > dia2) { meses_prop = (12 - mes1) + mes2 - 1 }
            else {


              if (ano1 == ano2 && mes1 < mes2 && dia1 <= dia2) { meses_prop = mes2 - mes1 }
              else {
                if (ano1 == ano2 && mes1 < mes2 && dia1 > dia2) { meses_prop = mes2 - mes1 - 1 }
                else {

                  if (ano1 == ano2 && mes1 > mes2) { meses_prop = 0 }
                  else {
                    meses_prop = 0
                  }

                }
              }
            }
          }
        }
      }
    }
  }

  // Cálculo dos avos das Decimo Terceiro proporcinais 13º

  if (dia2 >= 15) {
    decimo = mes2
  }
  else {
    decimo = mes2 - 1
  }

  if (decimo <= 0) {
    decimo = 0
  }


  // Cálculo dos avos do aviso pojetado
  avos_avisoProjetado = ano2 - ano1

  if (mes2 < mes1) { avos_avisoProjetado -= 1 }

  if (ano2 > ano1 && mes2 == mes1 && dia2 < dia1) { avos_avisoProjetado -= 1 }


  if (avos_avisoProjetado <= 0) { avos_avisoProjetado = 0 }

  avos_avisoProjetado = avos_avisoProjetado * 3

  //-------------------------------------------

  let valSal = parseFloat(document.getElementById("val_sal").value)
  let valNot = parseFloat(document.getElementById("val_not").value)
  let valHe = parseFloat(document.getElementById("val_he").value)

  let quant_faltas = parseFloat(document.getElementById("faltas").value)
  let valor_pensao = parseFloat(document.getElementById("pensao").value)
  let dep_ir = parseFloat(document.getElementById("depir").value)



  valor_dep_ir = dep_ir * 189.59

  for (i = 0; i <= adc.length; i++) {
    if (adicional_recebido == adc[i]) {
      valor_do_adicional = salario_minimo * percentual[i]
      break
    }
    else {
      valor_do_adicional = valSal * 0.3
    }
  }


   // Cálculo do INSS//

  let proventos = valSal + valNot + valHe + valor_do_adicional
  let salCalculo = valSal + valor_do_adicional
  let valDia = salCalculo / 30
  let valor_meses_prop = (salCalculo / 12) * meses_prop
  let valor_decimo = (salCalculo / 12) * decimo
  let sal_trabalhado=dia2*valDia

  if (feria_vencida == "SIM") {
    valor_ferias_vencidas = salCalculo
  }
  else {
    valor_ferias_vencidas = 0
  }

  baseInss = proventos - quant_faltas

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

  // Cálculo do Imposto de Renda//

  deducao = valorInss + valor_pensao + valor_dep_ir

  if (deducao <= 528) {
    deducao = 528
  }

  baseIR = baseInss - deducao


  if (baseIR < 0) {
    baseIR = 0
  }

  if (baseIR < 2112) {
    valor_IR = 0

  }
  else if (baseIR < 2826.66) {
    valor_IR = (baseIR * 7.5 / 100) - 158.4
  }

  else if (baseIR < 3751.06) {
    valor_IR = (baseIR * 15 / 100) - 370.40
  }

  else if (baseIR < 4664.69) {
    valor_IR = (baseIR * 22.5 / 100) - 651.73
  }

  else if (baseIR > 4664.68) {
    valor_IR = (baseIR * 27.5 / 100) - 884.96
  }


  document.getElementById("rescisao").innerHTML = "Rescisão: " + tipo_de_rescisao;
  document.getElementById("diasRes").innerHTML = "Dias Sálario.: <-> " + dia2+" <-> R$: "+sal_trabalhado.toFixed(2);
  document.getElementById("tipoAdicional").innerHTML = adicional_recebido + ":  R$: " + valor_do_adicional.toFixed(2);
  document.getElementById("baseCalculo").innerHTML = "Salário p/ Cálculo..: " + salCalculo.toFixed(2);
  document.getElementById("valorDia").innerHTML = "Valor Diario.....: R$: " + valDia.toFixed(2);
  document.getElementById("avisoProjetado").innerHTML = "Aviso Projetado......: " + avos_avisoProjetado + " dias";
  document.getElementById("feriasVencidas").innerHTML = "Férias Vencidas..: R$: " + valor_ferias_vencidas.toFixed(2);
  document.getElementById("feriasProp").innerHTML = "Férias Propor. ...:__" + meses_prop + "__Avos"
  document.getElementById("valorFeriasProp").innerHTML = "Férias Propor. ...R$: " + valor_meses_prop.toFixed(2)
  document.getElementById("avoDecimo").innerHTML = "13º Propor. ...:__" + decimo + "__Avos"
  document.getElementById("valorDecimo").innerHTML = "13º Propor. ...: R$: " + valor_decimo.toFixed(2)

  document.getElementById("inssBase").innerHTML = 'BASE do Inss      R$: ' + baseInss.toFixed(2);
  document.getElementById("inssValor").innerHTML = 'Valor do Inss      R$: ' + valorInss.toFixed(2);
  document.getElementById("irrfBase").innerHTML = 'BASE do IR      R$: ' + baseIR.toFixed(2);
  document.getElementById("irrfValor").innerHTML = 'Valor do IR      R$: ' + valor_IR.toFixed(2);

}