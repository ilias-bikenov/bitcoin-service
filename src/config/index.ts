import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    port: process.env.PORT,
    app: {
        priceUpdateFrequency:
            process.env.PRICE_UPDATE_FREQUENCY || '*/10 * * * * *',
        commission: parseFloat(process.env.COMMISSION) || 0.01,
        binanceApiUrl: 'https://api.binance.com/api/v3',
    },
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
};
