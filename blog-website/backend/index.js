// Imports
import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './helpers/db.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';

// Middlewares
const app = express();
dotenv.config();
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Welcome To Blog Website API'));
app.use('/api/auth', authRouter)

// Server Start
connectDb().then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Server Started At Port - http://localhost:${process.env.PORT || 8080}`)
    });
}).catch((error) => console.log(`Server Failed To Start`, error))