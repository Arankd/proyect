const linknav = document.querySelectorAll('nav ul li a');
const secciones = document.querySelectorAll('.seccion');

linknav.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const href = link.getAttribute('href');
        const idSeccion = href.substring(1);

        secciones.forEach(sec => {
            sec.classList.remove('activa');
            sec.classList.add('oculta');
        });

        const seccionActiva = document.getElementById(idSeccion);
        seccionActiva.classList.add('activa');
        seccionActiva.classList.remove('oculta');

        // Añade esta línea para actualizar la URL sin recargar la página
        history.pushState(null, '', href);
    });
});
const inisec = document.querySelectorAll('.leng');

inisec.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const href = link.getAttribute('href');
        const idSeccion = href.substring(1);

        secciones.forEach(sec => {
            sec.classList.remove('activa');
            sec.classList.add('oculta');
        });

        const seccionActiva = document.getElementById(idSeccion);
        seccionActiva.classList.add('activa');
        seccionActiva.classList.remove('oculta');

        history.pushState(null, '', href);
    })
})

