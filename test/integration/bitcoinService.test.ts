import { Currency } from '../../src/bitcoin/currency.type';
import mockDB from '../../src/mockDB';
import { recalculatePrice } from '../../src/bitcoin/bitcoin.service';

import * as mockUtils from '../../src/utils';

const mockCurrency: Currency = {
    symbol: 'BTCUSDT',
    bidPrice: 60000.0,
    bidQty: 1.35742,
    askPrice: 61000.0,
    askQty: 8.87949,
};
jest.spyOn(mockUtils, 'getCurrency').mockResolvedValue(mockCurrency);
jest.spyOn(mockUtils, 'getPriceWithCommission');

describe('Bitcoin service tests', () => {
    describe('recalculatePrice', () => {
        it('should update bitcoin price correctly', async () => {
            process.env.COMMISSION = '0.01';
            await recalculatePrice();

            expect(mockUtils.getPriceWithCommission).toHaveBeenCalledWith(
                60000.0,
            );
            expect(mockUtils.getPriceWithCommission).toHaveBeenCalledWith(
                61000.0,
            );
            expect(mockUtils.getCurrency).toHaveBeenCalledTimes(1);
            expect(mockUtils.getPriceWithCommission).toHaveBeenCalledTimes(2);
            expect(mockDB.bitcoinPrice).toBe(61105.0);
        });
    });
});
