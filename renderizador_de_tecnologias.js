const tarjetasTecnologias = [
  {
    imgUrl: 'img/skills/html-5.png',
    alt: 'html 5',
    nombreDeTecnologia: 'HTML'
  },
  {
    imgUrl: 'img/skills/css-3.png',
    alt: 'css 3',
    nombreDeTecnologia: 'CSS'
  },
  {
    imgUrl: 'img/skills/bootstrap.png',
    alt: 'Bootstrap',
    nombreDeTecnologia: 'Bootstrap'
  },
  {
    imgUrl: 'img/skills/sass.png',
    alt: 'sass',
    nombreDeTecnologia: 'SASS'
  },
  {
    imgUrl: 'img/skills/styled-components.png',
    alt: 'styled-components',
    nombreDeTecnologia: 'styled-components'
  },
  {
    imgUrl: 'img/skills/figma.png',
    alt: 'figma',
    nombreDeTecnologia: 'Figma'
  },
  {
    imgUrl: 'img/skills/js.png',
    alt: 'js',
    nombreDeTecnologia: 'Javascript'
  },
  {
    imgUrl: 'img/skills/react.png',
    alt: 'React',
    nombreDeTecnologia: 'React'
  },
  {
    imgUrl: 'img/skills/java.png',
    alt: 'java',
    nombreDeTecnologia: 'Java'
  },
  {
    imgUrl: 'img/skills/hibernate.png',
    alt: 'Hibernate',
    nombreDeTecnologia: 'Hibernate'
  },
  {
    imgUrl: 'img/skills/mysql-official.svg',
    alt: 'mysql',
    nombreDeTecnologia: 'mySQL'
  },
  {
    imgUrl: 'img/skills/mongodb.png',
    alt: 'mongoDB',
    nombreDeTecnologia: 'MongoDB'
  },
  {
    imgUrl: 'img/skills/testing.png',
    alt: 'testing',
    nombreDeTecnologia: 'Testing'
  },
  {
    imgUrl: 'img/skills/agil.png',
    alt: 'metodologias agiles',
    nombreDeTecnologia: 'Metodologias Agiles'
  }
]

const renderizadorDeTecnologias = tarjetasTec => {
  const tarjeta = document.querySelector('.tecnologias')

  tarjetasTec.forEach(element => {
    tarjeta.innerHTML += `
        <div class="caja">
            <p>${element.nombreDeTecnologia}</p>
            <img src="${element.imgUrl}" alt="${element.alt}">
        </div>`
  })
}

renderizadorDeTecnologias(tarjetasTecnologias)
