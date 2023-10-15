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
        setErrors({});  // Clearing the errors after successful submission
    };

    return (
        <div className="mb-4">
            <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2">
                <div className="flex flex-col w-full md:w-auto">
                    <div className="h-5">
                        {errors.task && <p className="text-red-500 text-xs">{errors.task}</p>}
                    </div>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Task"
                        className={`px-3 py-2 border ${errors.task ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
                    />
                </div>
                
                <div className="flex flex-col w-full md:w-auto">
                    <div className="h-5">
                        {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
                    </div>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        className={`px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
                    />
                </div>
                
                <div className="flex flex-col w-full md:w-auto">
                    <div className="h-5"></div>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className={`px-3 py-2 border ${errors.priority ? 'border-red-500' : 'border-gray-300'} rounded-md w-full h-10`} 
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                
                <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md w-full md:w-auto h-10">
                    Save
                </button>
            </div>
        </div>
    );
}

export default TaskForm;
