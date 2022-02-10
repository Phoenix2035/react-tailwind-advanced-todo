import { combineReducers } from '@reduxjs/toolkit'
import todo from "./models/todo.reducer"



const rootReducer = combineReducers({
    todo,
});

export default rootReducer;