import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
// los elementos del navbar
const Menu = [
  {
    id: 1,
    name: "Inicio",
    link: "/#",
  },
  {
    id: 2,
    name: "Proyectos",
    link: "/#services",
  },
  {
    id: 3,
    name: "Productos",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Contactanos",
    link: "/#",
  },
];

const Productos = [
  {
    id: 1,
    name: "Inicio",
    link: "/#",
  },
  {
    id: 2,
    name: "Proyectos",
    link: "/#services",
  },
  {
    id: 3,
    name: "Productos",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Contactanos",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white shadow-md dark:bg-gray-800 dark:text-white duration-200 relative z-40">
      {/* parte de arriba del navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container  flex justify-between items-center">
          <div>
            <a href="#" className="flex font-bold gap-2  text-2xl sm:text-3xl">
              <img src={Logo} alt="Logo" className="w-10 uppercase" />
              Balloons Decorations
            </a>
          </div>
          {/* barra de busqueda  */}
          <div className="flex justify-between items-center gap-4">
            <div className=" relative group hidden sm:block">
              <input
                type="text"
                placeholder="Busqueda"
                className=" bg-white w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
            {/* boton de ordenes */}
            <button
              onClick={() => alert("pedidos no disponible todavia")}
              className="bg-gradient-to-r from-primary to-secondary transition-all text-white px-4 py-1 rounded-full hover:from-secondary  duration-200 flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Orden
              </span>
              <HiOutlineShoppingBag className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode switch  */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* parte de abajo del navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* dropdown */}
          <li>
            <a href="#" className="flex items-center gap-[2px] py-2">
              Productos
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div>
              <ul>
                {Productos.map((data) => (
                  <li key={data.id}>
                    <a href={data.link}>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
