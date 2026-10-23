import React, {useState} from 'react';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import type { Todo } from './types/todo';
import TodoList from './components/TodoList/TodoList';
import styles from './App.module.css'

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string)=>{
        const newTodo: Todo = {
            id: Date.now(),
            text: text
        }
        //Instantiating a new arrow (with spread op)#
        //So react will detect changes and re-render
        setTodos([...todos,newTodo]); 
    }
    //similar to the spread op, filter creates a new array
    //So react will detect changes and re-render
    const deleteTodo = (id: number) => setTodos(todos.filter(todo => todo.id !== id));

    return (
        <div className={styles.app}>
            <h1 className={styles.title}>My Awesome Todo App</h1>
            <AddTodoForm onAddTodo={addTodo}/>
            <TodoList todos={todos} onDeleteTodo={deleteTodo}/>
            <div className={styles.footer}>
                Total todos: {todos.length}
            </div>
        </div>
    )
}

export default TodoApp;