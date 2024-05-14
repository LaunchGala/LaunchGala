

<template>
    <div id="app">
<canvas ref="gameCanvas"></canvas>
</div>
</template>

<script>
export default {
name: 'App',

mounted() {
  this.canvas = this.$refs.gameCanvas;
  this.ctx = this.canvas.getContext('2d');
  this.canvas.width = 800;
  this.canvas.height = 600;
  this.ball = { x: this.canvas.width / 2, y: this.canvas.height / 2, vx: 5, vy: 5, size: 10 };
  this.playerPaddle = { x: 10, y: this.canvas.height / 2 - 50, width: 10, height: 100, speed: 5 };
  this.aiPaddle = { x: this.canvas.width - 20, y: this.canvas.height / 2 - 50, width: 10, height: 100, speed: 5 };

  document.addEventListener('keydown', this.movePlayerPaddle);
  this.gameLoop();
},

methods: {
  drawRect(x, y, w, h, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  },

  drawCircle(x, y, radius, color) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  },

  draw() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw paddles
    this.drawRect(this.playerPaddle.x, this.playerPaddle.y, this.playerPaddle.width, this.playerPaddle.height, '#fff');
    this.drawRect(this.aiPaddle.x, this.aiPaddle.y, this.aiPaddle.width, this.aiPaddle.height, '#fff');
    
    // Draw ball
    this.drawCircle(this.ball.x, this.ball.y, this.ball.size, '#fff');
  },

  update() {
    // Move ball
    this.ball.x += this.ball.vx;
    this.ball.y += this.ball.vy;

    // Ball collision with top and bottom walls
    if (this.ball.y - this.ball.size < 0 || this.ball.y + this.ball.size > this.canvas.height) {
      this.ball.vy = -this.ball.vy;
    }

    // Ball collision with paddles
    if (this.ball.x - this.ball.size < this.playerPaddle.x + this.playerPaddle.width && 
        this.ball.y > this.playerPaddle.y && this.ball.y < this.playerPaddle.y + this.playerPaddle.height) {
      this.ball.vx = -this.ball.vx;
    }
  
    if (this.ball.x + this.ball.size > this.aiPaddle.x && 
        this.ball.y > this.aiPaddle.y && this.ball.y < this.aiPaddle.y + this.aiPaddle.height) {
      this.ball.vx = -this.ball.vx;
    }

    // Ball out of bounds
    if (this.ball.x - this.ball.size < 0 || this.ball.x + this.ball.size > this.canvas.width) {
      this.resetBall();
    }

    // AI paddle movement
    if (this.aiPaddle.y + this.aiPaddle.height / 2 < this.ball.y) {
      this.aiPaddle.y += this.aiPaddle.speed;
    } else {
      this.aiPaddle.y -= this.aiPaddle.speed;
    }
  },

  resetBall() {
    this.ball.x = this.canvas.width / 2;
    this.ball.y = this.canvas.height / 2;
    this.ball.vx = -this.ball.vx;
  },

  movePlayerPaddle(event) {
    const key = event.key;
    if (key === 'ArrowUp') {
      this.playerPaddle.y -= this.playerPaddle.speed;
    } else if (key === 'ArrowDown') {
      this.playerPaddle.y += this.playerPaddle.speed;
    }
  },

  gameLoop() {
    this.update();
    this.draw();
    requestAnimationFrame(this.gameLoop);
  }
}
}
</script>

<style>
body {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #333;
margin: 0;
}

canvas {
background-color: #000;
display: block;
margin: auto;
border: 1px solid #fff;
}
</style>