let pagamentoCalculado = false;

function calcularPagamento() {
  const anoAtual = document.getElementById("ano-atual").value;
  const anoPagamento = document.getElementById("ano-pagamento").value;
  const anoOrdem = document.getElementById("anoDeOrdem").value;
  const tempoAtraso = anoAtual - anoPagamento;
  document.getElementById("tempo-atraso").value = tempoAtraso;

  if (anoOrdem < 2000 || anoOrdem > 2025) {
    alert("O Ano de Ordem deve estar entre 2000 e 2025.");
    return;
  }

  const resultado = parseInt(anoOrdem) + tempoAtraso;
  const res = document.getElementById("previsao-pagamento").value = resultado;

  const anosEspera = parseInt(resultado - anoAtual);
  const ress = document.getElementById("anos-de-espera").value = anosEspera;

  const dif = parseInt(anoAtual - anoOrdem);

  pagamentoCalculado = true;
}

