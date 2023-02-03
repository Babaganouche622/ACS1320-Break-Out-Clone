import { Sprite, HEX } from './Sprite';

interface Ball {
  radius: number,
  colours: HEX[],
}

class Ball extends Sprite implements Ball {
  constructor(x = 0, y = 0, colour:HEX = '#FF69B4', radius = 10) {
    super(x, y, colour, 0, 0);
    this.radius = radius;
    this.colours = ['#F806CC', '#A149FA', '#F90716', '#99FEFF', '#49FF00', '#FFF338'];
  }

  colourChange() {
    this.colour = this.colours[Math.floor(Math.random() * this.colours.length)];
  }

  render(ctx: CanvasRenderingContext2D) { // Overrides the existing render method!
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.closePath();
  }
}
export default Ball;
