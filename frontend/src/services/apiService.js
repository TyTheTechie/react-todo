import axios from 'axios';

const API_URL = process.env.TASK_API_URL || 'http://localhost:5000/api/tasks';

export const getTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
};

export const createTask = async (task) => {
    try {
        const response = await axios.post(API_URL, task);
        return response.data;
    } catch (error) {
        console.error("Error creating task:", error);
        throw error;
    }
};

export const updateTask = async (id, updatedTask) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedTask);
        return response.data;
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};
