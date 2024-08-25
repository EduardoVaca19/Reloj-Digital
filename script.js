const canvas = document.getElementById('clockCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawClock() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Obtener la hora actual
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Configurar estilo del texto
    ctx.fillStyle = '#61dafb';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 100px Arial';
    
    // Dibujar la hora
    ctx.fillText(`${hours}:${minutes}:${seconds}`, canvas.width / 2, canvas.height / 2);
}

function updateClock() {
    drawClock();
    setInterval(drawClock, 1000); // Actualiza el reloj cada segundo
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Ajusta el tamaño del canvas
updateClock();
