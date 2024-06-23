document.addEventListener('DOMContentLoaded', function() {
    const recuadros = document.querySelectorAll('.recuadro');

    recuadros.forEach(recuadro => {
        recuadro.addEventListener('click', function() {
            const textoOculto = this.querySelector('.texto-oculto');

            // Muestra el texto oculto del recuadro clickeado
            textoOculto.classList.toggle('mostrar');
        });
    });
});
