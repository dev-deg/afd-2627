import React from 'react';
import type {TodoItemProps} from "../../types/todo"

const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete}) => {
    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={()=> onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;