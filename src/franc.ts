import { Money } from './money';

export class Franc extends Money {

    constructor(ammount: number) { super(ammount); }

    times(multiplier: number): Franc {
      return new Franc(this.ammount * multiplier);
    }
}
