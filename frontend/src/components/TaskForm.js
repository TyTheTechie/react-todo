import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function TaskForm({ onSave }) {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');

    const handleSave = () => {
        console.log("Attempting to save task", { task, description, priority });
        if (!task) {
            console.warn("Task field is empty. Aborting save operation.");
            alert("Task field is required!");
            return;
        }
        onSave({ task, description, priority });
        setTask('');
        setDescription('');
        setPriority('Low');
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Task"
                className="px-3 py-2 border rounded-md mr-2"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="px-3 py-2 border rounded-md mr-2"
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="px-3 py-2 border rounded-md mr-2"
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Save
            </button>
        </div>
    );
}

export default TaskForm;
