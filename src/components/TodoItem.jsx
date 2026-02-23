import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-item-content" onClick={() => onToggle(todo.id)}>
                <div className="checkbox">
                    {todo.completed && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    )}
                </div>
                <span className="todo-text">{todo.text}</span>
            </div>
            <button className="delete-btn" onClick={() => onDelete(todo.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
        </li>
    );
};

export default TodoItem;
