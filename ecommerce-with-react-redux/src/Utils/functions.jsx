export const setOrFetchProducts = () => {
  if (localStorage.getItem("perso-app-products")) {
    return JSON.parse(localStorage.getItem("perso-app-products"));
  } else {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("perso-app-products", JSON.stringify(data));
        return data;
      });
  }
};

export const calculateTotalCartPrice = (cartItems) => {
  if (cartItems.length === 0) return 0;
  const cartTotal = cartItems
    .reduce((acc, item) => item.price * item.quantity + acc, 0)
    .toFixed(2);
  localStorage.setItem("perso-app-cart-total", cartTotal);
  return cartTotal;
};
