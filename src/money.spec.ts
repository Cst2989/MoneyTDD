import { Franc } from './franc';
import { Dollar } from './dollar';
import { Money } from './money';

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
      let five: Money  = Money.dollar(5);
      let six: Money = Money.franc(5);

      expect(five.equals(Money.dollar(5))).toBeTruthy();
      expect(five.equals(Money.dollar(6))).toBeFalsy();

      expect(six.equals(Money.franc(5))).toBeTruthy();
      expect(six.equals(Money.franc(6))).toBeFalsy();
      expect(six.equals(Money.dollar(5))).toBeFalsy();
    })
});
