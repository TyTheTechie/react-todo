import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import { getTasks, createTask, updateTask, deleteTask } from '../services/apiService';
import 'tailwindcss/tailwind.css';

const useFetchTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getTasks();
                setTasks(data);
                setIsLoading(false);
            } catch (err) {
                setError('Failed to fetch tasks. Please try again.');
                setIsLoading(false);
            }
        };
        fetchTasks();
    }, []);

    return { tasks, isLoading, error, setTasks, setError };
};

function TaskList() {
    const { tasks, isLoading, error, setTasks, setError } = useFetchTasks();

    const handleTaskSave = async (task) => {
        try {
            if (task._id) {
                const updatedTask = await updateTask(task._id, task);
                setTasks(prevTasks => prevTasks.map(t => (t._id === updatedTask._id ? updatedTask : t)));
            } else {
                const newTask = await createTask(task);
                setTasks(prevTasks => [...prevTasks, newTask]);
            }
        } catch (err) {
            setError('Failed to save task. Please try again.');
        }
    };

    const handleTaskDelete = async (id) => {
        try {
            await deleteTask(id);
            setTasks(prevTasks => prevTasks.filter(t => t._id !== id));
        } catch (err) {
            setError('Failed to delete task. Please try again.');
        }
    };

    return (
        <div>
            {error && <p className="text-red-500">{error}</p>}
            {isLoading ? (
                <p>Loading tasks...</p>
            ) : (
                <>
                    <TaskForm onSave={handleTaskSave} />
                    <ul className="list-none">
                        {tasks.map(task => (
                            <li className="mb-4" key={task._id}>
                                <TaskItem task={task} onSave={handleTaskSave} onDelete={handleTaskDelete} />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default TaskList;
