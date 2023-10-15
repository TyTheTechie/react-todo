import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function TaskItem({ task, onSave, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task);
    const [errors, setErrors] = useState({});

    const handleSave = () => {
        console.log("Attempting to update task", newTask);
        
        let errorObj = {};
        if (!newTask.task) errorObj.task = "Task is required!";
        if (!newTask.description) errorObj.description = "Description is required!";
        
        if (Object.keys(errorObj).length) {
            setErrors(errorObj);
            return;
        }

        onSave(newTask);
        setIsEditing(false);
    };

    const priorityValue = ["Low", "Medium", "High"].includes(newTask.priority) ? newTask.priority : "Low";

    return (
        <div className="bg-white p-4 rounded shadow">
            {isEditing ? (
                <div className="flex space-x-2">
                    <div className="flex flex-col flex-grow">
                        {errors.task && <p className="text-red-500 text-xs mb-1">{errors.task}</p>}
                        <input
                            type="text"
                            value={newTask.task}
                            onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
                            placeholder="Task"
                            className={`px-3 py-2 border ${errors.task ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
                        />
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                        {errors.description && <p className="text-red-500 text-xs mb-1">{errors.description}</p>}
                        <input
                            type="text"
                            value={newTask.description}
                            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                            placeholder="Description"
                            className={`px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <select
                            value={priorityValue}
                            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                            className={`px-3 py-2 border ${errors.priority ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                        <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-between">
                    <div>
                        <strong>{task.task}</strong> - {task.description} (Priority: {task.priority})
                    </div>
                    <div>
                        <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">
                            Edit
                        </button>
                        <button onClick={() => onDelete(task._id)} className="px-4 py-2 bg-red-500 text-white rounded-md">
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TaskItem;
