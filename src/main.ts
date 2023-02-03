import Game from './Game';

const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const game = new Game(canvas, ctx);

game.draw();
