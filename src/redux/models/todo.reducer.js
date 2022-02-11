import {createSlice} from "@reduxjs/toolkit";
import {getTodoFromLocalStorage} from "../../utils";

const TodoReducer = createSlice({
    name: "todo",
    initialState: {
        todo: getTodoFromLocalStorage(),
        search: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todo.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter(item => item.id !== action.payload)
            state.search = state.search.filter(item => item.id !== action.payload)
            localStorage.setItem("todo", JSON.stringify(state.todo));
        },
        searchTodo: (state, action) => {
            state.search = state.todo.filter(item => {
                if (!action.payload) return state.todo
                return item.name.toLowerCase().includes((action.payload).toLowerCase())
            })
        }
    }
})



export const {
    addTodo,
    deleteTodo,
    searchTodo
} = TodoReducer.actions

export default TodoReducer.reducer
