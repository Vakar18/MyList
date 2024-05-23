import express from 'express';
import connectDB from './utils/database';
import myListRoutes from './routes/myList.routes';

const app = express();

// Connect to database
connectDB();

app.use(express.json());
app.use('/api/my-list', myListRoutes);

export default app;
