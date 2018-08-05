import { CardRank } from './card-rank';
import { CardSuite } from './card-suite';

export class Card {
  constructor(public rank: CardRank, public suite: CardSuite) {}

  isGreateThen(card: Card): boolean {
    return this.rank > card.rank;
  }

  canBite(other: Card, trumpSuite?: CardSuite | null): boolean {
    let otherIsTrump: boolean, thisIsTrump: boolean;
    if (trumpSuite) {
      otherIsTrump = other.suite === trumpSuite;
      thisIsTrump = this.suite === trumpSuite;
    }

    if (thisIsTrump && !otherIsTrump) {
      return true;
    }

    if (this.suite && other.suite) {
      return this.rank > other.rank;
    }

    return false;
  }
}
