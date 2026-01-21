// models/todoModel.js
let todos = []; // In-memory array to store todos
let idCounter = 1; // Simple id generator

export const getTodos = () => todos;

export const getTodoById = (id) => todos.find(todo => todo.id === id);

export const createTodo = (data) => {
    const newTodo = { id: idCounter++, ...data };
    todos.push(newTodo);
    return newTodo;
};

export const updateTodo = (id, data) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos[index] = { ...todos[index], ...data };
        return todos[index];
    }
    return null;
};

export const deleteTodo = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        const deleted = todos.splice(index, 1);
        return deleted[0];
    }
    return null;
};
