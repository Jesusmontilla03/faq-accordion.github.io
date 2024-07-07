const acordeon = document.getElementsByClassName('accordion');

const acordeonArray = Object.values(acordeon);

acordeonArray.forEach((acor) => {
    acor.addEventListener('click', function () {
        this.classList.toggle('activo');
    });
}); 