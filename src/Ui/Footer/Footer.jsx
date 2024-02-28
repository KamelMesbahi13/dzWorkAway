import Logo from "../../assets/Logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/instagram.png";
import Tiktok from "../../assets/TikTok.png";
import Gmail from "../../assets/Gmail.png";
import Phone from "../../assets/PhoneCall.png";

const footerItems = [
  "Accueil",
  "Nos Services",
  "À Propos de Nous",
  "Contactez Nous",
];

const footerLinks = [
  "Accueil",
  "Nos-Services",
  "À Propos-de-Nous",
  "Contactez-Nous",
];
const socialMedia = [
  {
    id: 1,
    Img: Facebook,
  },
  {
    id: 2,
    Img: Instagram,
  },
  {
    id: 3,
    Img: Tiktok,
  },
];

const contact = [
  {
    id: 1,
    Img: Phone,
    Content: "05 55 55 55",
  },
  {
    id: 2,
    Img: Gmail,
    Content: "admin@gmail.com",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="relative w-full mt-20 h-[50rem] lg:h-[31rem] footerBack border border-grey">
        <div className="container">
          <div className="absolute -translate-y-1/2 top-1/2">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="w-full lg:w-[60%] lg:p-4">
                <div className="flex flex-col justify-between lg:items-center lg:flex-row">
                  <div className="w-full lg:w-1/2">
                    <div>
                      <LazyLoadImage className="w-36" src={Logo} alt="Logo" />
                    </div>
                    <div>
                      <p className="w-3/4 my-4 lg:w-full lg:my-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Optio quae aut et. Impedit, repudiandae
                        voluptatibus? Nisi ut quam dolore voluptatum.
                      </p>
                    </div>
                    <div className="my-4 lg:my-0 lg:text-left">
                      <iframe
                        className="w-[20rem] lg:h-[13rem]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.5674581116455!2d3.4572480746310768!3d36.756952170138284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e69baa1d2c8f7%3A0x296e1c2f98e626f2!2sdzworkaway!5e0!3m2!1sen!2sdz!4v1709118189454!5m2!1sen!2sdz"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                  <div className="my-4 lg:textCenter">
                    <h6 className="mb-4 text-3xl md:mb-8">Links</h6>
                    <div className="flex flex-wrap lg:flex-nowrap lg:flex-col gap-y-8">
                      {footerItems.map((el, i) => (
                        <div key={i}>
                          <a className="mr-2 link" href={footerLinks[i]}>
                            {el}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:p-8 lg:w-1/4">
                <div>
                  <div>
                    <h6 className="mb-4 md:mb-8">Our Social Media:</h6>
                  </div>
                  <div className="flex">
                    {socialMedia.map(({ id, Img }) => {
                      return (
                        <div key={id}>
                          <div>
                            <LazyLoadImage
                              className="w-6 mr-2"
                              src={Img}
                              alt="Social Media"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-8">
                    <h6 className="mb-4">Our Contacts:</h6>
                    <div>
                      {contact.map(({ id, Img, Content }) => {
                        return (
                          <div key={id}>
                            <div className="flex items-center">
                              <div>
                                <LazyLoadImage
                                  className="w-6 my-2 mr-2"
                                  src={Img}
                                  alt="Contact"
                                />
                              </div>
                              <div>
                                <p>{Content}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-full h-20 bg-grey">
          <div className="container absolute -translate-y-1/2 top-1/2">
            <div className="flex items-center justify-between">
              <div>
                <p>
                  Copyright <span>&#169;</span> All Rights Reserved To{" "}
                  <span className="font-semibold">Dz Work Away {year} </span>
                </p>
              </div>
              <div className="flex items-center">
                <a href="/">
                  <p className="mr-4">Politics and privacy</p>
                </a>
                <a href="/">
                  <p>Political and legal</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
