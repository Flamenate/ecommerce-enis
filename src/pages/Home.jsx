import Product from "../components/Product";
import Hero from "../components/Hero";
import Feedback from "../components/Feedback";
import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [category, setCategory] = useState();

  const filterByCategory = (newCategory) => {
    if (category === newCategory) {
      setCategory(null);
      return;
    }
    setCategory(newCategory);
  };

  return (
    <div>
      <Hero />
      <section className="py-20" id="products">
        <div className="container mx-auto flex flex-col">
          <h1 className="text-3xl font-semibold mb-5 text-center capitalize">
            Explorez Nos Produits
          </h1>
          <div className="mx-auto mb-5 flex gap-5">
            <button
              onClick={() => filterByCategory("Shoes")}
              className={`rounded-full py-2 px-4 border-2 border-gray-400 ${
                category === "Shoes" ? "bg-gray-300" : ""
              }`}
            >
              Chaussures
            </button>
            <button
              onClick={() => filterByCategory("Clothes")}
              className={`rounded-full py-2 px-4 border-2 border-gray-400 ${
                category === "Clothes" ? "bg-gray-300" : ""
              }`}
            >
              Vêtements
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-7 max-w-sm mx-auto md:max-w-none md:mx-0">
            {(category
              ? products.filter((product) => product.category.name === category)
              : products
            ).map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
