const nombre = document.querySelector('.input-nombre')
const email = document.querySelector('.input-email')
const tema = document.querySelector('.input-tema')
const mensaje = document.querySelector('.input-mensaje')
const form = document.querySelector('#form')
const boton = document.querySelector('.boton')

let nombreValidado
let emailValidado
let temaValidado
let msjValidado

/* -------------- Capturamos clases de form -------------- */
const errorNombre = document.querySelector('.error-name')
const errorEmail = document.querySelector('.error-email')
const errorTema = document.querySelector('.error-tema')
const errorMensaje = document.querySelector('.error-msj')

/* --------------- Chequeamos cada input --------------- */

nombre.addEventListener('blur', () => {
  nombreValidado = validarCampo(nombre.value)
  !nombreValidado ? errorNombre.style.visibility = 'visible' : errorNombre.style.visibility = 'hidden'
})

email.addEventListener('blur', () => {
  emailValidado = validarEmail(email.value)
  !emailValidado ? errorEmail.style.visibility = 'visible' : errorEmail.style.visibility = 'hidden'
})

tema.addEventListener('blur', () => {
  temaValidado = validarCampo(tema.value)
  !temaValidado ? errorTema.style.visibility = 'visible' : errorTema.style.visibility = 'hidden'
})

mensaje.addEventListener('blur', () => {
  msjValidado = validarCampo(mensaje.value)
  !msjValidado ? errorMensaje.style.visibility = 'visible' : errorMensaje.style.visibility = 'hidden'
})

form.addEventListener('submit', event => {
  event.preventDefault()

  !nombreValidado ? errorNombre.style.visibility = 'visible' : errorNombre.style.visibility = 'hidden'
  !emailValidado ? errorEmail.style.visibility = 'visible' : errorEmail.style.visibility = 'hidden'
  !temaValidado ? errorTema.style.visibility = 'visible' : errorTema.style.visibility = 'hidden'
  !msjValidado ? errorMensaje.style.visibility = 'visible' : errorMensaje.style.visibility = 'hidden'

  if (nombreValidado && emailValidado && temaValidado && msjValidado) {
    enviarEmail(event)
    confirmarEnvio()
  }
})

const validarCampo = nombreForm => {
  const regexNombre = /^\s+$/
  if (nombreForm == null || nombreForm.length === 0 || regexNombre.test(nombreForm)) {
    return false
  } else { return true }
}

const validarEmail = emailForm => {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
  return !!(regexEmail.test(emailForm))
}

const enviarEmail = (e) => {
  const settings = {
    method: 'POST',
    body: new FormData(e.target)
  }

  fetch('https://formbold.com/s/oJkB6', settings)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(data => console.log(data))
}

const confirmarEnvio = () => {
  boton.innerHTML = ''
  boton.innerHTML = '<img src="img/cargando.png" alt="cargando" class="cargando">'
  setTimeout(() => {
    boton.innerHTML = '<p>Enviado!</p>'
    boton.style.backgroundColor = 'green'
    form.reset()
    boton.disabled = true
    boton.style.cursor = 'default'
  }, 1000)
}
