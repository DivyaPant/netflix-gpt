import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails : {}
};

const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers : {
        updateUserDetails: (state, action)=>{
            state.userDetails = action.payload;
        }
    }
});

export const {updateUserDetails} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;