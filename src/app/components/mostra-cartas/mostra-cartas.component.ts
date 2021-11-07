import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cartas } from '../../models/cartas';

@Component({
  selector: 'app-mostra-cartas',
  templateUrl: './mostra-cartas.component.html',
  styleUrls: ['./mostra-cartas.component.css']
})
export class MostraCartasComponent implements OnInit {

  @Output()
  public cartaSelecionada: EventEmitter<Cartas> = new EventEmitter();

  public cartas: Cartas[] = [
    new Cartas(
      'A',
      'Naipe'
    ),
    new Cartas(
      '2',
      'Naipe'
    ),
    new Cartas(
      '3',
      'Naipe'
    ),
    new Cartas(
      '4',
      'Naipe'
    ),
    new Cartas(
      '5',
      'Naipe'
    ),
    new Cartas(
      '6',
      'Naipe'
    ),
    new Cartas(
      '7',
      'Naipe'
    ),
    new Cartas(
      'J',
      'Naipe'
    ),
    new Cartas(
      'Q',
      'Naipe'
    ),
    new Cartas(
      'K',
      'Naipe'
    ),

  ]
  constructor() { }

  ngOnInit(): void {
  }

  public selecionaCarta(carta: Cartas){
    this.cartaSelecionada.emit(carta);
  }
}
