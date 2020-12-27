import express from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

config();

connectDB();

const app = express();

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`${process.env.NODE_ENV} listening on ${PORT}`.yellow.bold)
);
