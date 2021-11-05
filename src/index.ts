import { initCanvas } from "./canvas";
import { Card } from "./card";
import cardImg from "./assets/cards/2_of_clubs.png";
import "./style.css";

const { canvas, ctx } = initCanvas();
const card = new Card(cardImg);

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  card.draw(ctx);
};

const init = () => {
  draw();
  const gameInterval = requestAnimationFrame(init);
};

init();
