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
    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateTodo = async (req, res) => {
    console.log("Updating Task with data:", req.body);  // Logging the incoming data
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        console.error("Error updating task:", error);  // Logging any errors
        res.status(400).json({ message: error.message });
    }
};


export const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
