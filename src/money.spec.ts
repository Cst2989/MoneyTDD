import { Money } from './money';
import { Franc } from './money';
import { Dollar } from './dollar';

describe('Money', () => {
    it('should not be equal', () => {
      let five = new Franc(5);
      expect(five.equals(new Dollar(5))).toBeFalsy();

    })
    it('should test multiplication', () => {

      let five: Money  = Money.dollar(5);
      expect(Money.dollar(10)).toEqual(five.times(2));
      expect(Money.dollar(15)).toEqual(five.times(3));
    })

    it('should test franc multiplication', () => {

      let five: Money  = Money.franc(5);
      expect(Money.franc(10)).toEqual(five.times(2));
      expect(Money.franc(15)).toEqual(five.times(3));
    })

    it('should be equal', () => {
      let fiveDollar: Money  = Money.dollar(5);
      let fiveFranc: Money = Money.franc(5);

      expect(fiveDollar.equals(Money.dollar(5))).toBeTruthy();
      expect(fiveDollar.equals(Money.dollar(6))).toBeFalsy();

      expect(fiveFranc.equals(Money.franc(5))).toBeTruthy();
      expect(fiveFranc.equals(Money.franc(6))).toBeFalsy();
      expect(fiveFranc.equals(Money.dollar(5))).toBeFalsy();
    })
});

describe('Franc', () => {

    it('should multiply', () => {
        const five = new Franc(5);
        expect(new Franc(10)).toEqual(five.times(2));
    });

    it('should multiply twice',() => {
      const five = new Franc(5);
      expect(new Franc(10)).toEqual(five.times(2));
      expect(new Franc(15)).toEqual(five.times(3));
    })

    it('should be equal', () => {
      let five = new Franc(5);
      expect(five.equals(new Franc(5))).toBeTruthy();
      expect(five.equals(new Franc(6))).toBeFalsy();
    })
});
