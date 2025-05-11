const imgSlider = document.querySelectorAll('.slider-container .slider-box');
const btnProx = document.querySelector('#proximo');
const btnAnter = document.querySelector('#anterior');
const btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

let imgAtiva = 0;
const totalImgs = imgSlider.length;

function proximaImagem() {
    imgAtiva = (imgAtiva + 1) % totalImgs;
    mostrarSlider();
}

function imagemAnterior() {
    imgAtiva = (imgAtiva - 1 + totalImgs) % totalImgs;
    mostrarSlider();
}

function mostrarSlider() {
    document.querySelector('.slider-container .slider-box.active')?.classList.remove('active');
    document.querySelector('.btn-nav-box .btn-nav.active')?.classList.remove('active');

    imgSlider[imgAtiva].classList.add('active');
    btnNav[imgAtiva].classList.add('active');
}

btnProx.addEventListener('click', () => {
    proximaImagem();
    resetarIntervalo(); 
});

btnAnter.addEventListener('click', () => {
    imagemAnterior();
    resetarIntervalo(); 
});

btnNav.forEach((btn, indice) => {
    btn.addEventListener('click', () => {
        imgAtiva = indice;
        mostrarSlider();
        resetarIntervalo(); 
    });
});

let intervalo = setInterval(proximaImagem, 5000);

function resetarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(proximaImagem, 5000);
}
