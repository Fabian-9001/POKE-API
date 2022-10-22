import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
    name: 'userName',
    initialState: '',
    reducers: {
        setuserNameGlobal: (state, action) => action.payload
    }
})

export const { setuserNameGlobal } = userNameSlice.actions

export default userNameSlice.reducer