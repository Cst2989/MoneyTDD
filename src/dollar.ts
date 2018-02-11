import { Money } from './money';

export class Dollar extends Money {

    constructor(ammount: number) { super(ammount); }

    times(multiplier: number): Dollar {
      return new Dollar(this.ammount * multiplier);
    }
}
