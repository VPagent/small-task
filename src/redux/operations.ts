import { createAction, createAsyncThunk} from "@reduxjs/toolkit"
import { fetchItems } from "../services/API"



export const getAllItems = createAsyncThunk(
    "getItems",
    async () => {
        try{
            const items = await fetchItems()
            return items
        } catch(error:any){console.log(error.message)}
    }
)

export const getSingleItem = createAsyncThunk(
    "getSingle",
    async () => {
    }
)