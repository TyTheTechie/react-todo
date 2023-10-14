import axios from 'axios';

const API_URL = process.env.TODO_API_URL || 'http://localhost:5000/api/todos';

export const getTodos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
};

export const createTodo = async (todo) => {
    try {
        const response = await axios.post(API_URL, todo);
        return response.data;
    } catch (error) {
        console.error("Error creating task:", error);
        throw error;
    }
};

export const updateTodo = async (id, updatedTodo) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
        return response.data;
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
};

export const deleteTodo = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};
