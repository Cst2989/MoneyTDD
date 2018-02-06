
export class Dollar {
    ammount: number;

    constructor(ammount: number) {
        this.ammount = ammount;
    }

    times(multiplier: number): void {
      this.ammount = this.ammount * multiplier;
    }
}
