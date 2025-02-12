import React from "react";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Fashion Store
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">
            Restez à la Mode
            <br />
            <span className="font-light">Nouvelle Collection</span>
          </h1>
          <button
            onClick={() => {
              const element = document.getElementById("products");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Découvrir
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
