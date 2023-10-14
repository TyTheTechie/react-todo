import React, { useState } from 'react';
import { Button, ListItem, TextField, Select, MenuItem } from '@mui/material';
import 'tailwindcss/tailwind.css';

function TodoItem({ todo, onSave, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTodo, setNewTodo] = useState(todo);

    const handleSave = () => {
        onSave(newTodo);
        setIsEditing(false);
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            {isEditing ? (
                <>
                    <TextField
                        value={newTodo.task}
                        onChange={(e) => setNewTodo({ ...newTodo, task: e.target.value })}
                    />
                    <TextField
                        value={newTodo.description}
                        onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                    />
                    <Select
                        value={newTodo.priority}
                        onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
                    >
                        <MenuItem>Low</MenuItem>
                        <MenuItem>Medium</MenuItem>
                        <MenuItem>High</MenuItem>
                    </Select>
                    <Button onClick={handleSave}>Save</Button>
                </>
            ) : (
                <>
                    <div>
                        <strong>{todo.task}</strong> - {todo.description} (Priority: {todo.priority})
                    </div>
                    <Button onClick={() => setIsEditing(true)}>Edit</Button>
                    <Button onClick={() => onDelete(todo._id)}>Delete</Button>
                </>
            )}
        </div>
    );
}

export default TodoItem;