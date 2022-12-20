import { combineReducers, createReducer } from "@reduxjs/toolkit"

const itemsReducer = createReducer([], {
    "getItems/fulfilled" : (state:any, action:any) => action.payload
})


export const rootReducer = combineReducers({
    items : itemsReducer
})
