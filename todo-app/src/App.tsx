import React, {useState} from 'react';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import type { Todo, FilterType } from './types/todo';
import TodoList from './components/TodoList/TodoList';
import FilterButtons from './components/FilterButtons/FilterButtons';
import styles from './App.module.css'
import TodoFooter from './components/TodoFooter/TodoFooter';
import RenderBadge from './components/RenderBadge/RenderBadge';
import useRenderCount from './hooks/useRenderCount';
import DevBar from './components/DevBar/DevBar';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<FilterType>('all');

    const addTodo = (text: string)=>{
        const newTodo: Todo = {
            id: Date.now(),
            text: text,
            completed: false
        }
        //Instantiating a new arrow (with spread op)#
        //So react will detect changes and re-render
        setTodos([...todos,newTodo]); 
    }
    //similar to the spread op, filter creates a new array
    //So react will detect changes and re-render
    const deleteTodo = (id: number) => setTodos(todos.filter(todo => todo.id !== id));

    const toggleTodo = (id: number) => setTodos(todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));

    const editTodo = (id: number, newText: string) => setTodos(todos.map(todo => 
        todo.id === id ? {...todo, text: newText} : todo
    ));

    const clearCompleted = () => setTodos(todos.filter(todo => !todo.completed));

    const filteredTodos: Todo[] = todos.filter(todo => {
        if(filter === 'active') return !todo.completed;
        if(filter === 'completed') return todo.completed;
        return true; //return all the todos if filter is 'all'
    });

    const renderCount = useRenderCount();

    const resetTodos = () => setTodos([]);

    const seedTodos = (count: number) => setTodos([
        ...todos,
        ...Array.from({length: count}, (_, i) => ({
            id: Date.now() + i,
            text: `Seeded Todo ${i + 1}`,
            completed: false
        }))
    ]);

    return (
        <div className={styles.app}>
            <h1 className={styles.title}>
                My Awesome Todo App
                <small>
                    <RenderBadge count={renderCount} />
                </small>
            </h1>
            <DevBar onSeed={seedTodos} onReset={resetTodos} />
            <AddTodoForm onAddTodo={addTodo}/>
            <FilterButtons activeFilter={filter} onFilterChange={setFilter} />
            <TodoList todos={filteredTodos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} onEditTodo={editTodo} />
            <TodoFooter todos={todos} onClearCompleted={clearCompleted} />
        </div>
    )
}

export default TodoApp;