const botonFlecha = document.querySelector('.up')
const resolucion = window.matchMedia('(min-width: 767px)')

window.addEventListener('scroll', () => {
  if (resolucion.matches) {
    if (botonFlecha.classList.contains('boton-invisible')) {
      botonFlecha.classList.add('boton-visible')
      botonFlecha.classList.remove('boton-invisible')
      setTimeout(() => {
        botonFlecha.classList.add('boton-invisible')
        botonFlecha.classList.remove('boton-visible')
      }, 4000)
    }
  }
})
