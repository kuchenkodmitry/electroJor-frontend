import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";
import { authReducer } from "./slices/auth";
import { settingsReducer } from "./slices/settings";

const store = configureStore({ 
    reducer:{
        posts: postsReducer,
        auth: authReducer,
        settings: settingsReducer
    }
})

export default store;