import express from 'express';
import connectDB from './configs/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('✅ Backend is running successfully on Vercel!');
});

// API Routes
app.use('/api/users', userRoutes);

export default app;
