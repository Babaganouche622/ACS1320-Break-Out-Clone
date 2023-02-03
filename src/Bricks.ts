import Brick from './Brick';
import { HEX } from './Sprite';

interface Bricks {
  columns: number,
  rows: number,
  bricks: Brick[][],
  width: number,
  height: number,
  padding: number,
  offsetTop: number,
  offsetLeft: number,
  colour: HEX,
}


class Bricks implements Bricks {
  constructor(columns:number, rows:number, width:number, height:number, padding:number, offsetTop:number, offsetLeft:number, colour:HEX) {
    this.columns = columns;
    this.rows = rows;
    this.bricks = [];
    this.width = width;
    this.height = height;
    this.padding = padding;
    this.offsetTop = offsetTop;
    this.offsetLeft = offsetLeft;
    this.colour = colour;

    this.init();
  }

  init() {
    for (let c = 0; c < this.columns; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        const brickX = c * (this.width + this.padding) + this.offsetLeft;
        const brickY = r * (this.height + this.padding) + this.offsetTop;
        this.bricks[c][r] = new Brick(brickX, brickY, this.colour, this.width, this.height);
      }
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    for (let c = 0; c < this.columns; c += 1) {
      for (let r = 0; r < this.rows; r += 1) {
        const brick = this.bricks[c][r];
        if (brick.status === 1) {
          brick.render(ctx);
        }
      }
    }
  }
}
export default Bricks;
