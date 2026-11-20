import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type {Todo} from '../types/todo';

export interface TodosState {
    todos: Todo[];
};

//what the Redux store holds before anything is dispatched
//same as the old 'useState<Todo[]>([])' but for redux
const initialState: TodosState = {
    todos: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //Terms and conditions:
        // Reducers must be pure functions, 
        // same input => same output, no side effects
        // Date.now() is not allowed in reducers, use a middleware instead
        // ACTION CREATORS
        todoAdded: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.todos.push(action.payload);
            },
            //prepare runs when the ACTION is create, before it reaches the reducer
            //it is the place for impure work like ids and timestamps
            prepare: (text: string) => {
                return {
                    payload: {
                        id: Date.now(),
                        text,
                        completed: false,
                    },
                };
            },
        },
    }
});

// ACTION CREATORS
// The action creators are generated for each case reducer function in the slice object.
//todoAdded("buy milk") => {type: "todos/todoAdded", payload: {id: 123, text: "buy milk", completed: false}}
export const { todoAdded } = todosSlice.actions;

//THE REDUCER -- one function combining all the caes above
export default todosSlice.reducer;