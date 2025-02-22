import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("perso-app-products"))
  );

  useEffect(() => {
    if (localStorage.getItem("perso-app-products")) {
      setProducts(JSON.parse(localStorage.getItem("perso-app-products")));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProducts(data);
          localStorage.setItem("perso-app-products", JSON.stringify(data));
        });
    }
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
