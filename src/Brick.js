/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Brick extends Sprite {
  constructor(x, y, colour, width = 75, height = 20) {
    super(x, y, width, height, colour); // pass arguments to Sprite!
    this.status = 1; // adds a new property
  }

  // render(ctx) {
  //   ctx.beginPath();
  //   ctx.rect(this.x, this.y, this.width, this.height);
  //   ctx.fillStyle = this.colour;
  //   ctx.fill();
  //   ctx.closePath();
  // }
}

export default Brick;
