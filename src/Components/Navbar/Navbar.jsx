import { useState } from "react";
import Data from "../../data.json";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaXmark } from "react-icons/fa6";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/instagram.png";
import TranslateIcon from "../../Ui/TranslationIcon/TranslationIcon";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();

  const modifiedDataNav = Data.navbarItems.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        ItemOne: data.ItemOne_ar,
        ItemTwo: data.ItemTwo_ar,
        ItemThree: data.ItemThree_ar,
        ItemFour: data.ItemFour_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        ItemOne: data.ItemOne_fr,
        ItemTwo: data.ItemTwo_fr,
        ItemThree: data.ItemThree_fr,
        ItemFour: data.ItemFour_fr,
      };
    }
    return data;
  });

  const [nav, setNav] = useState(true);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <>
      <div id="nav">
        <div className="container">
          <div className="z-50 hidden w-full py-6 lg:flex">
            <div className="flex items-center justify-between w-full">
              <div>
                <img className="w-28" src={Logo} alt="Logo" />
              </div>
              <div className="flex gap-8">
                <Link to="/">{modifiedDataNav.map((el) => el.ItemOne)}</Link>
                <Link to="/Nos-Services">
                  {modifiedDataNav.map((el) => el.ItemTwo)}
                </Link>
                <Link to="/À Propos-de-Nous">
                  {modifiedDataNav.map((el) => el.ItemThree)}
                </Link>
                <Link to="/Contactez-Nous">
                  {modifiedDataNav.map((el) => el.ItemFour)}
                </Link>
              </div>
              <div className="flex items-center">
                <span className="text-2xl cursor-pointer ">
                  <TranslateIcon />
                </span>
                <div>
                  <a
                    href="https://web.facebook.com/dzworkaway"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="w-6 mx-2" src={Facebook} alt="Facebook" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/dzworkaway"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="w-6" src={Instagram} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container flex flex-row-reverse items-center justify-between lg:hidden">
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
                  ? "absolute w-full rtl:left-[150%] opacity-0 ltr:left-[-150%] duration-500 z-50"
                  : "absolute w-full left-0 bg-grey opacity-100 shadow-2xl z-50 duration-500"
              }
            >
              <div className="flex flex-col px-8 py-16 gap-y-8">
                <Link onClick={navHandler} to="/">
                  {modifiedDataNav.map((el) => el.ItemOne)}
                </Link>
                <Link onClick={navHandler} to="/Nos-Services">
                  {modifiedDataNav.map((el) => el.ItemTwo)}
                </Link>
                <Link onClick={navHandler} to="/À Propos-de-Nous">
                  {modifiedDataNav.map((el) => el.ItemThree)}
                </Link>
                <Link onClick={navHandler} to="/Contactez-Nous">
                  {modifiedDataNav.map((el) => el.ItemFour)}
                </Link>

                <div className="mx-auto mt-2 lg:hidden">
                  <img
                    className={nav ? "invisible w-24" : "visible w-24"}
                    src={Logo}
                    alt="Logo"
                  />
                </div>

                <div className="flex items-center justify-center gap-2">
                  <a
                    href="https://web.facebook.com/dzworkaway"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="w-5" src={Facebook} alt="Facebook" />
                  </a>

                  <a
                    href="https://www.instagram.com/dzworkaway/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="w-5" src={Instagram} alt="Instagram" />
                  </a>
                  <div>
                    <TranslateIcon />
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
