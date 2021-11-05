type RoundRectFunction = (
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) => any;

interface CanvasRenderingContext2D {
  roundRect: RoundRectFunction;
}
