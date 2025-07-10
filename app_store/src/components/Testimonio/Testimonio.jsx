import React from "react";
import Slider from "react-slick";
import TestimonioData from "../../data/TestimonioData";

const Testimonio = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const allTestimonio = TestimonioData;
  return (
    <div className="  dark:bg-gray-950 duration-200 dark:text-white">
      <div className="container ">
        {/* hader section */}

        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-right" className="text-lg text-primary pt-5">
            Lo que piensan nuestros clientes
          </p>
          <h1 data-aos="fade-right" className="text-3xl font-bold pt-2">
            TESTIMONIOS
          </h1>
          <p data-aos="fade-right" className="text-gray-400 text-md">
            tu opinion es muy importante para nosotros, por eso te invitamos a
            que nos dejes tu testimonio, para poder mejorar y ofrecerte un mejor
            servicio.
          </p>
        </div>

        {/* testimonnio cards */}
        <div data-aos="fade-left ">
          <Slider {...settings}>
            {allTestimonio.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt="foto de usarios"
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="espace-y-3">
                      <p className="text-xs text-gray-400 ">{data.text}</p>

                      <h1 className="text-xl font-bold text-black/80 dark:text-light dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-white/80">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonio;
