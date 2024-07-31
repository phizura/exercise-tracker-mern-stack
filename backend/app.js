import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import exercisesRouter from './routes/exercises.js'
import usersRouter from './routes/users.js'

dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

console.log('Starting application...');

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);

console.log('Application setup complete.');


connectDB();

export default app;