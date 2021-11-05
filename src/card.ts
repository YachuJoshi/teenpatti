export class Card {
  cardImage: HTMLImageElement;
  x: number;
  y: number;

  constructor(src: string) {
    this.x = 10;
    this.y = 10;
    this.initCardImage(src);
  }

  initCardImage(src: string): void {
    this.cardImage = new Image();
    this.cardImage.src = src;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.roundRect(0, 0, 160, 240, 6);
    ctx.fill();
    ctx.closePath();
    ctx.drawImage(this.cardImage, this.x, this.y, 140, 220);
  }
}
