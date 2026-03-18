document.addEventListener('DOMContentLoaded', () => {
  // Cherry Blossom Generator
  const container = document.getElementById('blossom-container');
  if (!container) return;

  const petalCount = 35; // Number of petals

  for (let i = 0; i < petalCount; i++) {
    createPetal();
  }

  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Randomize properties for natural look
    const size = Math.random() * 12 + 6; // 6px to 18px
    const left = Math.random() * 100; // 0% to 100%
    const duration = Math.random() * 8 + 7; // 7s to 15s
    const delay = Math.random() * 10; // 0s to 10s
    
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${left}vw`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    
    container.appendChild(petal);
  }
});
