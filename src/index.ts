import { initCanvas } from "./canvas";
import { Game } from "./game";
import { Card } from "./card";
import {
  formContainer,
  playerOneInput,
  playerTwoInput,
  startButton,
  restartButton,
  winnerContainer,
  winnerEl,
} from "./elements";
import "./style.css";

interface Result {
  name: string;
  cards: Card[];
  outcome: string;
  sum: number;
}

let gameInterval: number;
const { canvas, ctx } = initCanvas();
let game: Game;

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.draw(ctx);
  gameInterval = requestAnimationFrame(draw);
};

const showWinnerScreen = (winner: Result): void => {
  winnerContainer.style.display = "flex";
  winnerEl.textContent = winner.name;
};

const init = async (players: string[]) => {
  formContainer.style.display = "none";
  winnerContainer.style.display = "none";
  game = new Game(players);
  draw();
  const winner = await game.start();
  showWinnerScreen(winner);
};

startButton.addEventListener("click", async (e) => {
  e.preventDefault();
  if (playerOneInput.value !== "" && playerTwoInput.value !== "") {
    init([playerOneInput.value, playerTwoInput.value]);
  }
});

restartButton.addEventListener("click", (e) => {
  e.preventDefault();
  init([playerOneInput.value, playerTwoInput.value]);
});
