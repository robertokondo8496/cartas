import { Component } from '@angular/core';
import { Cartas } from './models/cartas';
import { Naipes } from './models/naipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  public carta?: Cartas;
  public naipe?: Naipes;

  public exibirCarta(carta: Cartas){
    console.log(carta);
    this.carta = carta;
  }

  public exibirNaipe(naipe: Naipes){
    console.log(naipe);
    this.naipe = naipe;
  }  
}
