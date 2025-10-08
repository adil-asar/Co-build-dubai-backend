import express from 'express';
import connectDB from './configs/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 5000; 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('✅ Backend is running successfully!');
});

// API Routes
app.use('/api/users', userRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
