import axios from 'axios';
import config from '../config';
import { Currency } from '../bitcoin/currency.type';
import Logger from '../logger';

const getPriceWithCommission = (price: number) =>
    price * (1 + config.app.commission);

const getCurrency = async (symbol: string): Promise<Currency> => {
    try {
        const res = await axios.get(
            `${config.app.binanceApiUrl}/ticker/bookTicker?symbol=${symbol}`,
        );
        return res.data;
    } catch (err) {
        Logger.error(err);
        throw new Error('Internal server error');
    }
};

export { getPriceWithCommission, getCurrency };
