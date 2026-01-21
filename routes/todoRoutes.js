// routes/todoRoutes.js
import express from 'express';
import {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
} from '../controllers/todoController.js';

const router = express.Router();

// CRUD Routes
router.get('/todos', getTodos);           // Get all todos
router.get('/todos/:id', getTodo);        // Get todo by ID
router.post('/todos', createTodo);        // Create a new todo
router.put('/todos/:id', updateTodo);     // Update a todo
router.delete('/todos/:id', deleteTodo);  // Delete a todo

export default router;
