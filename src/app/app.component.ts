import { Component } from '@angular/core';
import { Cartas } from './models/cartas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  public carta?: Cartas;

  public exibirCarta(carta: Cartas){
    console.log(carta);
    this.carta = carta;
  }
}
