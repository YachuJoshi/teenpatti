import { initCanvas } from "./canvas";
import { Card } from "./card";
import { Deck } from "./deck";
import { Player } from "./player";
import { isConsecutive, areArraysEqual } from "./utils";
import "./style.css";

interface Result {
  name: string;
  cards: Card[];
  outcome: string;
  sum: number;
}

let gameInterval: number;
const { canvas, ctx } = initCanvas();
const deck = new Deck();
deck.shuffle();
const players = [
  new Player("Jennie"),
  new Player("Lisa"),
  new Player("Jisoo"),
  new Player("Rose"),
];

for (let i = 0; i < 3; i++) {
  players.forEach((player) => {
    const card = <Card>deck.dealOne();
    player.fillCard(card);
  });
}

const trail = (cards: Card[]): boolean => {
  const values = cards.map((card) => card.value);
  return values.every((val) => val === values[0]);
};

const straightFlush = (cards: Card[]): boolean => {
  return run(cards) && color(cards);
};

const run = (cards: Card[]): boolean => {
  const values = cards.map((card) => card.value);
  return (
    isConsecutive(values) ||
    areArraysEqual(
      values.sort((a, b) => a - b),
      [2, 3, 14]
    )
  );
};

const color = (cards: Card[]): boolean => {
  const suits = cards.map((card) => card.suit);
  return suits.every((suit) => suit === suits[0]);
};

const pair = (cards: Card[]): boolean => {
  const values = cards.map((card) => card.value);

  if (values[0] == values[1] && values[1] != values[2]) return true;
  if (values[1] == values[2] && values[1] != values[0]) return true;
  if (values[0] == values[2] && values[0] != values[1]) return true;
  return false;
};

const possibleOutcomes = [trail, straightFlush, run, color, pair];
const possibleOutcomesString = [
  ...possibleOutcomes.map((outcome) => outcome.name),
  "high",
];

const getPlayerCardSum = (cards: Card[]): number => {
  return cards.reduce((acc, card) => acc + card.value, 0);
};

const getPlayerCardOutcome = (cards: Card[]): string => {
  for (const outcome of possibleOutcomes) {
    if (outcome(cards)) {
      return outcome.name;
    }
  }
  return "high";
};

// const getWinnerOutcomeIndex;

const result: Result[] = players.map((player) => {
  return {
    ...player,
    outcome: getPlayerCardOutcome(player.cards),
    sum: getPlayerCardSum(player.cards),
  };
});

console.log(result);

let winnerResult: Result = result[0];
for (let i = 1; i < result.length; i++) {
  const currentPlayerOutcomeIndex = possibleOutcomesString.indexOf(
    result[i].outcome
  );
  let winnerIndex = possibleOutcomesString.indexOf(winnerResult.outcome);

  if (currentPlayerOutcomeIndex < winnerIndex) {
    winnerResult = result[i];
    continue;
  }

  if (currentPlayerOutcomeIndex === winnerIndex) {
    winnerResult = winnerResult.sum > result[i].sum ? winnerResult : result[i];
  }
}

console.log("Winner", winnerResult);

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const init = () => {
  draw();
  gameInterval = requestAnimationFrame(init);
};

init();
