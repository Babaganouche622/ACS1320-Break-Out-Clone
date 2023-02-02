/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Paddle extends Sprite {
  constructor(x, y, width = 75, height = 10, colour = 'hotpink') {
    super(x, y, width, height, colour); // pass arguments to Sprite!
  }

//   move(dx, dy) {
//     this.x += dx;
//     this.y += dy;
//   }

//   render(ctx, canvas) {
//     ctx.beginPath();
//     ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
//     ctx.fillStyle = '#0095DD';
//     ctx.fill();
//     ctx.closePath();
//   }
}

export default Paddle;
