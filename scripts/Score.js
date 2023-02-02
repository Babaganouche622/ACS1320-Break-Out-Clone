/* eslint-disable import/prefer-default-export */
class Score {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.score = 0;
    this.font = '16px Ariel';
    this.colour = 'hotpink';
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.colour;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }

  addPoint(amount = 1) {
    this.score += amount;
  }

  resetScore() {
    this.score = 0;
  }
}

export default Score;
