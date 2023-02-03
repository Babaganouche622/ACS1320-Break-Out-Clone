import { Sprite, HEX } from './Sprite';

class Brick extends Sprite {
  status: number
  constructor(x:number, y:number, colour:HEX, width = 75, height = 20) {
    super(x, y, colour, width, height); // pass arguments to Sprite!
    this.status = 1; // adds a new property
  }
}

export default Brick;
