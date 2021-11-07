import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./base";

export const initCanvas = () => {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");
  const ctx = canvas.getContext("2d")!;
  canvas.height = CANVAS_HEIGHT;
  canvas.width = CANVAS_WIDTH;

  CanvasRenderingContext2D.prototype.roundRect = function (
    x,
    y,
    width,
    height,
    radius
  ) {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;
    this.beginPath();
    this.moveTo(x + radius, y);
    this.arcTo(x + width, y, x + width, y + height, radius);
    this.arcTo(x + width, y + height, x, y + height, radius);
    this.arcTo(x, y + height, x, y, radius);
    this.arcTo(x, y, x + width, y, radius);
    this.closePath();
    return this;
  };

  return { canvas, ctx };
};
