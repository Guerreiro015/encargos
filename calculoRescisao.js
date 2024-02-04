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
  if (ano1 < ano2 && mes1 == mes2 && dia1 <= dia2) { ferias_propor = 0 }
  else {
    if (ano1 < ano2 && mes1 == mes2 && dia1 > dia2) { ferias_propor = 11 }
    else {

      if (ano1 < ano2 && mes1 < mes2 && dia1 <= dia2) { ferias_propor = mes2 - mes1 }
      else {
        if (ano1 < ano2 && mes1 < mes2 && dia1 > dia2) { ferias_propor = mes2 - mes1 - 1 }
        else {

          if (ano1 < ano2 && mes1 > mes2 && dia1 <= dia2) { ferias_propor = (12 - mes1) + mes2 }
          else {
            if (ano1 < ano2 && mes1 > mes2 && dia1 > dia2) { ferias_propor = (12 - mes1) + mes2 - 1 }
            else {


              if (ano1 == ano2 && mes1 < mes2 && dia1 <= dia2) { ferias_propor = mes2 - mes1 }
              else {
                if (ano1 == ano2 && mes1 < mes2 && dia1 > dia2) { ferias_propor = mes2 - mes1 - 1 }
                else {

                  if (ano1 == ano2 && mes1 > mes2) { ferias_propor = 0 }
                  else {
                    ferias_propor = 0
                  }

                }
              }
            }
          }
        }
      }
    }
  }


  let valSal = parseFloat(document.getElementById("val_sal").value)
  let valNot = parseFloat(document.getElementById("val_not").value)
  let valHe = parseFloat(document.getElementById("val_he").value)

  let quant_faltas = parseFloat(document.getElementById("faltas").value)
  let valor_pensao = parseFloat(document.getElementById("pensao").value)
  let dep_ir = parseFloat(document.getElementById("depir").value)

  let faltas_res = parseFloat(document.getElementById("faltas").value)
  let drs_res = parseFloat(document.getElementById("dsr").value)
  let atrasos_res = parseFloat(document.getElementById("atrasos").value)
  let medico_res = parseFloat(document.getElementById("convenio_medico").value)
  let odonto_res = parseFloat(document.getElementById("convenio_odonto").value)
  let sindical_res = parseFloat(document.getElementById("sindicato").value)
  let vt_res = parseFloat(document.getElementById("vt_nao").value)
  let va_res = parseFloat(document.getElementById("va_nao").value)

  valor_faltas = faltas_res
  valor_atrasos = atrasos_res
  valor_dsr = drs_res
  valor_medico = medico_res
  valor_odonto = odonto_res
  valor_sindicato = sindical_res
  valor_VT = vt_res
  valor_VA = va_res



  // Cálculo dos avos das Decimo Terceiro proporcinais 13º
  decimo = 0
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




  valor_dep_ir = dep_ir * 189.59

  // Cálculo do insaluvridade e periculosidade//

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
  let valAvo = salCalculo / 12
  let valor_decimo = (salCalculo / 12) * decimo
  if (mes2 = 2 && dia2 >= 28) {
    sal_trabalhado = 30 * valDia
  }
  else {
    if (dia2 > 30) {
      dia2 = 30
      sal_trabalhado = 30 * valDia
    }
    else {
      if (dia2 > 30) {
        dia2 = 30
        sal_trabalhado = 30 * valDia
      }
      else {
        sal_trabalhado = dia2 * valDia
      }

    }
  }




  // calculo do Aviso prévio //

  if (ano2 > ano1) {
    aviso_previo = salCalculo
    valor_avo_aviso = aviso_previo / 12
  }
  else {

    if (mes2 >= mes1 + 3 && dia2 >= dia1) {
      aviso_previo = salCalculo
      valor_avo_aviso = aviso_previo / 12
    }
    else {
      aviso_previo = 0
      valor_avo_aviso = 0

    }
  }
  if (avos_avisoProjetado == 0) {
    avisoProjetado_valor = 0
  }
  else {
    avisoProjetado_valor = avos_avisoProjetado * valDia
  }

  //  // Cálculo do Férias//
  if (feria_vencida == "SIM") {
    valor_ferias_vencidas = salCalculo
    ferias_vencidas_terco = valor_ferias_vencidas / 3
  }
  else {
    valor_ferias_vencidas = 0
    ferias_vencidas_terco = 0
  }

  if (ferias_propor > 0) {
    valor_ferias_propor = valAvo * ferias_propor
    ferias_propor_terco = valor_ferias_propor / 3
  }
  else {
    let valor_ferias_propor = valAvo * ferias_propor
    let ferias_propor_terco = valor_ferias_propor / 3
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

  if (tipo_de_rescisao != "Sem Justa Causa") {
    aviso_previo = 0
  }
  //-------------------------------------------------------
  //-------------------------------------------------------

  if (aviso_previo > 0) {
    decimo_aviso = valor_avo_aviso
  }
  //---------------------------------------------------------
  //---------------------------------------------------------

  document.getElementById("diasDireito").innerHTML = dia2;
  document.getElementById("valorDireito").innerHTML = sal_trabalhado.toFixed(2);
  document.getElementById("insal").innerHTML = adicional_recebido;
  document.getElementById("insalV").innerHTML = valor_do_adicional.toFixed(2);
  document.getElementById("notuV").innerHTML = valNot.toFixed(2);
  document.getElementById("heV").innerHTML = valHe.toFixed(2);
  document.getElementById("avisoV").innerHTML = aviso_previo.toFixed(2);
  document.getElementById("projetadoA").innerHTML = avos_avisoProjetado;
  document.getElementById("projetadoV").innerHTML = avisoProjetado_valor.toFixed(2);
  document.getElementById("decimoTerceA").innerHTML = decimo
  document.getElementById("decimoTerceV").innerHTML = valor_decimo.toFixed(2);
  document.getElementById("decimoAvisoV").innerHTML = decimo_aviso.toFixed(2)
  document.getElementById("feriasV").innerHTML = valor_ferias_vencidas.toFixed(2)
  document.getElementById("feriasTercoV").innerHTML = ferias_vencidas_terco.toFixed(2)
  document.getElementById("feriasPropA").innerHTML = ferias_propor
  document.getElementById("feriasPropV").innerHTML = valor_ferias_propor.toFixed(2)
  document.getElementById("feriasPropA").innerHTML = ferias_propor
  document.getElementById("feriasPropTercoV").innerHTML = ferias_propor_terco.toFixed(2)


  Document.getElementById(valorFaltas).innerHTML = valor_faltas.toFixed(2)
  Document.getElementById(valorDsr).innerHTML = valor_dsr.toFixed(2)
  Document.getElementById(valorAtrasos).innerHTML = valor_atrasos.toFixed(2)
  Document.getElementById(valorMedico).innerHTML = valor_medico.toFixed(2)
  Document.getElementById(valorOdonto).innerHTML = valor_odonto.toFixed(2)
  Document.getElementById(valorSindicato).innerHTML = valor_sindicato.toFixed(2)
  Document.getElementById(valorVT).innerHTML = valor_VT.toFixed(2)
  Document.getElementById(valorVA).innerHTML = valor_VA.toFixed(2)




  document.getElementById("inssBase").innerHTML = 'BASE do Inss      R$: ' + baseInss.toFixed(2);
  document.getElementById("inssValor").innerHTML = 'Valor do Inss      R$: ' + valorInss.toFixed(2);
  document.getElementById("irrfBase").innerHTML = 'BASE do IR      R$: ' + baseIR.toFixed(2);
  document.getElementById("irrfValor").innerHTML = 'Valor do IR      R$: ' + valor_IR.toFixed(2);

}