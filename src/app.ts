import express from 'express';
import dotenv from 'dotenv';
import { Request, Response, Errback, NextFunction } from 'express';
import authRoutes from './routes/authRoutes';
import todoRouter from './routes/todoRoutes';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todo', todoRouter);

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  console.log("Error");
  res.status(500).json({
    message: "Something Broke"
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
