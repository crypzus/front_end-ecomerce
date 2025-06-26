import React from "react";
import Img1 from "../../assets/productos/globos_cromados/azul.png";
import Img2 from "../../assets/productos/globos_retro/lila.png";
import Img3 from "../../assets/productos/globlos_latex/marron.png";
import { FaStar } from "react-icons/fa";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: " Paquete globos cromado",
    color: "Azul",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Paquete globos retro",
    color: "Lila",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Paquete globos latex",
    color: "Marron",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProduts = () => {
  return (
    <div className="bg-gray-100">
      <div className="container ">
        {/* header setion */}
        <div className="text-center  mb-24 ">
          <p data-aos="zoom-in-up" className="text-sm text-primary">
            Productos en Tendencia
          </p>
          <h1 data-aos="zoom-in-up" className="text-3xl font-bold ">
            Los Productos mas Vendidos
          </h1>
          <p data-aos="zoom-in-up" className="text-gray-400 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            dolores eum et.
          </p>
        </div>
        {/* body setion  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-secondary hover:text-white  relative shadow-xl duration-300 group max-w-[300px]"
              data-aos="zoom-in-up"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt="img de producto"
                  className="max-w-[170px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-md">{data.color}</p>
                <p className="text-gray-500 group-hover:text-white duration-300 line-clamp-2">
                  {data.description}
                </p>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white hover:font-bold shadow-md">
                  Comprar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
        <div data-aos="zoom-in" className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer  py-1 px-5 rounded-md flex items-center gap-2 hover:bg-secondary bg-gradient-to-r from-primary to-secondary hover:scale-105 transition duration-300 text-white hover:font-bold shadow-md">
            Ver Todos
            <HiOutlineChevronDoubleDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopProduts;
