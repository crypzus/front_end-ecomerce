import React from "react";

import Img1 from "../../assets/productos/globos_cromados/azul.png";
import Img2 from "../../assets/productos/globos_retro/lila.png";
import Img3 from "../../assets/productos/globlos_latex/marron.png";
import Img4 from "../../assets/productos/globos_cromados/dorado.png";
import Img5 from "../../assets/productos/globos_retro/verde-militar.png";
import { FaStar } from "react-icons/fa";

const ProductosData = [
  {
    id: 1,
    img: Img1,
    title: "Paquete globos cromado",
    rating: 5.0,
    color: "Azul",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: " Paquete globos retro",
    rating: 4.5,
    color: "Lila",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Paquete globos latex",
    rating: 4.7,
    color: "Marron",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Paquete globos cromado",
    rating: 4.4,
    color: "dorado",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Paquete globos retro",
    rating: 4.5,
    color: "Verde militar",
    aosDelay: "800",
  },
];

const Productos = () => {
  return (
    <div className="bg-white mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Los mas vendidos
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Productos
          </h1>
          <p data-aos="fade-up" className="text-gray-400 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            dolores eum et.
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  place-items-center gap-10">
            {/* cards section */}
            {ProductosData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className=" space-y-3 "
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[160px] object-cover rounded-t-lg "
                />
                <h3 className="text-lg font-semibold mt-2">{data.title}</h3>
                <p className="text-sm text-gray-600">Color: {data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500 " />
                  <span>{data.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
