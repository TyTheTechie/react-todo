import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTasks = () => {
    return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const value = {
        tasks,
        setTasks
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
