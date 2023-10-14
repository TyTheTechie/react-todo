import React, { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import { getTasks, createTask, updateTask, deleteTask } from '../services/apiService';
import 'tailwindcss/tailwind.css';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getTasks();
            setTasks(data);
        };
        fetchTasks();
    }, []);

    const handleSave = async (task) => {
        if (task._id) {
            const updatedTask = await updateTask(task._id, task);
            setTasks(tasks.map(t => (t._id === updatedTask._id ? updatedTask : t)));
        } else {
            const newTask = await createTask(task);
            setTasks([...tasks, newTask]);
        }
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter(t => t._id !== id));
    };

    return (
        <div>
            <TaskForm onSave={handleSave} />
            <ul className="list-none">
                {tasks.map(task => (
                    <li className="mb-4" key={task._id}>
                        <TaskItem task={task} onSave={handleSave} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
