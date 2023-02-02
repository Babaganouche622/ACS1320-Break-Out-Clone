/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Ball extends Sprite {
  constructor(x = 0, y = 0, radius = 10, colour = 'hotpink') {
    super(x, y, 0, 0, colour);
    this.radius = radius;
    this.colours = ['#F806CC', '#A149FA', '#F90716', '#99FEFF', '#49FF00', '#FFF338'];
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  colourChange() {
    this.colour = this.colours[Math.floor(Math.random() * this.colours.length)];
  }

  render(ctx) { // Overrides the existing render method!
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.closePath();
  }
}
export default Ball;
