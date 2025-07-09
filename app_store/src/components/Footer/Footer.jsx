import React from "react";
import Banner from "../../assets/website/footer-claro.png";
import BannerDark from "../../assets/website/footer-dark.png";
import footerLogo from "../../assets/logo.png";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Inicio",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contactanos",
    link: "/#contactanos",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className=" mb-20">
      <div className="container text-secondary">
        <div className="grid md:grid-cols-3 pv-44 pt-5">
          {/* detalles de la tienda */}
          <div className="py-7 px-0">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-2">
              <img src={footerLogo} alt=" logo" className="max-w-[50px]" />
              Balloons Decoration
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate rerum, architecto consequuntur quasi totam magni!
            </p>
          </div>
          {/* footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-7 px-0">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-2">
                  links Importantes
                </h1>
                <ul className="flex flex-col gap-2">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
