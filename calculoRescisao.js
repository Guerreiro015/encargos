dias_avos = 0
function calcularEncargos() {
  let val1 = parseFloat(document.getElementById("valor1").value)
  let val2 = parseFloat(document.getElementById("valor2").value)
  let val3 = parseFloat(document.getElementById("valor3").value)
  let val4 = parseFloat(document.getElementById("valor4").value)
  let val5 = parseFloat(document.getElementById("valor5").value)
  let faltas = parseFloat(document.getElementById("faltas").value)
  let pensao = parseFloat(document.getElementById("pensao").value)
  let depir = parseFloat(document.getElementById("depir").value)
 
  let valordepir=depir*189.59

  let proventos = val1+val2+val3+val4+val5
  
  baseInss=proventos-faltas

  if(baseInss < 1412){
    valorInss=baseInss*7.5/100

  }
  else if(baseInss < 2666.68){
    valorInss=(baseInss*9/100)-21.18
  }

  else if(baseInss < 4000.03){
    valorInss=(baseInss*12/100)-101.18
  }

  else if(baseInss < 7786.02){
    valorInss=(baseInss*14/100)-181.18
  }

  else if(baseInss > 7786.02){
    valorInss=908.85
  }

  
  deducao=valorInss+pensao+valordepir
  
  if(deducao <= 528){
    deducao=528
  }

  baseIR=baseInss-deducao


  if(baseIR<0){
    baseIR=0
  }

  if(baseIR < 2112){
    IR=0

  }
  else if(baseIR < 2826.66){
    IR=(baseIR*7.5/100)-158.4
  }

  else if(baseIR < 3751.06){
    IR=(baseIR*15/100)-370.40
  }

  else if(baseIR < 4664.69){
    IR=(baseIR*22.5/100)-651.73
  }

  else if(baseIR > 4664.68){
    IR=(baseIR*27.5/100)-884.96
  }

  
  
  document.getElementById("inss_base").innerHTML = 'BASE do Inss      R$: ' + baseInss.toFixed(2);
  document.getElementById("inss_valor").innerHTML = 'Valor do Inss      R$: ' + valorInss.toFixed(2);
  document.getElementById("irrf_base").innerHTML = 'BASE do IR      R$: ' + baseIR.toFixed(2);
  document.getElementById("irrf_valor").innerHTML = 'Valor do IR      R$: ' + IR.toFixed(2);

  
}

function MOSTRAR() {
  data = (document.getElementById("text1")).value;
  data2 = (document.getElementById("text2")).value;
  
  dia1 = Number(data.slice(8, 10))            
  mes1 = Number(data.slice(5, 7))            
  ano1 = Number(data.slice(0, 4))
 
  
  
  dia2 = Number(data2.slice(8, 10))            
  mes2 = Number(data2.slice(5, 7))            
  ano2 = Number(data2.slice(0, 4))
 

}
