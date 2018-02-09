import { Franc } from './franc';
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
