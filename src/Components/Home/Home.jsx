import Header from "./Header/Header";
import Title from "../../GeneralFunctions/Title";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";

const Home = () => {
  Title("Dz Work Away | Accueil");

  return (
    <>
      <div>
        <Header />
        <AboutUs />
        <div className="container">
          <Services />
        </div>
      </div>
    </>
  );
};

export default Home;
