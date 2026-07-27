
const linksDeNavegacion = document.querySelectorAll('nav ul li a, .leng');
const secciones = document.querySelectorAll('.seccion');

function cambiarSeccion(evento) {
    evento.preventDefault();

    const href = this.getAttribute('href');
    const idSeccion = href.substring(1);

    secciones.forEach(sec => {
        sec.classList.remove('activa');
        sec.classList.add('oculta');
    });

    const seccionActiva = document.getElementById(idSeccion);
    if (seccionActiva) {
        seccionActiva.classList.add('activa');
        seccionActiva.classList.remove('oculta');
    }

    history.pushState(null, '', href);
}

linksDeNavegacion.forEach(link => {
    link.addEventListener('click', (e) => {
        cambiarSeccion.call(this, e);
    })
});
