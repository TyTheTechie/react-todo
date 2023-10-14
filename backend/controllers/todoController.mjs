import Todo from '../models/Todo.mjs';

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createTodo = async (req, res) => {
    const todo = new Todo(req.body);
    console.log("Attempting to create task", req.body);
    try {
        await todo.save();
        console.log("Task successfully saved:", todo);
        res.status(201).json(todo);
    } catch (error) {
        console.error("Error encountered while saving task:", error);
        res.status(400).json({ message: error.message });
    }
};

export const updateTodo = async (req, res) => {
    console.log("Updating Task", req.body);
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        console.error("Error updating task", error);  
        res.status(400).json({ message: error.message });
    }
};

export const deleteTodo = async (req, res) => {
    console.log("Deleting Task", req.body);
    try {
        const deleteTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(deleteTodo);
    } catch (error) {
        console.error("Error deleting task", error);  
        res.status(400).json({ message: error.message });
    }
};