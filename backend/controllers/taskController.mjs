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
    const { task, description, priority, dueDate, goalDate } = req.body;

    const newTask = new Task({
        task,
        description,
        priority,
        dueDate,
        goalDate
    });
    
    console.log("Attempting to create task", newTask);

    try {
        await newTask.save();
        console.log("Task successfully saved:", newTask);
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error encountered while saving task:", error);
        res.status(400).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    const { task, description, priority, completed, dueDate, goalDate } = req.body;

    const updatedTaskData = {
        task,
        description,
        priority,
        completed,
        dueDate,
        goalDate
    };

    console.log("Updating Task", updatedTaskData);

    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, updatedTaskData, { new: true });
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
