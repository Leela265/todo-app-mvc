// app.js
import express from 'express';
import todoRoutes from './routes/todoRoutes.js';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mount routes
app.use('/api', todoRoutes);

// 404 Handler for unknown routes
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

export default app;
