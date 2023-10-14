import express from 'express';
import {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} from '../controllers/todoController.mjs';

const router = express.Router();

router.get('/', getTodos);           // Retrieve all todos
router.post('/', createTodo);        // Create a new todo
router.put('/:id', updateTodo);      // Update a todo by id
router.delete('/:id', deleteTodo);   // Delete a todo by id

export default router;
