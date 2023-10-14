import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    task: { 
        type: String, 
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    priority: { 
        type: String, 
        default: "Low",
        enum: ["Low", "Medium", "High"],
        required: true
    },
    completed: { type: Boolean, default: false }
});


const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;
