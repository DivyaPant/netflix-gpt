import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./slice/userDetails";

const allReducres = {
    userDetails: userDetailsReducer
};

const store = configureStore({
    reducer: allReducres
});
 
export default store;