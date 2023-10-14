import express from 'express';
import {
    getTasks,
    createTask,
    updateTask,
    deleteTask
} from '../controllers/taskController.mjs';

const router = express.Router();

router.get('/', getTasks);           // Retrieve all tasks
router.post('/', createTask);        // Create a new task
router.put('/:id', updateTask);      // Update a task by id
router.delete('/:id', deleteTask);   // Delete a task by id

export default router;
