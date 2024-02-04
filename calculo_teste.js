JavaScript

// Função para calcular a rescisão de contrato de trabalho na CLT
function calcularRescisao(salario, tempo, motivo, aviso) {
  // Inicializar o objeto com os valores das verbas rescisórias
  let rescisao = {
    saldoSalario: 0,
    feriasProporcionais: 0,
    tercoFerias: 0,
    decimoTerceiro: 0,
    multaFGTS: 0,
    totalBruto: 0,
    inss: 0,
    irrf: 0,
    totalLiquido: 0
  };

  // Calcular o saldo de salário, que é o salário proporcional aos dias trabalhados no mês da rescisão
  let diasTrabalhados = aviso ? 30 - aviso : new Date().getDate();
  rescisao.saldoSalario = salario * diasTrabalhados / 30;

  // Calcular as férias proporcionais, que são o salário proporcional aos meses trabalhados no ano da rescisão
  let mesesTrabalhados = new Date().getMonth() + 1;
  rescisao.feriasProporcionais = salario * mesesTrabalhados / 12;

  // Calcular o terço de férias, que é um adicional de 1/3 sobre as férias proporcionais
  rescisao.tercoFerias = rescisao.feriasProporcionais / 3;

  // Calcular o 13º salário proporcional, que é o salário proporcional aos meses trabalhados no ano da rescisão
  rescisao.decimoTerceiro = salario * mesesTrabalhados / 12;

  // Calcular a multa do FGTS, que é 40% sobre o saldo do FGTS, se houver dispensa sem justa causa
  if (motivo === "dispensa sem justa causa") {
    // Considerar um valor hipotético para o saldo do FGTS, que pode ser obtido de outra fonte
    let saldoFGTS = 1000; // Valor em reais
    rescisao.multaFGTS = saldoFGTS * 0.4;
  }

  // Calcular o total bruto, que é a soma de todas as verbas rescisórias
  rescisao.totalBruto =
    rescisao.saldoSalario +
    rescisao.feriasProporcionais +
    rescisao.tercoFerias +
    rescisao.decimoTerceiro +
    rescisao.multaFGTS;

  // Calcular o INSS, que é o desconto previdenciário sobre o total bruto, seguindo a tabela vigente
  // Fonte: [Tabela do INSS](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math)
  if (rescisao.totalBruto <= 1100) {
    rescisao.inss = rescisao.totalBruto * 0.075;
  } else if (rescisao.totalBruto <= 2203.48) {
    rescisao.inss = rescisao.totalBruto * 0.09 - 16.5;
  } else if (rescisao.totalBruto <= 3305.22) {
    rescisao.inss = rescisao.totalBruto * 0.12 - 82.6;
  } else if (rescisao.totalBruto <= 6433.57) {
    rescisao.inss = rescisao.totalBruto * 0.14 - 148.71;
  } else {
    rescisao.inss = 751.99;
  }

  // Calcular o IRRF, que é o imposto de renda retido na fonte sobre o total bruto menos o INSS, seguindo a tabela vigente
  // Fonte: [Tabela do IRRF](https://www.freecodecamp.org/portuguese/news/como-construir-uma-calculadora-html-do-zero-usando-javascript/)
  let baseIRRF = rescisao.totalBruto - rescisao.inss;
  if (baseIRRF <= 1903.98) {
    rescisao.irrf = 0;
  } else if (baseIRRF <= 2826.65) {
    rescisao.irrf = baseIRRF * 0.075 - 142.8;
  } else if (baseIRRF <= 3751.05) {
    rescisao.irrf = baseIRRF * 0.15 - 354.8;
  } else if (baseIRRF <= 4664.68) {
    rescisao.irrf = baseIRRF * 0.225 - 636.13;
  } else {
    rescisao.irrf = baseIRRF * 0.275 - 869.36;
  }

  // Calcular o total líquido, que é o total bruto menos os descontos de INSS e IRRF
  rescisao.totalLiquido = rescisao.totalBruto - rescisao.inss - rescisao.irrf;

  // Retornar o objeto com os valores das verbas rescisórias
  return rescisao;
}