import Header from "./Header/Header";
import Title from "../../GeneralFunctions/Title";
import AboutUs from "./AboutUs/AboutUs";
import Platforms from "./Platforms/Platforms";

const Home = () => {
  Title("Dz Work Away | Accueil");

  return (
    <>
      <div>
        <Header />
        <AboutUs />
        <div className="container">
          <Platforms />
        </div>
      </div>
    </>
  );
};

export default Home;
