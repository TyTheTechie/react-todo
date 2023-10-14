import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../services/apiService';
import 'tailwindcss/tailwind.css';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const data = await getTodos();
            setTodos(data);
        };
        fetchTodos();
    }, []);

    const handleSave = async (todo) => {
        if (todo._id) {
            const updatedTodo = await updateTodo(todo._id, todo);
            setTodos(todos.map(t => (t._id === updatedTodo._id ? updatedTodo : t)));
        } else {
            const newTodo = await createTodo(todo);
            setTodos([...todos, newTodo]);
        }
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter(t => t._id !== id));
    };

    return (
        <div>
            <TodoForm onSave={handleSave} />
            <ul className="list-none">
                {todos.map(todo => (
                    <li className="mb-4" key={todo._id}>
                        <TodoItem todo={todo} onSave={handleSave} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;