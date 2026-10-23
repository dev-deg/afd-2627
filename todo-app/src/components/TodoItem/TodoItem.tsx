import React from 'react';
import type {TodoItemProps} from "../../types/todo"
import styles from './TodoItem.module.css'

const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle}) => {
    return (
        <div>
            <input
            type='checkbox'
            className={styles.checkbox}
            checked={todo.completed}
            onChange={() => onToggle(todo.id)
            }></input>
            <span className={`${styles.todoItem} ${todo.completed ? styles.completedText : ''}`}
            >{todo.text}</span>
            <button className={styles.deleteButton}onClick={()=> onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;