import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    dueDate: {
        type: Date,
        required: false,
    },
    goalDate: {
        type: Date,
        required: true,
    },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
