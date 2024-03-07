import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cron from 'node-cron';

import Logger from './logger';
import { getCurrentPrice, recalculatePrice } from './bitcoin/bitcoin.service';
import config from './config';

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/up', (req: Request, res: Response) => {
    res.json({ message: 'OK' });
});

app.get('/price', (req: Request, res: Response) => {
    const price = getCurrentPrice();
    res.json({ price });
});

cron.schedule(config.app.priceUpdateFrequency, () => {
    recalculatePrice();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    Logger.error(err);
    res.status(500);
    res.json({
        errors: {
            message: err.message,
        },
    });
});

app.listen(port, () => {
    Logger.info(`Server is running on port ${port}`);
});
