import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./Slices/MessageSlice";
import notesSlice from "./Slices/notesSlice";
import productReducer from "./Slices/ProductSlice";
import cartReducer from "./Slices/CartSlice";

export default configureStore({
    reducer: {
        // messageReducer,
        // notesReducer: notesSlice
        productReducer,
        cartReducer
    }
})
