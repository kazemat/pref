import { Card } from './card';

export class MixedCards {
  player1: Card[] = [];
  player2: Card[] = [];
  player3: Card[] = [];
  buyIn: Card[] = [];

  addBuyIn(...cards: Card[]) {
    this.buyIn.push(...cards);
  }

  addCardsToPlayer(playerIndex: number, ...cards: Card[]) {
    this['player' + (playerIndex + 1)].push(...cards);
  }

  hasBuyIn(): boolean {
    return this.buyIn.length > 0;
  }
}
