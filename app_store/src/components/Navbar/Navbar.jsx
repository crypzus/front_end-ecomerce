import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
// los elementos del navbar

const Productos = [
  {
    id: 1,
    name: "Globos",
    link: "/#",
  },
  {
    id: 2,
    name: "Cortinas",
    link: "/#services",
  },
  {
    id: 3,
    name: "Cajas decoradas",
    link: "/#",
  },
  {
    id: 4,
    name: "Viniles",
    link: "/#",
  },
  {
    id: 5,
    name: "Copas y Vasos",
    link: "/#",
  },
];

const Proyectos = [
  {
    id: 1,
    name: "arreglos",
    link: "/#",
  },
  {
    id: 2,
    name: "Decoraciones",
    link: "/#services",
  },
  {
    id: 3,
    name: "Tareas escolares",
    link: "/#",
  },
  {
    id: 4,
    name: "Manualidades",
    link: "/#",
  },
];

const Alquileres = [
  {
    id: 1,
    name: "estructuras",
    link: "/#",
  },
  {
    id: 2,
    name: "Luces Neon",
    link: "/#services",
  },
  {
    id: 3,
    name: "Donbos",
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
          <div className="flex justify-between items-center gap-4 ">
            <div className=" relative group hidden sm:block">
              <input
                type="text"
                placeholder="Busqueda"
                className="  w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 bg-white group-hover:placeholder-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
            {/* boton de ordenes */}

            <button
              onClick={() => alert("pedidos no disponible todavia")}
              className=" bg-primary
             dark:bg-white 
             transition-all duration-200 
             text-white dark:text-black 
             px-4 py-1 rounded-full 
             hover:bg-secondary 
             flex items-center gap-3 group shadow-md  "
            >
              <span className="group-hover:block hidden transition-all duration-200 dark:text-black dark:group-hover:text-cuarto font-bold">
                Orden
              </span>
              <HiOutlineShoppingBag className="text-xl text-white dark:text-black drop-shadow-sm cursor-pointer dark:group-hover:text-cuarto" />
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
          <li>
            <a
              href="#"
              className="inline-block px-4 hover:text-primary duration-200"
            >
              Inicio
            </a>
          </li>
          {/* dropdown productos*/}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-[2px] py-2 hover:text-primary duration-200"
            >
              Productos
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[99999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md   dark:bg-gray-800 dark:text-white">
              <ul>
                {Productos.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* dropdown Proyectos*/}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-[2px] py-2 hover:text-primary duration-200"
            >
              Proyectos
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[99999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md   dark:bg-gray-800 dark:text-white">
              <ul>
                {Proyectos.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* dropdown Alquileres*/}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-[2px] py-2 hover:text-primary duration-200"
            >
              Alquileres
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[99999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md   dark:bg-gray-800 dark:text-white">
              <ul>
                {Alquileres.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="inline-block px-4 hover:text-primary duration-200"
            >
              Contactanos
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
