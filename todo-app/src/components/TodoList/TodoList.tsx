import React from 'react';
import type { TodoListProps } from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem';
import RenderBadge from '../RenderBadge/RenderBadge';
import useRenderCount from '../../hooks/useRenderCount';

const TodoList: React.FC<TodoListProps> = ({todos, onToggleTodo, onDeleteTodo, onEditTodo}) => {
    const renderCount = useRenderCount();
    return (
        <div>
            <div>
                <small>
                    <RenderBadge count={renderCount} />
                </small>
            </div>
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

export default React.memo(TodoList);