import axios from 'axios';
import config from '../config';

const getPriceWithCommission = (price: number) =>
    price * (1 + config.app.commission);

const getCurrency = async (symbol: string) => {
    const res = await axios.get(
        `${config.app.binanceApiUrl}/ticker/bookTicker?symbol=${symbol}`,
    );
    return res.data;
};

export { getPriceWithCommission, getCurrency };
