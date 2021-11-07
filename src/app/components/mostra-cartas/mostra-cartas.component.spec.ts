import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraCartasComponent } from './mostra-cartas.component';

describe('MostraCartasComponent', () => {
  let component: MostraCartasComponent;
  let fixture: ComponentFixture<MostraCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraCartasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
