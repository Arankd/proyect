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
        if (seccionActiva) {
            seccionActiva.classList.add('activa');
            seccionActiva.classList.remove('oculta');
        }
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
        if (seccionActiva) { 
            seccionActiva.classList.add('activa');
            seccionActiva.classList.remove('oculta');
        }
    })
})
