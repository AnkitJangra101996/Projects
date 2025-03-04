import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("redux-ecomm-products")) || [],
  loading: false,
  cart: JSON.parse(localStorage.getItem("redux-ecomm-cart")) || [],
  user: JSON.parse(localStorage.getItem("redux-ecomm-user")) || null,
  theme: localStorage.getItem("redux-ecomm-theme") || "light",
};

export const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    addProduct: (state) => {
      console.log(state);
      console.log("addProduct in cart slice");
    },
    changeTheme: (state, payload) => {
      localStorage.setItem("redux-ecomm-theme", payload.payload);
      return {
        ...state,
        theme: payload.payload,
      };
    },
  },
});

export const { addProduct, changeTheme } = ecommerceSlice.actions;

export default ecommerceSlice.reducer;
