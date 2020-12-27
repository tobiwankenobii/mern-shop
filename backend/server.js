import express from 'express';
import products from './data/products.js';
import { config } from 'dotenv';
import connectDB from './config/db.js';

config();

connectDB();

const app = express();

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((product) => product._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`${process.env.NODE_ENV} listening on ${PORT}`.yellow.bold)
);
