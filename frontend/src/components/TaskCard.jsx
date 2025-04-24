// src/components/TaskCard.jsx
import React from 'react';
import './TaskCard.css'; // Import the corresponding CSS
import axios from 'axios';

const TaskCard = ({ task }) => {
    const { title, dueDate, priority, status } = task;

    return (
        <div className="task-card">
            <h3>{title}</h3>
            <p><strong>Due:</strong> {new Date(dueDate).toLocaleDateString()}</p>
            <p><strong>Priority:</strong> {priority}</p>
            <p><strong>Status:</strong> {status}</p>
            <form action="">
                <label typeof='String'>Title:</label>
                <label typeof='Number'>Due:</label>
                <label typeof='String'>Priority:</label>
                <label typeof='String'>Status:</label>
            </form>
            try {
                axios.post('http://localhost:3000/task-form')
                .then((data) => {
                    console.log(data);
                })
                .catch((err) =>{
                    console.log(err);
                })
            } catch (error) {
                console.log("error",error)
            }
        </div>
    );
};

export default TaskCard;
