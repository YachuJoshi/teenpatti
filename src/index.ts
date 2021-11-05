import { initCanvas } from "./canvas";
import { Card } from "./card";
import { Deck } from "./deck";
import { Player } from "./player";
import { isConsecutive, areArraysEqual } from "./utils";
import "./style.css";

let gameInterval: number;
const { canvas, ctx } = initCanvas();
const deck = new Deck();
deck.shuffle();
const players = [new Player("Yachu"), new Player("Jennie")];

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

const pairs = (cards: Card[]): boolean => {
  const values = cards.map((card) => card.value);

  if (values[0] == values[1] && values[1] != values[2]) return true;
  if (values[1] == values[2] && values[1] != values[0]) return true;
  if (values[0] == values[2] && values[0] != values[1]) return true;
  return false;
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const init = () => {
  draw();

  gameInterval = requestAnimationFrame(init);
};

init();
