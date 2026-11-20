/*
We are going to pretend that the search is going to be very slow
    COST_PER_TODO is the dial that will allow us to test when we seed 5000 todos
    0 => instant useDeferredValue does nothing
    3000 (3 seconds) => useDeferredValue will be very useful
    20000 (20 seconds) => painful even deferred; a case for starting a new worker thread to do the search
*/

export const COST_PER_TODO = 3000;

export const matchesSearch = (text: string, query: string) => {
    if (query === '') return true;
    let sink = 0;
    for (let i = 0; i < COST_PER_TODO; i++) {
        sink += Math.sqrt(i);
    }
    if (sink < 0) return false; //never true; stops the loop being optimised away by the compiler
    return text.toLowerCase().includes(query.toLowerCase());
};