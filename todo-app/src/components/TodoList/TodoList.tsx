import React from 'react';
import type { TodoListProps } from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC<TodoListProps> = ({todos, onToggleTodo, onDeleteTodo, onEditTodo}) => {
    return (
        <div>
            {
                todos.length == 0 ?
                (<p>No Todos yet!</p>) :
                (
                    todos.map(
                        todo => (
                            <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onToggle={onToggleTodo}
                            onDelete={onDeleteTodo}
                            onEdit={onEditTodo}/>
                        )
                    )
                )
            }
        </div>
    )
}

export default TodoList;