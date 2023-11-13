function initializeTyped (el) {
  const typedInstance = new Typed(el, {
    strings: ['developer'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    cursorChar: '|',
    showCursor: true
  })

  // Puedes almacenar la instancia en el elemento para su posterior referencia si es necesario
  el.typedInstance = typedInstance
}

document.querySelectorAll('.typed').forEach(initializeTyped)
