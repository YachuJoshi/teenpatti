import { VALUES, CARD_HEIGHT, CARD_WIDTH } from "./base";

interface Position {
  x: number;
  y: number;
}
export class Card {
  suit: string;
  rank: string;
  value: number;
  cardImage: HTMLImageElement;

  constructor(rank: string, suit: string, src: string) {
    this.initCardImage(src);
    this.suit = suit;
    this.rank = rank;
    this.value = VALUES[this.rank];
  }

  get cardValue() {
    return `${this.rank} of ${this.suit}`;
  }

  initCardImage(src: string): void {
    this.cardImage = new Image();
    this.cardImage.src = src;
  }

  draw(ctx: CanvasRenderingContext2D, position: Position): void {
    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.roundRect(
      position.x - 10,
      position.y - 10,
      CARD_WIDTH + 20,
      CARD_HEIGHT + 20,
      6
    );
    ctx.fill();
    ctx.closePath();
    ctx.drawImage(
      this.cardImage,
      position.x,
      position.y,
      CARD_WIDTH,
      CARD_HEIGHT
    );
  }

  update(ctx: CanvasRenderingContext2D): void {
    // TODO: Animate card into position
  }
}
