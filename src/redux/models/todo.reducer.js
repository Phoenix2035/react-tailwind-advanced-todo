import { createSlice, current } from "@reduxjs/toolkit"
import { getTodoFromLocalStorage } from "../../utils"

const TodoReducer = createSlice({
    name: "todo",
    initialState: {
        todo: getTodoFromLocalStorage(),
        search: [],
        lastPage: false
    },
    reducers: {
        addTodo: (state, { payload }) => {
            if (payload.hasOwnProperty("editId")) {
                state.todo = state.todo.map(item => item.id === payload.editId ? {
                    id: payload.editId,
                    name: payload.name,
                    priority: payload.priority,
                    status: payload.status,
                    date: payload.date
                } : item)
                state.search = [...state.todo]
            } else {
                state.todo.push(payload)
                state.search = [...state.todo]
            }
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
        rowsPerPageAction: (state, { payload }) => {
            state.search = state.todo.slice(0, payload)
        },
        paginationAction: (state, { payload: { totalPages, page, rowsPerPage, todoLength } }) => {
            let fromItem = (page - 1) * rowsPerPage
            const x = rowsPerPage * page
            let toItem = x > todoLength ? todoLength : x

            if (todoLength === toItem) {
                state.lastPage = true
            } else {
                state.lastPage = false
            }

            state.search = state.todo.slice(fromItem, toItem)

        }
    }
})


export const {
    addTodo,
    editTodoReducer,
    deleteTodo,
    searchTodo,
    filterPriorityAction,
    filterStatusAction,
    rowsPerPageAction,
    paginationAction
} = TodoReducer.actions

export default TodoReducer.reducer
