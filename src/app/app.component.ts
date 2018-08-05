import { Component, OnInit } from '@angular/core';
import { CardService } from './services/card.service';
import { MixedCards } from './models/mixed-cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'preference';
  mixedCards: MixedCards;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.mixedCards = this.cardService.getMixedCards();
    console.log(this.cardService.getAllCards());
  }
}
