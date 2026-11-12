import React, {useCallback, useMemo, useState} from 'react';
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

    const addTodo = useCallback((text: string)=>{
        const newTodo: Todo = {
            id: Date.now(),
            text: text,
            completed: false
        }
        //Instantiating a new arrow (with spread op)#
        //So react will detect changes and re-render
        setTodos(prev => [...prev, newTodo]); 
    }, [todos]);

    //similar to the spread op, filter creates a new array
    //So react will detect changes and re-render
    const deleteTodo = useCallback((id: number) => setTodos(prev => prev.filter(todo => todo.id !== id)), [todos]);

    const toggleTodo = useCallback((id: number) => setTodos(prev => prev.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    )), []);

    const editTodo = useCallback((id: number, newText: string) => setTodos(prev => prev.map(todo => 
        todo.id === id ? {...todo, text: newText} : todo
    )), []);

    const clearCompleted = useCallback(() => setTodos(prev => prev.filter(todo => !todo.completed)), []);

    // This is not worth memoising for a small amount of memos - this is quite a cheap operation, 
    // and the memoisation itself has a cost. If we had a large number of todos, then it would be worth memoising.
    const filteredTodos: Todo[] = useMemo(() => todos.filter(todo => {
        if(filter === 'active') return !todo.completed;
        if(filter === 'completed') return todo.completed;
        return true; //return all the todos if filter is 'all'
    }), [todos, filter]);

    const renderCount = useRenderCount();

    const resetTodos = useCallback(() => setTodos([]), []);

    const seedTodos = useCallback((count: number) => setTodos(prev =>[
        ...prev,
        ...Array.from({length: count}, (_, i) => ({
            id: Date.now() + i,
            text: `Seeded Todo ${i + 1}`,
            completed: false
        }))
    ]), []);

    const addTwoAtOnce = useCallback(() => {
        addTodo('First Todo');
        addTodo('Second Todo');
    }, [addTodo]);

    return (
        <div className={styles.app}>
            <h1 className={styles.title}>
                My Awesome Todo App
                <small>
                    <RenderBadge count={renderCount} />
                </small>
            </h1>
            <DevBar onSeed={seedTodos} onReset={resetTodos} onAddTwo={addTwoAtOnce} />
            <AddTodoForm onAddTodo={addTodo}/>
            <FilterButtons activeFilter={filter} onFilterChange={setFilter} />
            <TodoList todos={filteredTodos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} onEditTodo={editTodo} />
            <TodoFooter todos={todos} onClearCompleted={clearCompleted} />
        </div>
    )
}

export default TodoApp;
