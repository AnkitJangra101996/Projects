/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import todoRouter from './routes/todo.route.js';
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import authRouter from './routes/auth.route.js';
const app = express();

configDotenv();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'))

// Auth Routes
app.use('/api/auth', authRouter);

// Todo Routes
app.use('/api/todo', todoRouter);

mongoose.connect(process.env.DBURL).then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log('Connection Establish With DB ');
        console.log('Server started http://localhost:3000');
    });
}).catch((err) => console.log(err));
