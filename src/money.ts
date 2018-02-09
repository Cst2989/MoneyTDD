export class Money {
    protected ammount: number;

    constructor(theAmmount: number) {
        this.ammount = theAmmount;
    }

    equals(money: Object): boolean {
      let someMoney = money as Money;
      return this.ammount == someMoney.ammount && someMoney.constructor.name == this.constructor.name;
    }
}
