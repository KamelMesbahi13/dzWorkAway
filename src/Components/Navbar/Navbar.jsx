import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaXmark } from "react-icons/fa6";
import Facebook from "../../assets/Facebook.png";
import Youtube from "../../assets/Youtube.png";
import Gmail from "../../assets/Gmail.png";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const navHandler = () => {
    setNav(!nav);
  };

  const navbarItems = [
    "Accueil",
    "Nos Services",
    "À Propos de Nous",
    "Contactez Nous",
  ];

  const navbarLinks = [
    "Accueil",
    "Nos-Services",
    "À Propos-de-Nous",
    "Contactez-Nous",
  ];

  return (
    <>
      <div>
        <div className="container">
          <div className="z-50 hidden w-full py-6 lg:flex">
            <div className="flex items-center justify-between w-full">
              <div>
                <img className="w-24" src={Logo} alt="Logo" />
              </div>
              <div className="flex gap-8">
                {navbarItems.map((el, i) => (
                  <div key={i}>
                    <Link className="link" to={navbarLinks[i]}>
                      {el}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex">
                <span className="p-2 text-2xl cursor-pointer">
                  <BsGlobe />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row-reverse items-center justify-between lg:hidden">
              <div className={nav ? "visible lg:invisible" : "invisible"}>
                <img src={Logo} className="w-24" alt="Logo" />
              </div>
              <div>
                <div className="lg:hidden">
                  <div className="cursor-pointer">
                    {nav ? (
                      <AiOutlineMenu className="w-6 h-6" onClick={navHandler} />
                    ) : (
                      <FaXmark className="w-6 h-6" onClick={navHandler} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className={
                  nav
                    ? "absolute w-full left-[-150%] duration-500"
                    : "duration-500 absolute left-0 mr-4 w-full bg-grey shadow-2xl z-50"
                }
              >
                <div className="flex flex-col p-4 mr-4">
                  {navbarItems.map((el, i) => (
                    <div key={i} className="my-4">
                      <Link className="link" to={navbarLinks[i]}>
                        {el}
                      </Link>
                    </div>
                  ))}

                  <div className="flex gap-2 mt-4">
                    <a
                      href="https://web.facebook.com/serviclim.studio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className="w-5" src={Facebook} alt="Facebook" />
                    </a>

                    <a
                      href="https://www.youtube.com/@serviclimdz9413"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className="w-5" src={Youtube} alt="Youtube" />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/serviclimalgerie/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className="w-5" src={Gmail} alt="Linkedin" />
                    </a>
                  </div>
                  <div className="mx-auto mt-2 lg:hidden">
                    <img
                      className={nav ? "invisible w-24" : "visible w-24"}
                      src={Logo}
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
