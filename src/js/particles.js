/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS(
    {
        "particles": { 
          "number": {
            "value": 520,
            "density": {
              "enable": true,
              "value_area": 2809.1240348652414
            }
          },
          "color": {
            "value": "#00c5d5"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 1,
              "color": "#03b3c4"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 0,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 160,
            "color": "#00c5d5",
            "opacity": 0.3,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 4,
            "direction": "top-right",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 250,
              "size": 16,
              "duration": 8,
              "opacity": 0.3,
              "speed": 3
            },
            "repulse": {
              "distance": 164,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
)

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento al que se le cambiará el fondo
    var cambiarFondo = document.getElementById('ov-cambiar-fondo');
  
    // Función para manejar el hover
    function manejarHover(hoverClass, degradadoClass) {
      var elementos = document.querySelectorAll(hoverClass);
      elementos.forEach(function(elemento) {
        elemento.addEventListener('mouseenter', function() {
          cambiarFondo.classList.add(degradadoClass);
        });
        elemento.addEventListener('mouseleave', function() {
          cambiarFondo.classList.remove(degradadoClass);
        });
      });
    }
  
    // Aplicar la función a cada columna
    manejarHover('.ov-columna-1-hover', 'degradado-1');
    manejarHover('.ov-columna-2-hover', 'degradado-2');
    manejarHover('.ov-columna-3-hover', 'degradado-3');
    manejarHover('.ov-columna-4-hover', 'degradado-4');
 
});

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
});
  