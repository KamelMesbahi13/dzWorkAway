import Header from "./Header/Header";
import Title from "../../../GeneralFunctions/Title";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  Title("Dz Work Away | Accueil");

  return (
    <>
      <div>
        <Header />
        <AboutUs />
        <div className="container"></div>
      </div>
    </>
  );
};

export default Home;
