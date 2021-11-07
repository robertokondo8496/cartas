import { Cartas } from './cartas';
import { Naipes } from './naipes';

describe('Cartas', () => {

  let carta: Cartas;
  let naipe: Naipes;

  beforeEach(() => {
    naipe = new Naipes('1');
    carta = new Cartas(
      '1',
      naipe,
    )
  })
});
