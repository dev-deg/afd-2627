export type FilterType = 'all' | 'active' | 'completed';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoItemProps{
    todo: Todo;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
}

export interface TodoListProps {
    todos: Todo[];
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
    onEditTodo: (id: number, newText: string) => void;
}

export interface AddTodoFormProps {
    onAddTodo: (text: string) => void;
}

export interface FilterButtonsProps {
    activeFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
};

export interface TodoFooterProps {
    todos: Todo[];
    onClearCompleted: () => void;
}

export interface RenderBadgeProps {
  count: number;
  noisyAfter?: number;
}

export interface DevBarProps {
    onSeed: (count: number) => void;
    onReset: () => void;
}