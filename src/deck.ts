import { SUITS, RANKS } from "./base";
import { shuffle } from "./utils";

export class Deck {
  deck: string[];

  constructor() {
    this.initDeck();
    this.shuffleDeck();
  }

  initDeck(): void {
    this.deck = [];
    SUITS.forEach((suit) => {
      RANKS.forEach((rank) => {
        this.deck.push(`${rank} of ${suit}`);
      });
    });
  }

  shuffleDeck(): void {
    this.deck = shuffle(this.deck);
  }

  dealOne(): string | Error {
    if (this.deck.length) {
      return this.deck.pop()!;
    }
    throw new Error("Out Of Cards");
  }

  get fullDeck(): string[] {
    return this.deck;
  }
}
