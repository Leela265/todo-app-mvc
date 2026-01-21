// controllers/todoController.js
import * as TodoModel from '../models/todoModel.js';

// Get all todos
export const getTodos = (req, res) => {
    try {
        const todos = TodoModel.getTodos();
        res.status(200).json({ success: true, data: todos });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch todos', error: error.message });
    }
};

// Get a single todo by id
export const getTodo = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const todo = TodoModel.getTodoById(id);
        if (!todo) return res.status(404).json({ success: false, message: 'Todo not found' });

        res.status(200).json({ success: true, data: todo });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch todo', error: error.message });
    }
};

// Create a new todo
export const createTodo = (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ success: false, message: 'Title and description are required' });
        }

        const newTodo = TodoModel.createTodo({ title, description });
        res.status(201).json({ success: true, data: newTodo });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create todo', error: error.message });
    }
};

// Update an existing todo
export const updateTodo = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedTodo = TodoModel.updateTodo(id, req.body);
        if (!updatedTodo) return res.status(404).json({ success: false, message: 'Todo not found' });

        res.status(200).json({ success: true, data: updatedTodo });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update todo', error: error.message });
    }
};

// Delete a todo
export const deleteTodo = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const deletedTodo = TodoModel.deleteTodo(id);
        if (!deletedTodo) return res.status(404).json({ success: false, message: 'Todo not found' });

        res.status(200).json({ success: true, data: deletedTodo });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete todo', error: error.message });
    }
};
