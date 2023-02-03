import { Sprite, HEX } from './Sprite';

class Paddle extends Sprite {
  constructor(x:number, y:number, colour:HEX = '#FF69B4', width = 75, height = 10) {
    super(x, y, colour, width, height); // pass arguments to Sprite!
  }

}

export default Paddle;
