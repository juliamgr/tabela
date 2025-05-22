function carregarTabela() {
  const container = document.getElementById('dados_quimica.js');
  container.innerHTML = ''; 

  elementos.forEach(elem => {
    const div = document.createElement('div');
    div.className = 'elemento';
    div.innerHTML = `<strong>${elem.simbolo}</strong><br>${elem.numeroAtomico}`;

    if (elem.linha && elem.coluna) {
      div.style.gridRow = elem.linha;
      div.style.gridColumn = elem.coluna; 
    }
    div.onclick = () => mostraInfo(elem);
    container.appendChild(div);
  });
}

function mostraInfo(elem) {
  const info = document.getElementById('info');
  info.innerHTML = `
  <h2>${elem.nome} (${elem.simbolo})</h2>
  <p><strong>Número Atômico:</strong> ${elem.numeroAtomico}</p>
  <p><strong>Grupo:</strong> ${elem.grupo}</p>
  <p><strong>Massa Atômica:</strong> ${elem.massaAtomica}</p>
  <p><strong>Estado Padrão:</strong> ${elem.estadoPadrao}</p>
  <p><strong>Configuração Eletrônica:</strong> ${elem.configuracaoEletronica}</p>
  <p><strong>Eletronegatividade:</strong> ${elem.eletroNegatividade}</p>
  <p><strong>Raio Atômico:</strong> ${elem.raioAtomico}</p>
  <p><strong>Tipo de Ligação:</strong> ${elem.tipoLigacao}</p>
  <p><strong>Raio Atômico:</strong> ${elem.raioAtomico}</p>
  <p><strong>Ponto de fusão:</strong> ${elem.pontoFusao}</p>
  <p><strong>Ponto de ebulição:</strong> ${elem.pontoEbulição}</p>
  <p><strong>Descoberto em:</strong> ${elem.anoDescoberta}</p>
  `;
  info.style.display = 'block';
}
window.onload = carregarTabela;