import { Card } from "./card";
import { shuffle } from "./utils";
import { SUITS, RANKS } from "./base";

export class Deck {
  deck: Card[];

  constructor() {
    this.initDeck();
  }

  initDeck(): void {
    this.deck = [];
    SUITS.forEach((suit) => {
      RANKS.forEach((rank) => {
        this.deck.push(new Card(rank, suit));
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
