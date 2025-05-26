document.addEventListener('DOMContentLoaded', () => {
  const periodicTable = document.getElementById('periodic-table');
  const modal = document.getElementById('element-modal');
  const closeBtn = document.querySelector('.close');

  // Criar elementos na tabela
  colecaoElementos.forEach(elemento => {
      const divElement = document.createElement('div');
      divElement.className = 'element';
      divElement.style.gridRow = elemento.linha;
      divElement.style.gridColumn = elemento.coluna;
      divElement.style.backgroundColor = elemento.corGrupo;

      divElement.innerHTML = `
          <div class="numero">${elemento.numeroAtomico}</div>
          <div class="simbolo">${elemento.simbolo}</div>
          <div class="nome">${elemento.nome}</div>
      `;

      divElement.addEventListener('click', () => showModal(elemento));
      periodicTable.appendChild(divElement);
  });

  // Mostrar modal
  function showModal(elemento) {
      const modalInfo = document.getElementById('modal-info');
      modalInfo.innerHTML = `
          <h2>${elemento.nome} (${elemento.simbolo})</h2>
          <p>Número Atômico: ${elemento.numeroAtomico}</p>
          <p>Massa Atômica: ${elemento.massaAtomica}</p>
          <p>Grupo: ${elemento.grupo}</p>
          <p>Estado: ${elemento.estadoPadrao}</p>
          <p>Eletronegatividade: ${elemento.eletronegatividade || 'N/A'}</p>
          <p>Ponto de Fusão: ${elemento.pontoDeFusao || 'N/A'} K</p>
      `;
      modal.style.display = 'block';
  }

  // Fechar modal
  closeBtn.onclick = () => modal.style.display = 'none';
  window.onclick = (event) => {
      if (event.target === modal) modal.style.display = 'none';
  }
});