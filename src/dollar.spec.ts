import { Dollar } from './dollar';

describe('Dollar', () => {

    it('should multiply', () => {
        const five = new Dollar(5);
        expect(new Dollar(10)).toEqual(five.times(2));
    });

    it('should multiply twice',() => {
      const five = new Dollar(5);
      expect(new Dollar(10)).toEqual(five.times(2));
      expect(new Dollar(15)).toEqual(five.times(3));
    })

    it('should be equal', () => {
      let five = new Dollar(5);
      expect(five.equals(new Dollar(5))).toBeTruthy();
      expect(five.equals(new Dollar(6))).toBeFalsy();
    })
});
