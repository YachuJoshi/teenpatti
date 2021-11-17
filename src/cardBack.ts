import { cardBack } from "./images";
import { CARD_WIDTH, CARD_HEIGHT, CANVAS_HEIGHT } from "./base";

interface Position {
  x: number;
  y: number;
}

interface Step {
  step: number;
  dx: number;
  dy: number;
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

  getMoveStep(initalP: Position, finalP: Position): Step {
    const delX = finalP.x - initalP.x;
    const delY = finalP.y - initalP.y;
    const step = delX > delY ? delX : delY;
    return { dx: delX / step, dy: delY / step, step };
  }

  moveTo(finalP: Position): Promise<void> {
    const { dx, dy, step } = this.getMoveStep(this.position, finalP);
    let i = 1;
    return new Promise((resolve, reject) => {
      const id = setInterval(() => {
        if (i >= step) {
          clearInterval(id);
          resolve();
          return;
        }
        this.position.x += dx;
        this.position.y += dy;
        i++;
      }, 0);
    });
  }
}
