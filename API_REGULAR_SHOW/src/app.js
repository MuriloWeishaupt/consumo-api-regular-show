import express from 'express';
import cors from 'cors';
import characterRoutes from './routes/CharactersRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", characterRoutes);

export default app;