import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', name: "Max Martin"},
    {id: '2', name: "Justin Grant"},
    {id: '3', name: "Madison Price"}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer