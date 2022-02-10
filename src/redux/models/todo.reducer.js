import { createSlice } from "@reduxjs/toolkit";

const TodoReducer = createSlice({
    name: "todo",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todo.push(action.payload)
        }
    }
})


export const {
    addTodo,
} = TodoReducer.actions

export default TodoReducer.reducer