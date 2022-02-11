import {createSlice} from "@reduxjs/toolkit";
import {getTodoFromLocalStorage} from "../../utils";

const TodoReducer = createSlice({
    name: "todo",
    initialState: {
        todo: getTodoFromLocalStorage()
    },
    reducers: {
        addTodo: (state, action) => {
            state.todo.push(action.payload)
        },
        deleteTodo: (state, action) => {
           state.todo = state.todo.filter(item => item.id !== action.payload)
        }
    }
})


export const {
    addTodo,
    deleteTodo,
} = TodoReducer.actions

export default TodoReducer.reducer
