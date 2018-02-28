/// <reference path='./ext.d.ts'/>

import { Dollar } from './dollar';

export abstract class Money {
    protected ammount: number;

    constructor(theAmmount: number) {
        this.ammount = theAmmount;
    }

    abstract times(multiplier: number): Money;

    equals(money: Object): boolean {
      let someMoney = money as Money;
      return this.ammount === someMoney.ammount && someMoney.constructor.name === this.constructor.name;
    }

    static franc(ammount: number): Money {
      return new Franc(ammount);
    }

    static dollar(ammount: number): Money {
      return new Dollar(ammount);
    }

}

export class Franc extends Money {

    constructor(ammount: number) { super(ammount); }

    times(multiplier: number): Franc {
      return new Franc(this.ammount * multiplier);
    }
}
