import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraNaipesComponent } from './mostra-naipes.component';

describe('MostraNaipesComponent', () => {
  let component: MostraNaipesComponent;
  let fixture: ComponentFixture<MostraNaipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraNaipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraNaipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
