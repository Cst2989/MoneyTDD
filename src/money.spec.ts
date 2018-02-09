import { Franc } from './franc';
import { Dollar } from './dollar';
describe('Money', () => {
    it('should not be equal', () => {
      let five = new Franc(5);
      expect(five.equals(new Dollar(5))).toBeFalsy();
    })
});
