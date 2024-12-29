import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api/user/', userRouter);
app.use('/api/auth/', authRouter);

// Start Server
app.listen(3000, () => {
  console.log('Server is running on Port 3000');
});
