import { HEX } from "./Sprite";

interface Lives {
  x: number,
  y: number,
  startingLives: number,
  lives: number,
  font: string,
  colour: HEX,
}

class Lives implements Lives {
  constructor(x: number, y: number, startingLives: number) {
    this.x = x;
    this.y = y;
    this.startingLives = startingLives;
    this.lives = startingLives;
    this.font = '16px Ariel';
    this.colour = '#FF69B4';
  }

  render(ctx:CanvasRenderingContext2D) {
    ctx.font = this.font;
    ctx.fillStyle = this.colour;
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }

  loseLives(amount:number = 1) {
    this.lives -= amount;
  }

  resetLives() {
    this.lives = this.startingLives;
  }
}

export default Lives;
