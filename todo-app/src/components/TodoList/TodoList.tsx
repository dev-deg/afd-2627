import React from 'react';
import type { TodoListProps } from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: React.FC<TodoListProps> = ({todos, onDeleteTodo}) => {
    return (
        <div>
            {
                todos.length == 0 ?
                (<p>No Todos yet!</p>) :
                (
                    todos.map(
                        todo => (
                            <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo}/>
                        )
                    )
                )
            }
        </div>
    )
}

export default TodoList;