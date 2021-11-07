import { Card } from "./card";
import { shuffle } from "./utils";
import { cardImage } from "./images";
import { SUITS, RANKS } from "./base";

export class Deck {
  deck: Card[];

  constructor() {
    this.initDeck();
  }

  getCardImage = (index: number, suit: string): string => {
    if (suit === "Clubs") return cardImage[index][0];
    if (suit === "Diamonds") return cardImage[index][1];
    if (suit === "Hearts") return cardImage[index][2];
    if (suit === "Spades") return cardImage[index][3];
    return 'None';
  };

  initDeck(): void {
    this.deck = [];
    SUITS.forEach((suit) => {
      RANKS.forEach((rank) => {
        const cardImg = this.getCardImage(RANKS.indexOf(rank), suit);
        this.deck.push(new Card(rank, suit, cardImg));
      });
    });
  }

  shuffle(): void {
    this.deck = shuffle(this.deck);
  }

  dealOne(): Card | Error {
    if (this.deck.length) {
      return this.deck.pop()!;
    }
    throw new Error("Out Of Cards");
  }

  get fullDeck(): Card[] {
    return this.deck;
  }
}
