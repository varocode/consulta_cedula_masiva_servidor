import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuarios';

const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api', usuarioRoutes);

export default app;
