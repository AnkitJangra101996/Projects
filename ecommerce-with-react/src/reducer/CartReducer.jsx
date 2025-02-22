import { calculateTotalCartPrice } from "../Utils/functions";

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cartProdIndex = state?.cartItems?.findIndex(
        (item) => item.id === action.payload?.product?.id
      );
      if (cartProdIndex === -1) {
        state.cartItems.push({
          ...action.payload.product,
          quantity: action.payload.quantity,
        });
      } else {
        state.cartItems[cartProdIndex].quantity += action.payload.quantity;
      }
      localStorage.setItem("perso-cart", JSON.stringify(state.cartItems));
      console.log(state);
      return {
        ...state,
        cartTotal: calculateTotalCartPrice(state.cartItems),
        cartItems: [...state.cartItems],
      };
    }

    case "REMOVE_FROM_CART": {
      const filterItems = state.cartItems.filter(
        (item) => +item.id !== +action.payload
      );
      localStorage.setItem("perso-cart", JSON.stringify(filterItems));
      return {
        ...state,
        cartTotal: calculateTotalCartPrice(filterItems),
        cartItems: [...filterItems],
      };
    }

    case "ADD_TO_WISHLIST": {
      const wishlistItemIndex = state?.wishlist?.findIndex(
        (item) => item.id === action.payload?.product?.id
      );
      if (wishlistItemIndex === -1) {
        state.wishlist.push(...action.payload.product);
      }
      localStorage.setItem("perso-wishlist", JSON.stringify(state.wishlist));
      console.log(state);
      return {
        ...state,
        wishlist: [...state.wishlist],
      };
    }
  }
};
