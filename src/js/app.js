document.addEventListener('DOMContentLoaded', function(){

    eventListeners();

    darkmode();
})

/*MODO OSCURO*/
function darkmode(){
    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode')

    })
}

/*Menu HAMBURGUESA*/
function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
};

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    // if (navegacion.classList.contains('mostrar')) {
    //     navegacion.classList.remove('mostrar');
    // } else{
    //     navegacion.classList.add('mostrar');
    // }
    navegacion.classList.toggle('mostrar'); /*forma corta de agregar y quitar una clase*/
}
