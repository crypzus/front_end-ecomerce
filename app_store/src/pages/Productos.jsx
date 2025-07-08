import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ProductsData from "../data/ProductsData";

const Productos = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const allProducts = ProductsData;
  return (
    <div>
      <Navbar />
      <div className=" mt-14 mb-12">
        <div className="container">
          {/* header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">
              Los mejores productos para tus eventos
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold ">
              Productos
            </h1>
            <p data-aos="fade-up" className="text-gray-400 text-xs">
              Cotiza con nosotros, obtén los mejores precios y asesoría
              personalizada para tus eventos. ¡Contáctanos ahora!
            </p>
          </div>
          {/* body section */}

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* cards section */}
            {allProducts.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className=" space-y-3 bg-gray-100 hover:bg-black/80 p-4 rounded-lg shadow-md hover:scale-105 transition duration-300 dark:bg-gray-800  dark:hover:bg-secondary dark:hover:text-white group hover:text-white"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[160px] object-cover rounded-t-lg "
                />
                <h3 className="font-semibold text-center">{data.title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-white dark:group-hover:text-white">
                  {" "}
                  Color: {data.color}
                </p>
                <div className="w-full flex items-center justify-center gap-1">
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-white gap-2 dark:group-hover:text-white">
                    ({data.rating})
                  </span>
                  {[...Array(5)].map((_, index) => {
                    const fullStars = Math.floor(data.rating); // Parte entera del rating (ej: 4 de 4.5)
                    const hasHalfStar = data.rating % 1 !== 0; // Verifica si hay una parte decimal (ej: 0.5 de 4.5)

                    // Determina qué estrella renderizar
                    let StarComponent;
                    let starClassName = "text-yellow-500 dark:text-primary"; // Por defecto, color de estrella llena

                    if (index < fullStars) {
                      // Si el índice es menor que las estrellas enteras, es una estrella completa
                      StarComponent = FaStar;
                    } else if (index === fullStars && hasHalfStar) {
                      // Si el índice es igual a las estrellas enteras Y hay una media estrella, renderiza la media estrella
                      StarComponent = FaStarHalfAlt; // O FaStarHalf si esa es la que prefieres/funciona
                    } else {
                      // De lo contrario, es una estrella vacía
                      StarComponent = FaRegStar; // Estrella vacía
                      starClassName = "text-gray-300"; // Color para estrella vacía
                    }

                    return (
                      <StarComponent key={index} className={starClassName} />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="800"
            className="flex justify-center"
          >
            <button className="text-center mt-10 cursor-pointer  py-1 px-5 rounded-md flex items-center gap-2 hover:bg-secondary bg-gradient-to-r from-primary to-secondary hover:scale-105 transition duration-300 text-white hover:font-bold shadow-md">
              Ver Todos
              <HiOutlineChevronDoubleDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
