import { Component, OnInit } from '@angular/core';
import { Naipes } from '../../models/naipes';

@Component({
  selector: 'app-mostra-naipes',
  templateUrl: './mostra-naipes.component.html',
  styleUrls: ['./mostra-naipes.component.css']
})
export class MostraNaipesComponent implements OnInit {

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

}
