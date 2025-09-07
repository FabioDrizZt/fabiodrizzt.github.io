// Variable para almacenar los proyectos cargados desde JSON
let proyectos = [];

// Función para cargar proyectos desde el archivo JSON
async function cargarProyectos() {
  try {
    const response = await fetch('data/proyectos.json');
    proyectos = await response.json();
    return proyectos;
  } catch (error) {
    console.error('Error al cargar proyectos:', error);
    return [];
  }
}

const renderizarProyectos = arrProyectos => {
  const proyectos = document.querySelector('.proyectos')
  arrProyectos.forEach(element => {
    proyectos.innerHTML += `
    <div class="proyecto-content">
        <a href="${element.url}" class="caja proyecto" target=blank>
          <h3 class="proyecto-title">${element.title}</h3>
          <img src="${element.imgUrl}" alt="${element.title}">
          <p class="proyecto-descripcion">${element.descripcion}</p>
        </a>
    </div>`
  })
}

// Cargar y renderizar proyectos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', async () => {
  await cargarProyectos();
  renderizarProyectos(proyectos);
});
