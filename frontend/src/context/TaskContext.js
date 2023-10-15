import React, { createContext, useContext, useReducer } from 'react';

export const TaskContext = createContext();

const initialState = {
    tasks: [],
    error: null
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASKS':
            return { ...state, tasks: action.payload };
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => task._id === action.payload._id ? action.payload : task)
            };
        case 'DELETE_TASK':
            return { ...state, tasks: state.tasks.filter(task => task._id !== action.payload) };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export const useTasks = () => {
    return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
};
