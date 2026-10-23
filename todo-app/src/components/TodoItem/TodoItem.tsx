import React from 'react';
import type {TodoItemProps} from "../../types/todo"
import styles from './TodoItem.module.css'

const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete}) => {
    return (
        <div>
            <span className={styles.todoItem}>{todo.text}</span>
            <button className={styles.deleteButton}onClick={()=> onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;