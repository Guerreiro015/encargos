
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
  let valmedia13 = parseFloat(document.getElementById("media_13").value)
  let valmediaferias = parseFloat(document.getElementById("media_ferias").value)

  let valor_pensao = parseFloat(document.getElementById("pensao").value)
  let dep_ir = parseFloat(document.getElementById("depir").value)


  let quant_faltas_res = parseFloat(document.getElementById("faltas_rescisao").value)
  let quant_drs_res = parseFloat(document.getElementById("dsr").value)
  let atrasos_res = parseFloat(document.getElementById("atrasos").value)
  let medico_res = parseFloat(document.getElementById("convenio_medico").value)
  let odonto_res = parseFloat(document.getElementById("convenio_odonto").value)
  let sindical_res = parseFloat(document.getElementById("sindicato").value)
  let vt_res = parseFloat(document.getElementById("vt_nao").value)
  let va_res = parseFloat(document.getElementById("va_nao").value)

  quant_faltas = quant_faltas_res
  quant_dsr = quant_drs_res
  quant_atrasos = atrasos_res
  valor_medico = medico_res
  valor_odonto = odonto_res
  valor_sindicato = sindical_res
  valor_VT = vt_res
  valor_VA = va_res
  valor_medias_13 = valmedia13
  valor_medias_ferias = valmediaferias
  valor_medias_terco = valor_medias_ferias / 3



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


  let salCalculo = valSal + valor_do_adicional
  let valDia = salCalculo / 30
  let valHora = salCalculo / 220
  let valAvo = salCalculo / 12
  valNotu = valNot * valHora * 0.2
  valHex = valHe * valHora * 1.5

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


  // calculo do faltas/dsr e atrasos //

  valor_faltas = quant_faltas * valDia
  valor_dsr = quant_dsr * valDia
  valor_atrasos = quant_atrasos * valHora


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

  //calculo inss normal

  proventos = valSal + valNot + valHe + valor_do_adicional
  baseInss = proventos - valor_faltas - valor_atrasos - valor_dsr

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

  //------------------------------------------------------------------------//

  //calculo INSS 13º decimo terceiro

  proventos13 = valor_decimo + valor_medias_13 + decimo_aviso
  baseInss13 = proventos13

  if (baseInss13 < 1412) {
    valorInss13 = baseInss13 * 7.5 / 100

  }
  else if (baseInss13 < 2666.68) {
    valorInss13 = (baseInss13 * 9 / 100) - 21.18
  }

  else if (baseInss13 < 4000.03) {
    valorInss13 = (baseInss13 * 12 / 100) - 101.18
  }

  else if (baseInss13 < 7786.02) {
    valorInss13 = (baseInss13 * 14 / 100) - 181.18
  }

  else if (baseInss13 > 7786.02) {
    valorInss13 = 908.85
  }

  // Cálculo do Imposto de Renda 13º decimo//

  deducao13 = valorInss13

  if (deducao13 <= 528) {
    deducao13 = 528
  }

  baseIR13 = baseInss13 - deducao13


  if (baseIR13 < 0) {
    baseIR13 = 0
  }

  if (baseIR13 < 2112) {
    valor_IR13 = 0

  }
  else if (baseIR13 < 2826.66) {
    valor_IR13 = (baseIR13 * 7.5 / 100) - 158.4
  }

  else if (baseIR13 < 3751.06) {
    valor_IR13 = (baseIR13 * 15 / 100) - 370.40
  }

  else if (baseIR13 < 4664.69) {
    valor_IR13 = (baseIR13 * 22.5 / 100) - 651.73
  }

  else if (baseIR13 > 4664.68) {
    valor_IR13 = (baseIR13 * 27.5 / 100) - 884.96
  }

  //--------------------------------------------------------------

  if (tipo_de_rescisao != "Sem Justa Causa") {
    aviso_previo = 0
  }
  //-------------------------------------------------------
  //-------------------------------------------------------

  if (aviso_previo > 0) {
    decimo_aviso = valor_avo_aviso
  }
  //---------------------------------------------------------
  total_proventos = sal_trabalhado + valor_do_adicional + valNotu + valHex + aviso_previo + avisoProjetado_valor + valor_decimo + valor_ferias_vencidas + valor_ferias_propor + ferias_propor_terco + ferias_vencidas_terco + decimo_aviso
  total_descontos = valor_faltas + valor_atrasos + valor_dsr + valor_medico + valor_odonto + valor_sindicato + valor_VA + valor_VT + valor_IR + valor_IR13 + valorInss + valorInss13

  valor_rescisao = total_proventos - total_descontos
  //---------------------------------------------------------

  document.getElementById("diasDireito").innerHTML = dia2;
  document.getElementById("valorDireito").innerHTML = sal_trabalhado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  document.getElementById("insal").innerHTML = adicional_recebido;
  document.getElementById("insalV").innerHTML = valor_do_adicional.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  document.getElementById("notuV").innerHTML = valNotu.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  document.getElementById("heV").innerHTML = valHex.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  document.getElementById("avisoV").innerHTML = aviso_previo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  document.getElementById("projetadoA").innerHTML = avos_avisoProjetado;
  document.getElementById("projetadoV").innerHTML = avisoProjetado_valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  document.getElementById("decimoTerceA").innerHTML = decimo
  document.getElementById("decimoTerceV").innerHTML = valor_decimo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  document.getElementById("decimoAvisoV").innerHTML = decimo_aviso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("feriasV").innerHTML = valor_ferias_vencidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("feriasTercoV").innerHTML = ferias_vencidas_terco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("feriasPropA").innerHTML = ferias_propor
  document.getElementById("feriasPropV").innerHTML = valor_ferias_propor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("feriasPropA").innerHTML = ferias_propor
  document.getElementById("feriasPropTercoV").innerHTML = ferias_propor_terco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  document.getElementById("decimoMedias").innerHTML = valor_medias_13.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("feriasMedias").innerHTML = valor_medias_ferias.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("feriasMediasTerco").innerHTML = valor_medias_terco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });



  document.getElementById("faltasQ").innerHTML = quant_faltas
  document.getElementById("faltasV").innerHTML = valor_faltas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("dsrQ").innerHTML = quant_dsr
  document.getElementById("dsrV").innerHTML = valor_dsr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("atrasosQ").innerHTML = quant_atrasos
  document.getElementById("atrasosV").innerHTML = valor_atrasos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("valorMedico").innerHTML = valor_medico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("valorOdonto").innerHTML = valor_odonto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("valorSindicato").innerHTML = valor_sindicato.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("valorVT").innerHTML = valor_VT.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("valorVA").innerHTML = valor_VA.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  document.getElementById("inssValor").innerHTML = valorInss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  // document.getElementById("inssValor13").innerHTML = valorInss13.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  document.getElementById("irrfValor").innerHTML = valor_IR.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  // document.getElementById("irrfValor13").innerHTML = valor_IR13.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;


  document.getElementById("totalProv").innerHTML = total_proventos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("totalDesc").innerHTML = total_descontos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("totalRes").innerHTML = valor_rescisao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });




  // document.getElementById("inssBase").innerHTML = baseInss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
  // document.getElementById("irrfBase").innerHTML = baseIR.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;



}