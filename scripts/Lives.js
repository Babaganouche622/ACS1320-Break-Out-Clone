class Lives {
  constructor(x, y, startingLives) {
    this.x = x;
    this.y = y;
    this.startingLives = startingLives;
    this.lives = startingLives;
    this.font = '16px Ariel';
    this.colour = 'hotpink';
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.colour;
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }

  loseLives(amount = 1) {
    this.lives -= amount;
  }

  resetLives() {
    this.lives = this.startingLives;
  }
}

export default Lives;
