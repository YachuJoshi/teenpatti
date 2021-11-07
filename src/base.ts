const SUITS: string[] = ["Clubs", "Diamonds", "Hearts", "Spades"];

const RANKS: string[] = [
  "Ace",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
];

const VALUES: {
  [key: string]: number;
} = {
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 11,
  Queen: 12,
  King: 13,
  Ace: 14,
};

const CANVAS_HEIGHT = 700;
const CANVAS_WIDTH = 1000;
const CARD_HEIGHT = 220;
const CARD_WIDTH = 140;
const CARD_LR_OFFSET = (CANVAS_WIDTH - ((CARD_WIDTH + 20) * 3 + 80)) / 2;
const CARD_TB_OFFSET = (CANVAS_HEIGHT - ((CARD_HEIGHT + 20) * 2 + 100)) / 2;

export {
  SUITS,
  RANKS,
  VALUES,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CARD_HEIGHT,
  CARD_WIDTH,
  CARD_LR_OFFSET,
  CARD_TB_OFFSET,
};
