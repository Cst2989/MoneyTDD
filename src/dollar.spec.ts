import { Dollar } from './dollar';

describe('Dollar', () => {
    it('should greet', () => {
        const five = new Dollar(5);
        five.times(2);
        expect(five.ammount).toEqual(10);
    });
});
