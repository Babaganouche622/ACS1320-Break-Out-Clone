class BackgroundCover {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    // this.colour = colour;
  }

  render(ctx) {
    const backgroundGradient = ctx.createLinearGradient(0, 0, 0, this.height);
    backgroundGradient.addColorStop(0, '#171e26');
    backgroundGradient.addColorStop(1, '#3f586b');
    // fill background
    ctx.fillStyle = backgroundGradient;
    ctx.fillRect(0, 0, this.width, this.height);
  }
}

export default BackgroundCover;
