import { getPriceWithCommission } from '../../src/utils';

describe('Utils tests', () => {
    describe('getPriceWithCommision', () => {
        beforeEach(() => {
            jest.resetModules();
        });
        it('should return price with correctly applied commision', () => {
            jest.doMock('../../src/config', () => ({ commission: 0.01 }));
            const mockPrice = 4.0;

            expect(getPriceWithCommission(mockPrice)).toEqual(4.04);
        });
    });
});
