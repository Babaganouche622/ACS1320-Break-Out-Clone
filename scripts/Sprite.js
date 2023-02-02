class Sprite {
  constructor(x = 0, y = 0, width = 100, height = 100, colour = '#f00') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = colour;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.closePath();
  }
}

export default Sprite;
