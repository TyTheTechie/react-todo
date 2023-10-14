import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function TaskForm({ onSave }) {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');
    const [errors, setErrors] = useState({});

    const handleSave = () => {
        console.log("Attempting to save task", { task, description, priority });
        
        let errorObj = {};
        if (!task) errorObj.task = "Task is required!";
        if (!description) errorObj.description = "Description is required!";
        
        if (Object.keys(errorObj).length) {
            setErrors(errorObj);
            return;
        }

        onSave({ task, description, priority });
        setTask('');
        setDescription('');
        setPriority('Low');
    };

    return (
        <div className="mb-4">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <div className="flex flex-col">
                    {errors.task && <p className="text-red-500 text-xs">{errors.task}</p>}
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Task"
                        className={`px-3 py-2 border ${errors.task ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                </div>
                
                <div className="flex flex-col">
                    {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        className={`px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                </div>
                
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="px-3 py-2 border rounded-md"
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                
                <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Save
                </button>
            </div>
        </div>
    );
}

export default TaskForm;
