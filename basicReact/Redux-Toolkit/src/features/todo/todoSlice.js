import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "", completed: false }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoUpdate = state.todos.find((todo) => todo.id === id);
            if (todoUpdate) {
                todoUpdate.text = text;
            } else {
                console.warn(`Todo with id ${id} not found. Nothing is updated`);
            }
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const todoToggle = state.todos.find((todo) => todo.id === id);
            if (todoToggle) {
                todoToggle.completed = !todoToggle.completed;
            } else {
                console.warn(`Todo with id ${id} not found. Nothing is toggled`);
            }
        },
    },
});

export const { addTodo, updateTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
