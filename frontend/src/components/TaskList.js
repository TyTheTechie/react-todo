import React, { useEffect, useContext } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import { getTasks, createTask, updateTask, deleteTask } from '../services/apiService';
import { TaskContext } from '../context/TaskContext';
import 'tailwindcss/tailwind.css';

const useFetchTasks = () => {
    const { state, dispatch } = useContext(TaskContext);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getTasks();
                dispatch({ type: 'SET_TASKS', payload: data });
            } catch (err) {
                dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch tasks. Please try again.' });
            }
        };
        fetchTasks();
    }, [dispatch]);

    return { tasks: state.tasks, error: state.error, dispatch };
};

function TaskList() {
    const { tasks, error, dispatch } = useFetchTasks();

    const handleTaskSave = async (task) => {
        try {
            if (task._id) {
                const updatedTask = await updateTask(task._id, task);
                dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
            } else {
                const newTask = await createTask(task);
                dispatch({ type: 'ADD_TASK', payload: newTask });
            }
            dispatch({ type: 'SET_ERROR', payload: null });  // Clear any previous errors
        } catch (err) {
            dispatch({ type: 'SET_ERROR', payload: 'Failed to save task. Please try again.' });
        }
    };

    const handleTaskDelete = async (id) => {
        try {
            await deleteTask(id);
            dispatch({ type: 'DELETE_TASK', payload: id });
            dispatch({ type: 'SET_ERROR', payload: null });  // Clear any previous errors
        } catch (err) {
            dispatch({ type: 'SET_ERROR', payload: 'Failed to delete task. Please try again.' });
        }
    };

    return (
        <div>
            {error && <p className="text-red-500">{error}</p>}
            {!tasks.length ? (
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
