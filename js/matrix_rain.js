// Matrix Rain Effect
class MatrixRain {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.columns = [];
    this.fontSize = 14;
    this.init();
  }

  init() {
    this.createCanvas();
    this.setupColumns();
    this.animate();
    this.handleResize();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '-1';
    this.canvas.style.opacity = '0.3';
    document.body.appendChild(this.canvas);
    
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setupColumns() {
    const columnsCount = Math.floor(this.canvas.width / this.fontSize);
    this.columns = [];
    
    for (let i = 0; i < columnsCount; i++) {
      this.columns[i] = {
        x: i * this.fontSize,
        y: Math.random() * this.canvas.height,
        speed: Math.random() * 3 + 1,
        characters: this.generateRandomString(20)
      };
    }
  }

  generateRandomString(length) {
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
    }
    return result;
  }

  draw() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.fillStyle = '#00ff00';
    this.ctx.font = `${this.fontSize}px 'Share Tech Mono', monospace`;
    
    this.columns.forEach((column, index) => {
      const char = column.characters.charAt(Math.floor(column.y / this.fontSize) % column.characters.length);
      
      // Draw the character
      this.ctx.fillStyle = '#00ff00';
      this.ctx.fillText(char, column.x, column.y);
      
      // Add glow effect to some characters
      if (Math.random() < 0.1) {
        this.ctx.shadowColor = '#00ff00';
        this.ctx.shadowBlur = 10;
        this.ctx.fillStyle = '#00ff41';
        this.ctx.fillText(char, column.x, column.y);
        this.ctx.shadowBlur = 0;
      }
      
      // Move the column down
      column.y += column.speed;
      
      // Reset column if it goes off screen
      if (column.y > this.canvas.height) {
        column.y = 0;
        column.characters = this.generateRandomString(20);
      }
    });
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }

  handleResize() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.setupColumns();
    });
  }
}

// Initialize Matrix Rain when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MatrixRain();
});

// Matrix Glitch Effect for Text
class MatrixGlitch {
  constructor(element) {
    this.element = element;
    this.originalText = element.textContent;
    this.glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    this.isGlitching = false;
  }

  startGlitch() {
    if (this.isGlitching) return;
    this.isGlitching = true;
    this.glitchInterval = setInterval(() => {
      this.applyGlitch();
    }, 100);
    
    setTimeout(() => {
      this.stopGlitch();
    }, 2000);
  }

  applyGlitch() {
    let glitchedText = '';
    for (let i = 0; i < this.originalText.length; i++) {
      if (Math.random() < 0.1) {
        glitchedText += this.glitchChars.charAt(Math.floor(Math.random() * this.glitchChars.length));
      } else {
        glitchedText += this.originalText.charAt(i);
      }
    }
    this.element.textContent = glitchedText;
  }

  stopGlitch() {
    clearInterval(this.glitchInterval);
    this.element.textContent = this.originalText;
    this.isGlitching = false;
  }
}

// Apply glitch effect to titles
document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('h1, h2, h3');
  titles.forEach(title => {
    const glitch = new MatrixGlitch(title);
    title.addEventListener('mouseenter', () => {
      glitch.startGlitch();
    });
  });
});

// Matrix Terminal Effect
class MatrixTerminal {
  constructor(element) {
    this.element = element;
    this.text = element.textContent;
    this.typedText = '';
    this.index = 0;
    this.isTyping = false;
  }

  startTyping() {
    if (this.isTyping) return;
    this.isTyping = true;
    this.element.textContent = '';
    this.typedText = '';
    this.index = 0;
    this.typeNextChar();
  }

  typeNextChar() {
    if (this.index < this.text.length) {
      this.typedText += this.text.charAt(this.index);
      this.element.textContent = this.typedText + '|';
      this.index++;
      setTimeout(() => {
        this.typeNextChar();
      }, 50 + Math.random() * 100);
    } else {
      this.element.textContent = this.typedText;
      this.isTyping = false;
    }
  }
}

// Apply terminal effect to specific elements
document.addEventListener('DOMContentLoaded', () => {
  const terminalElements = document.querySelectorAll('.mi-nombre, .nombre-grande');
  terminalElements.forEach(element => {
    const terminal = new MatrixTerminal(element);
    setTimeout(() => {
      terminal.startTyping();
    }, 1000);
  });
});
