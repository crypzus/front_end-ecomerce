import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Productos from "./components/Productos/Productos";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduts from "./components/TopProduts/TopProduts";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Productos />
      <TopProduts />
    </div>
  );
};

export default App;
