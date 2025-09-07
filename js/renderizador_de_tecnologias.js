// Variable para almacenar las tecnologías cargadas desde JSON
let tarjetasTecnologias = [];

// Función para cargar tecnologías desde el archivo JSON
async function cargarTecnologias() {
  try {
    const response = await fetch('data/tecnologias.json');
    tarjetasTecnologias = await response.json();
    return tarjetasTecnologias;
  } catch (error) {
    console.error('Error al cargar tecnologías:', error);
    return [];
  }
}

const renderizadorDeTecnologias = tarjetasTec => {
  const tarjeta = document.querySelector('.tecnologias')
  
  // Definir las categorías y sus tecnologías (más compactas)
  const categorias = {
    'Frontend': tarjetasTec.slice(0, 12),
    'Backend': tarjetasTec.slice(12, 22),
    'Databases & Testing': tarjetasTec.slice(22, 29),
    'DevOps & Tools': tarjetasTec.slice(29, 42),
    'AI & Methodologies': tarjetasTec.slice(42, 51),
    'Currently Learning': tarjetasTec.slice(51, 52)
  }
  
  // Renderizar cada categoría
  Object.entries(categorias).forEach(([nombreCategoria, tecnologias]) => {
    if (tecnologias.length > 0) {
      tarjeta.innerHTML += `
        <div class="categoria-tecnologias">
          <h3 class="titulo-categoria" onclick="toggleCategoria(this)">
            ${nombreCategoria}
          </h3>
          <div class="grid-tecnologias collapsed">
            ${tecnologias.map(element => `
              <div class="caja">
                <p>${element.nombreDeTecnologia}</p>
                <img src="${element.imgUrl}" alt="${element.alt}" onerror="this.style.display='none'">
              </div>
            `).join('')}
          </div>
        </div>
      `
    }
  })
}

// Función para manejar el toggle de categorías
function toggleCategoria(titulo) {
  const gridTecnologias = titulo.nextElementSibling;
  const isCollapsed = gridTecnologias.classList.contains('collapsed');
  
  // Remover clases de todos los elementos
  titulo.classList.remove('expanded');
  gridTecnologias.classList.remove('collapsed', 'expanded');
  
  // Aplicar la clase correcta
  if (isCollapsed) {
    titulo.classList.add('expanded');
    gridTecnologias.classList.add('expanded');
  } else {
    gridTecnologias.classList.add('collapsed');
  }
  
  // Actualizar el estado del botón "Expandir Todas"
  updateToggleAllButton();
}

// Función para expandir/contraer todas las categorías
function toggleAllCategories() {
  const titulos = document.querySelectorAll('.titulo-categoria');
  const grids = document.querySelectorAll('.grid-tecnologias');
  const toggleBtn = document.querySelector('.toggle-all-btn');
  const toggleText = document.getElementById('toggle-text');
  const toggleIcon = document.getElementById('toggle-icon');
  
  // Verificar si todas están colapsadas
  const allCollapsed = Array.from(grids).every(grid => grid.classList.contains('collapsed'));
  
  if (allCollapsed) {
    // Expandir todas
    titulos.forEach(titulo => {
      titulo.classList.add('expanded');
    });
    grids.forEach(grid => {
      grid.classList.remove('collapsed');
      grid.classList.add('expanded');
    });
    toggleText.textContent = 'Contraer Todas';
    toggleBtn.classList.add('expanded');
  } else {
    // Contraer todas
    titulos.forEach(titulo => {
      titulo.classList.remove('expanded');
    });
    grids.forEach(grid => {
      grid.classList.remove('expanded');
      grid.classList.add('collapsed');
    });
    toggleText.textContent = 'Expandir Todas';
    toggleBtn.classList.remove('expanded');
  }
}

// Función para actualizar el estado del botón "Expandir Todas"
function updateToggleAllButton() {
  const grids = document.querySelectorAll('.grid-tecnologias');
  const toggleBtn = document.querySelector('.toggle-all-btn');
  const toggleText = document.getElementById('toggle-text');
  
  const allExpanded = Array.from(grids).every(grid => grid.classList.contains('expanded'));
  const allCollapsed = Array.from(grids).every(grid => grid.classList.contains('collapsed'));
  
  if (allExpanded) {
    toggleText.textContent = 'Contraer Todas';
    toggleBtn.classList.add('expanded');
  } else if (allCollapsed) {
    toggleText.textContent = 'Expandir Todas';
    toggleBtn.classList.remove('expanded');
  } else {
    // Estado mixto - mostrar "Expandir Todas"
    toggleText.textContent = 'Expandir Todas';
    toggleBtn.classList.remove('expanded');
  }
}

// Cargar y renderizar tecnologías cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', async () => {
  await cargarTecnologias();
  renderizadorDeTecnologias(tarjetasTecnologias);
});
