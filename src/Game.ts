import Ball from './Ball';
import Paddle from './Paddle';
import Score from './Score';
import Lives from './Lives';
import BackgroundCover from './BackgroundCover';
import Bricks from './Bricks';
import { HEX } from './Sprite';

interface Game {
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  brickRowCount: number,
  brickColumnCount: number,
  brickWidth: number,
  brickHeight: number,
  brickPadding: number,
  brickOffsetTop: number,
  brickOffsetLeft: number,
  brickColour: HEX,
  score: Score,
  lives: Lives,
  ball: Ball,
  paddle: Paddle,
  bricks: Bricks,
  background: BackgroundCover,
  rightPressed: boolean,
  leftPressed: boolean,
}

class Game {
  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.brickRowCount = 3;
    this.brickColumnCount = 5;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
    this.brickColour = '#0095DD';

    this.score = new Score(8, 20);
    this.lives = new Lives((this.canvas.width - 110), 20, 3);
    this.ball = new Ball((this.canvas.width / 2), (this.canvas.height - 30));
    this.paddle = new Paddle((this.canvas.width - 75) / 2, this.canvas.height - 10);
    this.bricks = new Bricks(
      this.brickColumnCount,
      this.brickRowCount,
      this.brickWidth,
      this.brickHeight,
      this.brickPadding,
      this.brickOffsetTop,
      this.brickOffsetLeft,
      this.brickColour,
    );
    this.background = new BackgroundCover(this.canvas.width, this.canvas.height);

    this.rightPressed = false;
    this.leftPressed = false;

    this.setup();
  }

  setup() {
    // this.lives.resetLives();
    this.resetBallAndPaddle();

    document.addEventListener('keydown', (e) => {
      this.keyDownHandler(e);
    }, false);
    document.addEventListener('keyup', (e) => {
      this.keyUpHandler(e);
    }, false);
    document.addEventListener('mousemove', (e) => {
      this.mouseMoveHandler(e);
    }, false);
  }

  resetBallAndPaddle() {
    this.ball.x = this.canvas.width / 2;
    this.ball.y = this.canvas.height - 30;
    this.ball.dx = 2;
    this.ball.dy = -2;
    this.paddle.x = (this.canvas.width - this.paddle.width) / 2;
  }

  collisionDetection() {
    for (let c = 0; c < this.bricks.columns; c += 1) {
      for (let r = 0; r < this.bricks.rows; r += 1) {
        const brick = this.bricks.bricks[c][r];
        if (brick.status === 1) {
          if (
            this.ball.x > brick.x
            && this.ball.x < brick.x + brick.width
            && this.ball.y > brick.y
            && this.ball.y < brick.y + this.bricks.height
          ) {
            this.ball.dy = -this.ball.dy;
            brick.status = 0;
            this.score.addPoint();
            this.ball.colourChange();
            if (this.score.score === this.bricks.rows * this.bricks.columns) {
              // eslint-disable-next-line no-alert
              alert('YOU WIN, CONGRATULATIONS!');
              document.location.reload();
            }
          }
        }
      }
    }
  }

  movePaddle() {
    if (this.rightPressed && this.paddle.x < this.canvas.width - this.paddle.width) {
      this.paddle.dx = 7;
      this.paddle.move();
    } else if (this.leftPressed && this.paddle.x > 0) {
      this.paddle.dx = -7
      this.paddle.move();
    }
  }

  collisionWallsDetection() {
    if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius
      || this.ball.x + this.ball.dx < this.ball.radius) {
      this.ball.dx = -this.ball.dx;
      this.ball.colourChange();
    }
    if (this.ball.y + this.ball.dy < this.ball.radius) {
      this.ball.dy = -this.ball.dy;
    } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {
      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
        this.ball.dy = -this.ball.dy;
        this.ball.colourChange();
      } else {
        this.lives.loseLives();
        if (!this.lives.lives) {
          // eslint-disable-next-line no-alert
          alert('GAME OVER');
          document.location.reload();
        } else {
          this.resetBallAndPaddle();
        }
      }
    }
  }

  mouseMoveHandler(e: MouseEvent) {
    const relativeX = e.clientX - this.canvas.offsetLeft;
    if (relativeX > 0 && relativeX < this.canvas.width) {
      this.paddle.x = relativeX - this.paddle.width / 2;
    }
  }

  keyDownHandler(e: KeyboardEvent) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e: KeyboardEvent) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.render(this.ctx);
    this.bricks.render(this.ctx);
    this.score.render(this.ctx);
    this.lives.render(this.ctx);
    this.ball.render(this.ctx);
    this.paddle.render(this.ctx);
    this.ball.move();
    this.movePaddle();
    this.collisionWallsDetection();
    this.collisionDetection();
    requestAnimationFrame(() => {
      this.draw();
    });
  }
}

export default Game;
