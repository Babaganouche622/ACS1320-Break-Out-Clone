export interface Sprite {
  x: number,
  y: number,
  dx: number,
  dy: number,
  width: number,
  height: number,
  colour: HEX,
}
export type HEX = `#${string}`;

export class Sprite implements Sprite {
  constructor(x = 0, y = 0, colour: HEX = '#F806CC', width = 100, height = 100) {
    this.x = x;
    this.y = y;
    this.dx;
    this.dy;
    this.width = width;
    this.height = height;
    this.colour = colour;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.closePath();
  }
}


