import Task from '../models/Task.mjs';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createTask = async (req, res) => {
    const task = new Task(req.body);
    console.log("Attempting to create task", req.body);
    try {
        await task.save();
        console.log("Task successfully saved:", task);
        res.status(201).json(task);
    } catch (error) {
        console.error("Error encountered while saving task:", error);
        res.status(400).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    console.log("Updating Task", req.body);
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (error) {
        console.error("Error updating task", error);  
        res.status(400).json({ message: error.message });
    }
};

export const deleteTask = async (req, res) => {
    console.log("Deleting Task", req.body);
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id);
        res.json(deleteTask);
    } catch (error) {
        console.error("Error deleting task", error);  
        res.status(400).json({ message: error.message });
    }
};
