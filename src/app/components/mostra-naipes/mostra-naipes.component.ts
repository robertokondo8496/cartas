import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Naipes } from '../../models/naipes';

@Component({
  selector: 'app-mostra-naipes',
  templateUrl: './mostra-naipes.component.html',
  styleUrls: ['./mostra-naipes.component.css']
})
export class MostraNaipesComponent implements OnInit {

  @Output()
  public naipeSelecionado: EventEmitter<Naipes> = new EventEmitter();  

  public naipes: Naipes[] = [
    new Naipes(
      '♥'
    ),
    new Naipes(
      '♦'
    ),
    new Naipes(
      '♣'
    ),
    new Naipes(
      '♠'
    ),            
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public selecionaNaipe(naipe: Naipes){
    this.naipeSelecionado.emit(naipe);
  }
}
