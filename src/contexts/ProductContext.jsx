import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const shoeResponse = await fetch(
        "https://api.escuelajs.co/api/v1/categories/4/products"
      );
      const shoeData = await shoeResponse.json();
      const clothesResponse = await fetch(
        "https://api.escuelajs.co/api/v1/categories/1/products"
      );
      const clothesData = await clothesResponse.json();

      const productArray = [
        ...clothesData.filter(
          (product) =>
            product.images.length &&
            product.images[0].match(/.+\.(?:jpeg|jpg|png)/)
        ),
        ...shoeData,
      ];
      shuffle(productArray);

      setProducts(productArray);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
