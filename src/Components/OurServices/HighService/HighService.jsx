import Data from "../../../data.json";
import Quality from "../../../assets/Quality.png";
import Speed from "../../../assets/Speed.png";
import Reliability from "../../../assets/Reliability.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    Title: "Quality",
    Title_ar: "الجودة",
    Title_fr: "Qualité",
    Content:
      "Trust us to provide you with top-quality, fast and reliable service, every time.",
    Content_ar:
      "اعتمد علينا لتزويدك بخدمة عالية الجودة وسريعة وموثوقة في كل مرة.",
    Content_fr:
      "Faites-nous confiance pour vous offrir un service de qualité supérieure, rapide et fiable, à chaque instant.",
    Icon: Quality,
  },

  {
    id: 2,
    Title: "Speed",
    Title_ar: "السرعة",
    Title_fr: "Vitesse",
    Content:
      "We are committed to providing our customers with a high level of service characterized by unrivalled speed and reliability.",
    Content_ar:
      "نحن ملتزمون بتزويد عملائنا بمستوى عالٍ من الخدمة التي تتميز بالسرعة والموثوقية التي لا مثيل لها.",
    Content_fr:
      "Nous nous engageons à fournir à nos clients un niveau élevé de service caractérisé par sa rapidité et sa fiabilité inégalées.",
    Icon: Speed,
  },

  {
    id: 3,
    Title: "Reliability",
    Title_ar: "الموثوقية",
    Title_fr: "Fiabilité",
    Content:
      "With us, every interaction is treated with meticulous care, guaranteeing an exceptional customer experience at every stage of their immigration journey.",
    Content_ar:
      "معنا، يتم التعامل مع كل حالة بعناية، مما يضمن تجربة عملاء استثنائية في كل مرحلة من مراحل رحلة الهجرة.",
    Content_fr:
      "Chez nous, chaque interaction est traitée avec un soin méticuleux, garantissant une expérience client exceptionnelle à chaque étape de leur parcours d'immigration.",
    Icon: Reliability,
  },
];

const HighService = () => {
  const { i18n } = useTranslation();

  const modifiedDataHeader = Data.OurServices_HighService__Heading.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          header: data.header_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          header: data.header_fr,
        };
      }
      return data;
    }
  );

  const HeadingsAndParagraphs = modifiedDataHeader.map(({ id, header }) => {
    return (
      <div key={id}>
        <div>
          <div>
            <h1 className="textCenter">{header}</h1>
          </div>
        </div>
      </div>
    );
  });

  const modifiedDataContent = data.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Title: data.Title_ar,
        Content: data.Content_ar,
        Icon: data.Icon,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Title: data.Title_fr,
        Content: data.Content_fr,
        Icon: data.Icon,
      };
    }
    return data;
  });

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="py-8 mt-16 text-white md:py-16 md:mt-28 bestServicesBack"
      >
        <div>
          <div>
            <div className="w-full px-20 mx-auto md:w-3/4">
              {HeadingsAndParagraphs}
            </div>
            <div>
              <div>
                <div>
                  {modifiedDataContent.map(({ id, Title, Content, Icon }) => {
                    return (
                      <div key={id}>
                        <div className="container my-3 md:my-6">
                          <div className="px-4 py-6 duration-500 md:border-b-2 md:border-opacity-0 md:py-12 md:border-b-grey md:hover:border-opacity-100">
                            <div className="flex flex-col items-center justify-between p-4 shadow-sm rtl:initialDirection md:shadow shadow-grey md:p-0 border-grey md:border-0 md:flex-row">
                              <div>
                                <LazyLoadImage src={Icon} alt={Title} />
                              </div>
                              <div className="w-full rtl:textRight md:w-1/2">
                                <div>
                                  <h6>{Title}</h6>
                                </div>
                                <div>
                                  <p>{Content}</p>
                                </div>
                              </div>
                            </div>
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
      </motion.div>
    </>
  );
};

export default HighService;
