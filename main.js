
// header animaciones


window.addEventListener("scroll", function () {

  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
  console.log(header)
});


const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function () {
  this.classList.toggle('active');
  navigation.classList.toggle('active');

}



// lottie animaciones

LottieInteractivity.create({
  player: '#flecha-animacion',
  mode: 'scroll',
  actions: [
    {
      visibility: [0, 1],
      type: 'seek',
      frames: [0, 300],
    },
  ]
});
/*
//efecto ordenador
window.addEventListener('scroll', function () {
  var ordenador = document.getElementById('ordenador');
  var posicionDetalle = ordenador.getBoundingClientRect();

  if (posicionDetalle.top < window.innerHeight && posicionDetalle.bottom >= 0) {
    ordenador.style.opacity = '1';
    ordenador.style.transform = 'translateX(0%)';
  }
});


//efecto pantalla
window.addEventListener('scroll', function () {
  var pantalla = document.getElementById('pantalla');
  var posicionDetalle = pantalla.getBoundingClientRect();

  if (posicionDetalle.top < window.innerHeight && posicionDetalle.bottom >= 0) {
    pantalla.style.opacity = '1';
    pantalla.style.transform = 'translateX(50%)';
  }
});



//efecto trofeo
window.addEventListener('scroll', function () {
  var trofeo = document.getElementById('trofeo');
  var posicionDetalle = trofeo.getBoundingClientRect();

  if (posicionDetalle.top < window.innerHeight && posicionDetalle.bottom >= 0) {
    trofeo.style.opacity = '1';
    trofeo.style.transform = 'translateX(0%)';
  }
});
*/

//efectos  ordenador,pantalla y trofeo
window.addEventListener('scroll', function () {
  var elementos = [
    { id: 'ordenador', translateX: '0%' },
    { id: 'pantalla', translateX: '50%' },
    { id: 'trofeo', translateX: '0%' }
  ];
  elementos.forEach(function (elemento) {
    var elem = document.getElementById(elemento.id);
    var posicionDetalle = elem.getBoundingClientRect();

    if (posicionDetalle.top < window.innerHeight && posicionDetalle.bottom >= 0) {
      elem.style.opacity = '1';
      elem.style.transform = `translateX(${elemento.translateX})`;
    }
  });
});



//efectos cubo
window.addEventListener('scroll', function () {
  var cubo1 = document.getElementById('cubo1');
  var cubo2 = document.getElementById('cubo2');
  var cubo3 = document.getElementById('cubo3');

  aplicarEfectoCubo(cubo1);
  aplicarEfectoCubo(cubo2);
  aplicarEfectoCubo(cubo3);
});


function aplicarEfectoCubo(elemento) {
  var posicionDetalle = elemento.getBoundingClientRect();
  var windowWidth = window.innerWidth;

  if (posicionDetalle.top < window.innerHeight && posicionDetalle.bottom >= 0) {
    elemento.style.opacity = '1';

    if (windowWidth > 1200) {
      elemento.style.transform = 'translateX(75%)';
    } else if (windowWidth > 768) {
      elemento.style.transform = 'translateX(40%)';
    } else if (windowWidth > 480) {
      elemento.style.transform = 'translateX(30%)';
    }
  }
};