import Header from "./Header/Header";
import Title from "../../GeneralFunctions/Title";
import AboutUs from "./AboutUs/AboutUs";
import Platforms from "./Platforms/Platforms";
import Services from "./Services/Services";
import ContactSection from "../../Ui/ContactSection/ContactSection";

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
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default Home;
