import express, { Express, Request, Response } from "express";
import authRoutes from './routes/authRoutes'
import messageRoutes from './routes/messageRoutes'

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});