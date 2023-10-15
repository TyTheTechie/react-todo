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
            <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2 items-end">
                <div className="flex flex-col w-full md:w-auto">
                    {errors.task && <p className="text-red-500 text-xs">{errors.task}</p>}
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Task"
                        className={`px-3 py-2 border ${errors.task ? 'border-red-500' : 'border-gray-600'} bg-gray-400 text-black placeholder-black rounded-md w-full`}
                    />
                </div>
                
                <div className="flex flex-col w-full md:w-auto">
                    {errors.description && <p className="text-red-500 text-xs mb-1">{errors.description}</p>}
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        className={`px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-600'} bg-gray-400 text-black placeholder-black rounded-md w-full`}
                    />
                </div> {/* This is the missing closing tag */}

                <div className="flex flex-col w-full md:w-auto">
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className={`px-3 py-2 border ${errors.priority ? 'border-red-500' : 'border-gray-600'} bg-gray-400 text-black rounded-md w-full`}
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
        </div>
    );
}

export default TaskForm;
