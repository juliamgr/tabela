document.addEventListener('DOMContentLoaded', () => {
    const grupoCores = {
      "metal alcalino": "#FF6666",
      "metal alcalino-terroso": "#FFDEAD",
      "metal de transição": "#FFB6C1",
      "metal": "#CCCCCC",
      "metalóide": "#99CC99",
      "não metal": "#C0FFFF",
      "halogênio": "#FFFF99",
      "gás nobre": "#C0C0C0",
      "lantanídeo": "#FFB5C5",
      "actinoid": "#FF99CC",
      "post-transition metal": "#CCCCFF"
    };
  
    const periodicTable = document.getElementById('periodic-table');
    const modal = document.getElementById('element-modal');
    const closeBtn = document.querySelector('.close');
  
    colecaoElementos.forEach(elemento => {
        const divElement = document.createElement('div');
        divElement.className = 'element';
        divElement.style.gridRow = elemento.linha;
        divElement.style.gridColumn = elemento.coluna;
        // Aplicar cor do grupo
        divElement.style.backgroundColor = grupoCores[elemento.grupo] || "#EAEAEA";
  
        divElement.innerHTML = `
            <div class="numero">${elemento.numeroAtomico}</div>
            <div class="simbolo">${elemento.simbolo}</div>
            <div class="nome">${elemento.nome}</div>
        `;
  
        divElement.addEventListener('click', () => showModal(elemento));
        periodicTable.appendChild(divElement);
    });

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


  
  