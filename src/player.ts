import { Card } from "./card";

export class Player {
  name: string;
  cards: Card[];

  constructor(name: string) {
    this.name = name;
    this.cards = [];
  }

  fillCard(card: Card): void {
    this.cards.push(card);
  }
}
