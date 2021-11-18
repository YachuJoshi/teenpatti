const formContainer = <HTMLDivElement>document.getElementById("formContainer")!;
const playerInputs: HTMLInputElement[] = Array.from(
  document.querySelectorAll("input")
);
const startButton = <HTMLButtonElement>document.getElementById("submit")!;

const winnerContainer = <HTMLDivElement>(
  document.getElementById("winnerContainer")!
);
const restartButton = <HTMLButtonElement>document.getElementById("restart")!;
const winnerEl = <HTMLSpanElement>document.getElementById("winner")!;

const [playerOneInput, playerTwoInput] = playerInputs;

export {
  formContainer,
  playerOneInput,
  playerTwoInput,
  startButton,
  winnerContainer,
  restartButton,
  winnerEl,
};
