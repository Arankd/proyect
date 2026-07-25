const botonDesplegar = document.querySelector('#btn-des');
const panelLateral = document.querySelector('#asides');

if (botonDesplegar && panelLateral) {

  botonDesplegar.addEventListener('click', () => {
    panelLateral.classList.toggle('visible');
  });
}