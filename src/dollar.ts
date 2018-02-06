
export class Dollar {
    ammount: number;

    constructor(ammount: number) {
        this.ammount = ammount;
    }

    times(multiplier: number): Dollar {
      return new Dollar(this.ammount * multiplier);
    }

}
