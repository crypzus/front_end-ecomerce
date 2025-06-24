import React from "react";

import Img1 from "../../assets/productos/globos_cromados/azul.jpg";
import Img2 from "../../assets/productos/globos_retro/lila.jpg";
import Img3 from "../../assets/productos/globlos_latex/marron.jpg";
import Img4 from "../../assets/productos/globos_cromados/dorado.jpg";
import Img5 from "../../assets/productos/globos_retro/verde-militar.jpg";
import { FaStar } from "react-icons/fa";

const ProductosData = [
  {
    id: 1,
    img: Img1,
    title: "Globo cromado azul",
    rating: 5.0,
    color: "Azul",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "globo retro lila",
    rating: 4.5,
    color: "Lila",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Globo de latex marron",
    rating: 4.7,
    color: "Maron",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Globo cromado dorado",
    rating: 4.4,
    color: "dorado",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "globo retro verde militar",
    rating: 4.5,
    color: "Verde militar",
    aosDelay: "800",
  },
];

const Productos = () => {
  return (
    <div className="bg-gray-500 mt-14 mb-12">
      <div className="contairner">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 jg:grid-cols-5 place-items-center gap-4">
            {/* cards section */}
            {ProductosData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className=" space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-[180px] h-[220px] object-cover rounded-t-lg"
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
