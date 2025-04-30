import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import sectionRoutes from './routes/sectionRoutes';
import { errorHandler } from './middlewares/errorHandler';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(cors({credentials: true, origin: process.env.FRONTEND_URL}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/sections', sectionRoutes);
// Routes
app.use('/api/admin', authRoutes);

// Error Handler
app.use(errorHandler);

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 