import type { Todo } from "../types/todo";
/* This is a pretend backend so useOptimistic has something to be optimistic about. 

Real servers are slow and sometimes fail. Both of these facts are important to consider when 
designing a UI, and the useOptimistic hook is designed to help you do that
*/


export const LATENCY_MS = 1200;
export const FAILURE_RATE = 0.3;

export class SaveFailedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'SaveFailedError';
    }
}

export const saveTodoServer = (todo: Todo): Promise<Todo> => new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < FAILURE_RATE) {
            reject(new SaveFailedError('Failed to save todo'));
            return;
        }
        resolve(todo);
    }, LATENCY_MS);
});