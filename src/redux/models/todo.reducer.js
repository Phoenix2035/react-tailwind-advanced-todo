import {createSlice} from "@reduxjs/toolkit"
import {getTodoFromLocalStorage} from "../../utils"

const TodoReducer = createSlice({
    name: "todo",
    initialState: {
        todo: getTodoFromLocalStorage(),
        search: [],
    },
    reducers: {
        addTodo: (state, {payload}) => {
            state.todo = state.todo.map(item => item.id === payload.id ? payload : item)
            state.search = [...state.todo];
        },
        deleteTodo: (state, action) => {
            state.todo = state.todo.filter(item => item.id !== action.payload)
            state.search = state.search.filter(item => item.id !== action.payload)
            localStorage.setItem("todo", JSON.stringify(state.todo));
        },
        searchTodo: (state, action) => {
            const filterSearch = (term) => [term.name, term.priority, term.status].join('').toLowerCase().includes(action.payload.toLowerCase())
            state.search = state.todo.filter(item => {
                if (!action.payload) return state.todo
                return filterSearch(item)
            })
        },
        filterPriorityAction: (state, action) => {
            state.search = state.todo.filter(item => {
                if (action.payload === "All") return state.todo
                return item.priority.toLowerCase().includes(action.payload.toLowerCase())
            })
        },
        filterStatusAction: (state, action) => {
            state.search = state.todo.filter(item => {
                if (action.payload === "All") return state.todo
                return item.status.toLowerCase().includes(action.payload.toLowerCase())
            })
        },
        // filterDateAction: (state, action) => {
        //     const today = moment().format("X")
        //     state.search = state.todo.filter(item => {
        //         if (action.payload === "All") return state.todo
        //
        //         if (action.payload === today) {
        //             return item.date.includes(action.payload)
        //         } else if (action.payload < today) {
        //             return item.date.includes(action.payload)
        //         } else {
        //             return item.date.includes(action.payload)
        //         }
        //     })
        // },
    }
})


export const {
    addTodo,
    deleteTodo,
    searchTodo,
    filterPriorityAction,
    filterStatusAction
} = TodoReducer.actions

export default TodoReducer.reducer
