import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import 'tailwindcss/tailwind.css';

function TaskItem({ task, onSave, onDelete }) {
    const { darkMode } = useContext(ThemeContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);
    const [errors, setErrors] = useState({});

    const handleSave = () => {
        let errorObj = {};
        if (!editedTask.task) errorObj.task = "Task is required!";
        if (!editedTask.description) errorObj.description = "Description is required!";
        
        if (Object.keys(errorObj).length) {
            setErrors(errorObj);
            return;
        }

        onSave(editedTask);
        setIsEditing(false);
    };

    const containerBgColor = darkMode ? 'bg-gray-400' : 'bg-white';
    const inputBgColor = darkMode ? 'bg-gray-400' : 'bg-white';

    return (
        <div className={`${containerBgColor} p-4 rounded shadow ${isEditing ? 'bg-expanded-bg p-expanded shadow-expanded' : ''}`}>
            {isEditing ? (
                <div className="flex flex-wrap space-x-2">
                    <div className="flex flex-col w-full md:w-1/3 mb-2 md:mb-0">
                        {errors.task && <p className="text-red-500 text-xs mb-1">{errors.task}</p>}
                        <input
                            type="text"
                            value={editedTask.task}
                            onChange={(e) => setEditedTask({ ...editedTask, task: e.target.value })}
                            placeholder="Task"
                            className={`px-3 py-2 border ${errors.task ? 'border-red-500' : 'border-gray-600'} ${inputBgColor} rounded-md w-full`}
                        />
                    </div>
                    
                    <div className="flex flex-col w-full md:w-1/3 mb-2 md:mb-0">
                        {errors.description && <p className="text-red-500 text-xs mb-1">{errors.description}</p>}
                        <input
                            type="text"
                            value={editedTask.description}
                            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                            placeholder="Description"
                            className={`px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-600'} ${inputBgColor} rounded-md w-full`}
                        />
                    </div>

                    <div className="flex flex-col w-full md:w-1/6 mb-2 md:mb-0">
                        <select
                            value={editedTask.priority}
                            onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
                            className={`px-3 py-2 border ${errors.priority ? 'border-red-500' : 'border-gray-600'} ${inputBgColor} rounded-md w-full`}
                            style={{ height: '42px' }}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    
                    <div className="flex flex-col w-full md:w-auto justify-center">
                        <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md w-full" style={{ height: '42px' }}>
                            Save
                        </button>
                    </div>
                </div>
           ) : (
            <div className="flex justify-between items-center">
                <div>
                    <strong>{task.task}</strong> - {task.description} - {task.priority}
                    {task.dueDate && <span> | Due: {new Date(task.dueDate).toLocaleDateString()}</span>}
                    {task.goalDate && <span> | Goal: {new Date(task.goalDate).toLocaleDateString()}</span>}
                </div>
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                    <button onClick={() => onDelete(task._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </div>
            </div>
        )}
    </div>
);
}

export default TaskItem;