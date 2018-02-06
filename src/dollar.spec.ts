import { Dollar } from './dollar';

describe('Dollar', () => {

    it('should multiply', () => {
        const five = new Dollar(5);
        let product = five.times(2);
        expect(product.ammount).toEqual(10);
    });

    it('should multiply twice',() => {
      const five = new Dollar(5);

      let product = five.times(2);
      
      expect(product.ammount).toEqual(10);
      product = five.times(3);
      expect(product.ammount).toEqual(15);
    })
});
