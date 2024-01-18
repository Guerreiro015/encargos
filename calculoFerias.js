dias_avos = 0
function somar() {
  let avos = parseFloat(document.getElementById("avos").value)
  let faltas = parseFloat(document.getElementById("faltas_periodo").value)
  let salario = parseFloat(document.getElementById("salario").value)
  if (faltas < 6) {
    dias_avos = avos * 2.5
  }
  else if (faltas < 15) {
    dias_avos = avos * 2
  }
  else if (faltas < 24) {
    dias_avos = avos * 1.5
  }
  else if (faltas < 33) {
    dias_avos = avos * 1
  }
  else {
    dias_avos = 0
  }

  let totaldia = salario / 30
  let valor_ferias = totaldia * dias_avos
  let um_terco = valor_ferias / 3
  let total_ferias = valor_ferias + um_terco

  if(total_ferias < 1412){
    inss=total_ferias*7.5/100

  }
  else if(total_ferias < 2666.68){
    inss=(total_ferias*9/100)-21.18
  }

  else if(total_ferias < 4000.03){
    inss=(total_ferias*12/100)-101.18
  }

  else if(total_ferias < 7786.02){
    inss=(total_ferias*14/100)-181.18
  }

  else if(total_ferias > 7786.02){
    inss=908.85
  }

  deducao=inss

  if(deducao <= 528){
    deducao=528
  }

  let base_irrf=total_ferias-deducao

  if(base_irrf < 2112){
    irrf=0

  }
  else if(base_irrf < 2826.66){
    irrf=(base_irrf*7.5/100)-158.4
  }

  else if(base_irrf < 3751.06){
    irrf=(base_irrf*15/100)-370.40
  }

  else if(base_irrf < 4664.69){
    irrf=(base_irrf*22.5/100)-651.73
  }

  else if(base_irrf > 4664.68){
    irrf=(base_irrf*27.5/100)-884.96
  }


  ferias_liquido=total_ferias-inss
  ferias_liquido=ferias_liquido-irrf


  
  document.getElementById("avosDia").innerHTML =     'Total de dias de direito--------->: ' + dias_avos;
  document.getElementById("totalDia").innerHTML =    'Valor de cada dia de férias---->R$: ' + totaldia.toFixed(2);
  document.getElementById("valorFerias").innerHTML = 'Valor total das férias--------->R$: ' + valor_ferias.toFixed(2);
  document.getElementById("umTerco").innerHTML =     'Valor 1/3 das férias----------->R$: ' + um_terco.toFixed(2);
  document.getElementById("totalFerias").innerHTML = 'Valor bruto das férias--------->R$: ' + total_ferias.toFixed(2);
  document.getElementById("inss").innerHTML = 'Valor do INSS      R$: ' + inss.toFixed(2);
  document.getElementById("irrf").innerHTML = 'Valor do IRRF      R$: ' + irrf.toFixed(2);
  document.getElementById("feriasLiquido").innerHTML = 'Valor Líquido das Férias  R$: ' + ferias_liquido.toFixed(2);


  }
