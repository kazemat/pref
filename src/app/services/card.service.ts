import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { CardRank } from '../models/card-rank';
import { CardSuite } from '../models/card-suite';
import { MixedCards } from '../models/mixed-cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() {}

  getValuesOfEnum(e) {
    return Object.keys(e)
      .map(x => e[x])
      .filter(x => !isNaN(Number(x)));
  }

  getAllCards(): Card[] {
    const result: Card[] = [];
    const ranks = this.getValuesOfEnum(CardRank);
    const suites = this.getValuesOfEnum(CardSuite);
    for (const rank of ranks) {
      for (const suite of suites) {
        result.push(new Card(rank, suite));
        continue;
      }
    }
    return result;
  }

  getMixedCards(): MixedCards {
    const cards: Card[] = [].concat(...this.getAllCards());

    const sum = (c: Card) => c.suite + c.rank;

    cards.sort((n1, n2) => Math.random() * sum(n1) - Math.random() * sum(n2));
    cards.sort(
      (n1, n2) => Math.random() * sum(n1) * 2 - Math.random() * sum(n2) * 2
    );
    cards.sort(
      (n1, n2) => Math.random() * sum(n1) * 3 - Math.random() * sum(n2) * 3
    );

    const result = new MixedCards();

    let playerIndex = 0;

    for (const i = 0; i + 2; i < cards.length) {
      if (i !== 0 && i !== 30 && !result.hasBuyIn()) {
        if (Math.random() * 0.7 > 0.5 || i === 28) {
          result.addBuyIn(cards[i], cards[i + 1]);
        }
      }

      result.addCardsToPlayer(playerIndex, cards[i], cards[i + 1]);

      playerIndex = playerIndex === 2 ? 0 : playerIndex + 1;
    }

    return result;
  }
}
