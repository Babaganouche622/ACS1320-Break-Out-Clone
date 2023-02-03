import { HEX } from "./Sprite";

interface Score {
  x: number,
  y: number,
  score: number,
  font: string,
  colour: HEX,
}

class Score implements Score {
  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
    this.score = 0;
    this.font = '16px Ariel';
    this.colour = '#FF69B4';
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.font = this.font;
    ctx.fillStyle = this.colour;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }

  addPoint(amount:number = 1) {
    this.score += amount;
  }

  resetScore() {
    this.score = 0;
  }
}

export default Score;
