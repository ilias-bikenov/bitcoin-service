import mockDb from '../mockDB';
import { getCurrency, getPriceWithCommission } from '../utils';
import { currencies } from '../common/constants';
import Logger from '../logger';

const recalculatePrice = async () => {
    const { askPrice, bidPrice } = await getCurrency(currencies.BITCOIN_USD);
    const askWithCommision = getPriceWithCommission(askPrice);
    const bidWithCommision = getPriceWithCommission(bidPrice);

    mockDb.bitcoinPrice = (askWithCommision + bidWithCommision) / 2;

    Logger.info('Bitcoin price was updated');
};

const getCurrentPrice = () => {
    return mockDb.bitcoinPrice;
};

export { getCurrentPrice, recalculatePrice };
