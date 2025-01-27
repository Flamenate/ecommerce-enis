import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white" : "bg-black/20"
      } fixed w-full z-10 lg:px-8 transition-all shadow-md py-6`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="flex items-center justify-center gap-5">
          <Link to={"/"}>
            <div className="w-[40px]">
              <img src={Logo} alt="" />
            </div>
          </Link>
        </div>

        <a href="/contact" className="font-semibold text-xl underline">
          Feedback
        </a>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative flex-reverse"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
