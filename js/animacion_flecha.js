const botonFlecha = document.querySelector('.up')

// Hacer la flecha siempre visible en todos los dispositivos
window.addEventListener('load', () => {
  botonFlecha.classList.add('boton-visible')
  botonFlecha.classList.remove('boton-invisible')
})

// Mantener visible al hacer scroll
window.addEventListener('scroll', () => {
  botonFlecha.classList.add('boton-visible')
  botonFlecha.classList.remove('boton-invisible')
})
