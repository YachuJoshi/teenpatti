import { initCanvas } from "./canvas";
import { Game } from "./game";
import "./style.css";

let gameInterval: number;
const { canvas, ctx } = initCanvas();
const game = new Game();
game.start();

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.draw(ctx);
};

const init = () => {
  draw();
  gameInterval = requestAnimationFrame(init);
};

init();
