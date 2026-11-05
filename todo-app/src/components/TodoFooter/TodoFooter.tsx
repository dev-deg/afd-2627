import React from 'react';
import styles from './TodoFooter.module.css'
import type { TodoFooterProps} from '../../types/todo';

const TodoFooter: React.FC<TodoFooterProps> = ({ todos, onClearCompleted }) => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.counters}>
                    <div className={styles.counter}>
                        Total: {todos.length}
                    </div>
                    <div className={styles.counter}>
                        Active: {todos.filter(t => !t.completed).length}
                    </div>
                    <div className={styles.counter}>
                        Completed: {todos.filter(t => t.completed).length}
                    </div>
                    {
                        todos.some(t => t.completed) ?                     
                        <button className={styles.clearButton} onClick={onClearCompleted}>
                            Clear Completed
                        </button> : null
                    }

                </div>
            </div>
        </footer>
    )
    };


export default TodoFooter;