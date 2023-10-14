import React, { useState } from 'react';
import { Button, ListItem, TextField, Select, MenuItem } from '@mui/material';
import 'tailwindcss/tailwind.css';

function TaskItem({ task, onSave, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task);

    const handleSave = () => {
        console.log("Attempting to update task", newTask);
        onSave(newTask);
        setIsEditing(false);
    };

    const priorityValue = ["Low", "Medium", "High"].includes(newTask.priority) ? newTask.priority : "Low";

    return (
        <div className="bg-white p-4 rounded shadow">
            {isEditing ? (
                <>
                    <TextField
                        value={newTask.task}
                        onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
                    />
                    <TextField
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    />
                    <Select
                        value={priorityValue}
                        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    >
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                    </Select>
                    <Button onClick={handleSave}>Save</Button>
                </>
            ) : (
                <>
                    <div>
                        <strong>{task.task}</strong> - {task.description} (Priority: {task.priority})
                    </div>
                    <Button onClick={() => setIsEditing(true)}>Edit</Button>
                    <Button onClick={() => onDelete(task._id)}>Delete</Button>
                </>
            )}
        </div>
    );
}

export default TaskItem;
