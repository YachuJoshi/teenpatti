import { cardBack } from "./images";
import { CARD_WIDTH, CARD_HEIGHT, CANVAS_HEIGHT } from "./base";

interface Position {
  x: number;
  y: number;
}

export class CardBack {
  position: Position;
  image: HTMLImageElement;

  constructor() {
    this.image = new Image();
    this.image.src = cardBack;
    this.position = {
      x: 40,
      y: CANVAS_HEIGHT / 2 - CARD_HEIGHT / 2,
    };
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      CARD_WIDTH + 20,
      CARD_HEIGHT + 20
    );
  }

  update(finalP: Position): void {
    const initalP = this.position;
  }
}
