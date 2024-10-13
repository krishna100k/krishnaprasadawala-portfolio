import { configureStore } from "@reduxjs/toolkit";
import folderSlice from "@/redux/folderSlice"

const store = configureStore({
    reducer : {
        folder : folderSlice
    }
})

export default store;