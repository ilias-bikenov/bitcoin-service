import mockDb from '../mockDB';
import { getCurrency, getPriceWithCommission } from '../utils';
import constants from '../common/constants';
import Logger from '../logger';

const recalculatePrice = async () => {
    const { askPrice, bidPrice } = await getCurrency(
        constants.currencies.BITCOIN_USD,
    );
    const askWithCommision = getPriceWithCommission(askPrice);
    const bidWithCommision = getPriceWithCommission(bidPrice);

    mockDb.bitcoinPrice = (askWithCommision + bidWithCommision) / 2;

    Logger.info('Bitcoin price was updated');
};

const getCurrentPrice = () => {
    return mockDb.bitcoinPrice;
};

export { getCurrentPrice, recalculatePrice };
