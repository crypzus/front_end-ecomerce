import ProductsData from "../../data/ProductsData";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const TopProducts = () => {
  const sortedProduts = [...ProductsData].sort((a, b) => b.rating - a.rating);
  const topProducts = sortedProduts.slice(0, 3);
  return (
    <div className="bg-white dark:bg-gray-900 duration-200 dark:text-white">
      <div className="container ">
        {/* header setion */}
        <div className="text-center mb-30">
          <p data-aos="zoom-in-up" className="text-lg text-primary pt-5">
            Productos en Tendencia
          </p>
          <h1 data-aos="zoom-in-up" className="text-3xl font-bold ">
            Los Productos mas Vendidos
          </h1>
          <p data-aos="zoom-in-up" className="text-gray-400 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            dolores eum et.
          </p>
        </div>
        {/* body setion  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center p-10">
          {topProducts.map((data) => (
            <div
              key={data.id}
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
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-md">{data.color}</p>
                <p className="text-gray-500 group-hover:text-white duration-300 line-clamp-2">
                  {data.description}
                </p>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white hover:font-bold shadow-md dark:from-white dark:to-white dark:text-gray-950 dark:hover:text-cuarto">
                  Comprar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
