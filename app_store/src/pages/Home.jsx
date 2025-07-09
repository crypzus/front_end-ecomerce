import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TopProducts from "../components/TopProduts/TopProducts";
import Testimonio from "../components/Testimonio/Testimonio";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <TopProducts />
      <Testimonio />
      <Footer />
    </div>
  );
};

export default Home;
