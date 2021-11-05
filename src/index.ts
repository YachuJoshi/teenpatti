import { initCanvas } from "./canvas";
import { Card } from "./card";
import { Deck } from "./deck";
import cardImg from "./assets/cards/ace_of_diamonds.png";
import "./style.css";

const { canvas, ctx } = initCanvas();
const card = new Card("Ace", "Diamonds", cardImg);
const deck = new Deck();
let gameInterval: number;

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  card.draw(ctx);
};

const init = () => {
  draw();
  gameInterval = requestAnimationFrame(init);
};

init();
