import { VALUES } from "./base";
export class Card {
  position: {
    x: number;
    y: number;
  };
  suit: string;
  rank: string;
  value: number;
  cardImage: HTMLImageElement;

  constructor(rank: string, suit: string, src: string) {
    this.initCardImage(src);
    this.suit = suit;
    this.rank = rank;
    this.value = VALUES[this.rank];
    this.position = {
      x: 10,
      y: 10,
    };
  }

  get cardValue() {
    return `${this.rank} of ${this.suit}`;
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
    ctx.drawImage(this.cardImage, this.position.x, this.position.y, 140, 220);
  }

  update(ctx: CanvasRenderingContext2D): void {
    // TODO: Animate card into position
  }
}
