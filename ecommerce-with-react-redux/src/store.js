import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducers from './features/ecommerceSlice';

const store = configureStore({
    reducer: {
        ecommerce: ecommerceReducers,
    },
})

export default store;