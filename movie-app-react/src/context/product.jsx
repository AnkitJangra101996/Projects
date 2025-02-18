import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvide = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("product-data-react")) {
      setProducts(JSON.parse(localStorage.getItem("product-data-react")));
      console.log("if");
    } else {
      console.log("else");
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("product-data-react", JSON.stringify(data));
          setProducts(data);
        });
    }
  }, []);

  return (
    <>
      <ProductContext.Provider value={products}>
        {children}
      </ProductContext.Provider>
    </>
  );
};
