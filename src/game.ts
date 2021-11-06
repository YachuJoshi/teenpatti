import { Card } from "./card";
import { Deck } from "./deck";
import { Player } from "./player";
import { isConsecutive, areArraysEqual } from "./utils";

interface Result {
  name: string;
  cards: Card[];
  outcome: string;
  sum: number;
}

export class Game {
  deck: Deck;
  players: Player[];
  possibleOutcomes: ((cards: Card[]) => boolean)[];
  possibleOutcomesString: string[];

  constructor() {
    this.deck = new Deck();
    this.players = [
      new Player("Jennie"),
      new Player("Lisa"),
      new Player("Jisoo"),
      new Player("Rose"),
    ];
    this.possibleOutcomes = [
      this.trail,
      this.straightFlush,
      this.run,
      this.color,
      this.pair,
    ];
    this.possibleOutcomesString = [
      "trail",
      "straightFlush",
      "run",
      "color",
      "pair",
      "high",
    ];
  }

  distributeCards(): void {
    for (let i = 0; i < 3; i++) {
      this.players.forEach((player) => {
        const card = <Card>this.deck.dealOne();
        player.fillCard(card);
      });
    }
  }

  trail = (cards: Card[]): boolean => {
    const values = cards.map((card) => card.value);
    return values.every((val) => val === values[0]);
  };

  straightFlush = (cards: Card[]): boolean => {
    return this.run(cards) && this.color(cards);
  };

  run = (cards: Card[]): boolean => {
    const values = cards.map((card) => card.value);
    return (
      isConsecutive(values) ||
      areArraysEqual(
        values.sort((a, b) => a - b),
        [2, 3, 14]
      )
    );
  };

  color = (cards: Card[]): boolean => {
    const suits = cards.map((card) => card.suit);
    return suits.every((suit) => suit === suits[0]);
  };

  pair = (cards: Card[]): boolean => {
    const values = cards.map((card) => card.value);

    if (values[0] == values[1] && values[1] != values[2]) return true;
    if (values[1] == values[2] && values[1] != values[0]) return true;
    if (values[0] == values[2] && values[0] != values[1]) return true;
    return false;
  };

  getHighestCard = (cards: Card[]): number => {
    const values = cards.map((card) => card.value);
    return Math.max(...values);
  };

  getPlayerCardSum = (cards: Card[]): number => {
    return cards.reduce((acc, card) => acc + card.value, 0);
  };

  getPlayerCardOutcome = (cards: Card[]): string => {
    for (let i = 0; i < this.possibleOutcomes.length; i++) {
      const outcome = this.possibleOutcomes[i];
      if (outcome(cards)) {
        return this.possibleOutcomesString[i];
      }
    }
    return "high";
  };

  getWinnerResult = (result: Result[]): Result => {
    let winnerResult: Result = result[0];
    for (let i = 1; i < result.length; i++) {
      const currentPlayerOutcomeIndex = this.possibleOutcomesString.indexOf(
        result[i].outcome
      );
      let winnerIndex = this.possibleOutcomesString.indexOf(
        winnerResult.outcome
      );

      if (currentPlayerOutcomeIndex < winnerIndex) {
        winnerResult = result[i];
        continue;
      }

      if (currentPlayerOutcomeIndex === winnerIndex) {
        if (winnerResult.sum < result[i].sum) {
          winnerResult = result[i];
          continue;
        }

        if (winnerResult.sum === result[i].sum) {
          winnerResult =
            this.getHighestCard(winnerResult.cards) >
            this.getHighestCard(result[i].cards)
              ? winnerResult
              : result[i];
        }
      }
    }
    return winnerResult;
  };

  start() {
    this.deck.shuffle();
    this.distributeCards();

    const result: Result[] = this.players.map((player) => {
      return {
        ...player,
        outcome: this.getPlayerCardOutcome(player.cards),
        sum: this.getPlayerCardSum(player.cards),
      };
    });

    console.log(result);
    let winnerResult = this.getWinnerResult(result);
    console.log("Winner", winnerResult);
  }
}
