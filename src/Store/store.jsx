import { configureStore } from "@reduxjs/toolkit";
import  bookslice from "../Slice/Bookslice";

const Store=configureStore({
    reducer:{
        bookinfo:bookslice
    }
})
export default Store