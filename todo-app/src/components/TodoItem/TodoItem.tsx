import React, { useEffect } from 'react';
import type {TodoItemProps} from "../../types/todo"
import styles from './TodoItem.module.css'

const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle, onEdit}) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editedText, setEditedText] = React.useState(todo.text);
    const inputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);

    const handleDoubleClick = () => {
        setIsEditing(true);
        setEditedText(todo.text);
    }

    const handleCancel = () => {
        setIsEditing(false);
        setEditedText(todo.text);
    }

    const handleSave = () => {
        setIsEditing(false);
        if (editedText.trim() !== '') {
            onEdit(todo.id, editedText);
        }
    };

    return (
        <div>
            <input
            type='checkbox'
            className={styles.checkbox}
            checked={todo.completed}
            onChange={() => onToggle(todo.id)
            }></input>
            {isEditing ? (
                <input
                    ref={inputRef}
                    type='text'
                    className={styles.editInput}
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onBlur={() => setIsEditing(false)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSave();
                            return;
                        }
                        if (e.key === 'Escape') {
                            handleCancel();
                        }
                    }}
                />
            ) : (
                <span className={`${styles.todoItem} ${todo.completed ? styles.completedText : ''}`}
                onDoubleClick={handleDoubleClick}>
                    {todo.text}
                </span>
            )}
            <button className={styles.deleteButton}onClick={()=> onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;