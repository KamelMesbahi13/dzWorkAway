import Logo from "../../assets/Logo.png";
import Data from "../../data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/instagram.png";
import Tiktok from "../../assets/TikTok.png";
import Gmail from "../../assets/Gmail.png";
import Phone from "../../assets/PhoneCall.png";
import Time from "../../assets/Time.png";
import { useTranslation } from "react-i18next";

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
    Link: "https://web.facebook.com/dzworkaway",
  },
  {
    id: 2,
    Img: Instagram,
    Link: "https://www.instagram.com/dzworkaway/",
  },
  {
    id: 3,
    Img: Tiktok,
    Link: "#",
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

const time = [
  {
    id: 1,
    Img: Time,
    Content: "De 08:00h - 16:00h (Vendredi Et Samedi Fermé)",
  },
];

const Footer = () => {
  const { i18n } = useTranslation();

  // --------------------------------------------------------

  const modifiedDataParagraph = Data.Footer_Paragraph.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Paragraph: data.Paragraph_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Paragraph: data.Paragraph_fr,
      };
    }
    return data;
  });

  const Paragraph = modifiedDataParagraph.map(({ id, Paragraph }) => {
    return (
      <div key={id}>
        <p className="w-3/4 my-4 lg:w-full lg:my-8">{Paragraph}</p>
      </div>
    );
  });

  // ------------------------------------------------------------------

  const modifiedDataLinksHeader = Data.Footer_Links_Header.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Header: data.Header_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Header: data.Header_fr,
      };
    }
    return data;
  });

  const LinksHeader = modifiedDataLinksHeader.map(({ id, Header }) => {
    return (
      <div key={id}>
        <h6 className="mb-4 text-3xl md:mb-8">{Header}</h6>
      </div>
    );
  });

  // -------------------------------------------------------------

  const modifiedDataSocialMediaLinks = Data.Footer_Social_Media_Header.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          Header: data.Header_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          Header: data.Header_fr,
        };
      }
      return data;
    }
  );

  const SocialMediaHeader = modifiedDataSocialMediaLinks.map(
    ({ id, Header }) => {
      return (
        <div key={id}>
          <h6 className="mb-4">{Header}</h6>
        </div>
      );
    }
  );

  // ----------------------------------------------------------
  const modifiedDataSocialContactsHeader =
    Data.Footer_Social_Contacts_Header.map((data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          Header: data.Header_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          Header: data.Header_fr,
        };
      }
      return data;
    });

  const SocialMediaContactsHeader = modifiedDataSocialContactsHeader.map(
    ({ id, Header }) => {
      return (
        <div key={id}>
          <h6 className="mb-2">{Header}</h6>
        </div>
      );
    }
  );
  // -------------------------------------------------------------

  const year = new Date().getFullYear();

  return (
    <>
      <div className="relative w-full mt-12 md:mt-20 h-[50rem] lg:h-[31rem] footerBack border border-grey">
        <div className="container">
          <div className="absolute -translate-y-1/2 top-1/2 rtl:lg:w-[94%]">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="w-full lg:w-1/4">
                <div>
                  <div>
                    <div>
                      <LazyLoadImage className="w-36" src={Logo} alt="Logo" />
                    </div>
                    <div>{Paragraph}</div>
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
                </div>
              </div>
              <div className="w-full my-4 lg:w-1/4 lg:textCenter">
                {LinksHeader}{" "}
                <div className="flex flex-row flex-wrap lg:flex-nowrap lg:flex-col gap-y-8">
                  {footerItems.map((el, i) => (
                    <div key={i}>
                      <a
                        rel="noreferrer"
                        className="ltr:mr-2 rtl:ml-2 link"
                        href={footerLinks[i]}
                      >
                        {el}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full bg-white lg:p-8 lg:w-1/4">
                <div>
                  {SocialMediaHeader}
                  <div className="flex">
                    {socialMedia.map(({ id, Img, Link }) => {
                      return (
                        <div key={id}>
                          <a target="_blank" rel="noreferrer" href={Link}>
                            <LazyLoadImage
                              className="w-6 ltr:mr-2 rtl:ml-2"
                              src={Img}
                              alt="Social Media"
                            />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-8">
                    {SocialMediaContactsHeader}{" "}
                    <div>
                      {contact.map(({ id, Img, Content }) => {
                        return (
                          <div key={id}>
                            <div className="flex items-center ltr:flex-row rtl:flex-row-reverse">
                              <div className="w-10 h-10">
                                <LazyLoadImage
                                  className="w-6 my-2 ltr:mr-2 rtl:ml-2"
                                  src={Img}
                                  alt="Contact"
                                />
                              </div>
                              <div>
                                <p className="rtl:ml-4 initialDirection">
                                  {Content}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {time.map(({ id, Img, Content }) => {
                        return (
                          <div key={id}>
                            <div className="flex items-center ltr:flex-row rtl:flex-row-reverse">
                              <div className="w-10 h-10">
                                <LazyLoadImage
                                  className="w-6 my-2 ltr:mr-12 rtl:ml-12"
                                  src={Img}
                                  alt="Contact"
                                />
                              </div>
                              <div>
                                <p className="rtl:ml-4">{Content}</p>
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
            <div className="flex items-center justify-center">
              <div>
                <p>
                  Copyright <span>&#169;</span> All Rights Reserved To{" "}
                  <span className="font-semibold">Dz Work Away {year} </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
