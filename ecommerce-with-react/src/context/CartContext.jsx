import { CartReducer } from "../reducer/cartReducer";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const initalState = {
    cartItems: JSON.parse(localStorage.getItem("perso-cart")) || [],
    cartTotal: localStorage.getItem("perso-app-cart-total") || 0,
    loading: false,
    wishlist: JSON.parse(localStorage.getItem("perso-wishlist")) || [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addItem = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  const removeItem = (payload) => {
    dispatch({ type: "REMOVE_FROM_CART", payload });
  };

  const emptyCart = (payload) => {
    dispatch({ type: "EMPTY_CART", payload });
  };

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addToWishlist = (payload) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload });
  };

  const removeFromWishlist = (payload) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload });
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        emptyCart,
        increase,
        decrease,
        ...state,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
