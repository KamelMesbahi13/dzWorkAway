import Header from "./Header/Header";
import Title from "../../GeneralFunctions/Title";
import AboutUs from "./AboutUs/AboutUs";
import Platforms from "./Platforms/Platforms";
import Services from "./Services/Services";

const Home = () => {
  Title("Dz Work Away | Accueil");

  return (
    <>
      <div>
        <Header />
        <AboutUs />
        <div className="container">
          <Platforms />
          <Services />
        </div>
      </div>
    </>
  );
};

export default Home;
