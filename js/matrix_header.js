// Efecto Matrix específico para el header
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header-pt1');
  const matrixContainer = document.querySelector('.matrix-rain-header');
  
  if (!header || !matrixContainer) return;
  
  // Crear partículas Matrix para el header
  function createMatrixParticles() {
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'matrix-particle';
      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--matrix-green);
        border-radius: 50%;
        opacity: ${Math.random() * 0.8 + 0.2};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: matrix-particle-float ${Math.random() * 10 + 5}s linear infinite;
        box-shadow: 0 0 6px var(--matrix-green);
      `;
      
      matrixContainer.appendChild(particle);
      particles.push(particle);
    }
  }
  
  // Crear líneas Matrix verticales
  function createMatrixLines() {
    const lineCount = 20;
    
    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement('div');
      line.className = 'matrix-line';
      line.style.cssText = `
        position: absolute;
        width: 1px;
        height: 100%;
        background: linear-gradient(
          to bottom,
          transparent 0%,
          var(--matrix-green) 20%,
          var(--matrix-green) 80%,
          transparent 100%
        );
        left: ${(i / lineCount) * 100}%;
        opacity: ${Math.random() * 0.3 + 0.1};
        animation: matrix-line-pulse ${Math.random() * 8 + 4}s ease-in-out infinite;
      `;
      
      matrixContainer.appendChild(line);
    }
  }
  
  // Crear efecto de ondas Matrix
  function createMatrixWaves() {
    const waveCount = 3;
    
    for (let i = 0; i < waveCount; i++) {
      const wave = document.createElement('div');
      wave.className = 'matrix-wave';
      wave.style.cssText = `
        position: absolute;
        width: 100%;
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          var(--matrix-green) 50%,
          transparent 100%
        );
        top: ${Math.random() * 100}%;
        opacity: 0.1;
        animation: matrix-wave-move ${Math.random() * 15 + 10}s linear infinite;
      `;
      
      matrixContainer.appendChild(wave);
    }
  }
  
  // Inicializar efectos Matrix
  createMatrixParticles();
  createMatrixLines();
  createMatrixWaves();
});

// Agregar estilos CSS para las animaciones Matrix del header
const matrixHeaderStyles = `
  @keyframes matrix-particle-float {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) scale(0);
      opacity: 0;
    }
  }
  
  @keyframes matrix-line-pulse {
    0%, 100% {
      opacity: 0.1;
      transform: scaleY(1);
    }
    50% {
      opacity: 0.4;
      transform: scaleY(1.2);
    }
  }
  
  @keyframes matrix-wave-move {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    10% {
      opacity: 0.2;
    }
    90% {
      opacity: 0.2;
    }
    100% {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;

// Inyectar estilos en el documento
const styleSheet = document.createElement('style');
styleSheet.textContent = matrixHeaderStyles;
document.head.appendChild(styleSheet);
