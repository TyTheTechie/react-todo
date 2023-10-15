import React, { useState } from 'react';
import { Button, ListItem, TextField, Select, MenuItem } from '@mui/material';
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
                        {errors.task && <p className="text-red-500 text-xs">{errors.task}</p>}
                        <TextField
                            value={newTask.task}
                            onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
                            className={errors.task ? 'border-red-500' : ''}
                            fullWidth
                        />
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                        {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
                        <TextField
                            value={newTask.description}
                            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                            className={errors.description ? 'border-red-500' : ''}
                            fullWidth
                        />
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                        <Select
                            value={priorityValue}
                            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                            fullWidth
                        >
                            <MenuItem value="Low">Low</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="High">High</MenuItem>
                        </Select>
                    </div>
                    
                    <Button onClick={handleSave} style={{ minWidth: '80px' }}>Save</Button>
                </div>
            ) : (
                <div className="flex items-center justify-between">
                    <div>
                        <strong>{task.task}</strong> - {task.description} (Priority: {task.priority})
                    </div>
                    <div>
                        <Button onClick={() => setIsEditing(true)}>Edit</Button>
                        <Button onClick={() => onDelete(task._id)}>Delete</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TaskItem;
