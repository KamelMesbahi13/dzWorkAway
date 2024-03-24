import Data from "../../../data.json";
import ImgOne from "../../../assets/Experience.png";
import ImgTwo from "../../../assets/Priority.png";
import ImgThree from "../../../assets/Advice.png";
import ImgFour from "../../../assets/Support.png";
import Shape from "../../../assets/OurStoryShape.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    Img: ImgOne,
    Heading: "Experience",
    Heading_ar: "الخبرة",
    Heading_fr: "Expérience",
    Description:
      "With extensive experience guiding countless clients, we offer seasoned expertise to navigate your journey seamlessly. Trust in our track record and let us streamline your path to success.",
    Description_ar:
      "من خلال خبرتنا الواسعة في توجيه عدد لا يحصى من العملاء، نقدم لك خبرات متمرسة لتخوض رحلتك بسلاسة. ثِق في سجلنا الحافل ودعنا نيسر لك طريقك نحو النجاح.",
    Description_fr:
      "Forts d'une expérience considérable dans l'accompagnement d'innombrables clients, nous offrons une expertise chevronnée qui vous permettra de naviguer en toute transparence. Faites confiance à notre expérience et laissez-nous tracer votre chemin vers le succès.",
  },

  {
    id: 2,
    Img: ImgTwo,
    Heading: "Priority",
    Heading_ar: "الأولويات",
    Heading_fr: "Priorité",
    Description:
      "Your needs come first. We prioritize understanding your goals, challenges, and aspirations to deliver tailored solutions and exceptional service, ensuring your satisfaction and success.",
    Description_ar:
      "احتياجاتك تأتي أولاً. نحن نعطي الأولوية لفهم أهدافك وتحدياتك وتطلعاتك لتقديم حلول مصممة خصيصاً لك وخدمة استثنائية، مما يضمن رضاك ونجاحك.",
    Description_fr:
      "Vos besoins sont prioritaires. Nous nous attachons à comprendre vos objectifs, vos défis et vos aspirations afin de vous proposer des solutions sur mesure et un service exceptionnel, garantissant ainsi votre satisfaction et votre réussite.",
  },

  {
    id: 3,
    Img: ImgThree,
    Heading: "Advice",
    Heading_ar: "النصيحة",
    Heading_fr: "Conseil",
    Description:
      "Trust our guidance. We offer tailored advice to help you navigate life's complexities with confidence and clarity.",
    Description_ar:
      "ثق بإرشاداتنا. نحن نقدم لك مشورة مصممة خصيصاً لمساعدتك في التعامل مع تعقيدات الحياة بثقة ووضوح.",
    Description_fr:
      "Faites confiance à nos conseils. Nous offrons des conseils sur mesure pour vous aider à naviguer dans les complexités de la vie avec confiance et clarté.",
  },

  {
    id: 4,
    Img: ImgFour,
    Heading: "Support",
    Heading_ar: "الدعم والمساندة",
    Heading_fr: "Soutien",
    Description:
      "Our support is unwavering. We're here to guide you through challenges and celebrate your successes, offering personalized assistance every step of the way.",
    Description_ar:
      "دعمنا غير متموج. نحن هنا لإرشادك خلال التحديات والاحتفال بنجاحاتك، ونقدم لك المساعدة الشخصية في كل خطوة على الطريق.",
    Description_fr:
      "Notre soutien est inébranlable. Nous sommes là pour vous aider à relever les défis et à célébrer vos succès, en vous offrant une assistance personnalisée à chaque étape.",
  },
];

const WhyUs = () => {
  const { i18n } = useTranslation();

  const modifiedDataHeaderAndParagraph =
    Data.AboutUs_WhyUs_Heading_Paragraph.map((data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          header: data.header_ar,
          description: data.description_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          header: data.header_fr,
          description: data.description_fr,
        };
      }
      return data;
    });

  const HeadingsAndParagraphs = modifiedDataHeaderAndParagraph.map(
    ({ id, header, description }) => {
      return (
        <div key={id}>
          <div>
            {" "}
            <div>
              <h1 className="relative mb-2 lg:mb-0 lg:headingStyleLg">
                {header}
              </h1>
            </div>
            <div>
              <p className="md:mt-4 lg:mt-0">{description}</p>
            </div>
          </div>
        </div>
      );
    }
  );

  const modifiedDataBoxes = data.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Heading: data.Heading_ar,
        Description: data.Description_ar,
        Img: data.Img,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Heading: data.Heading_fr,
        Description: data.Description_fr,
        Img: data.Img,
      };
    }
    return data;
  });

  const modifiedDataButton = Data.AboutUs_WhyUs_Button.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        button: data.button_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        button: data.button_fr,
      };
    }
    return data;
  });

  const Button = modifiedDataButton.map(({ button, id }) => {
    return (
      <div key={id}>
        <a rel="noreferrer" target="_blank" href="/Nos-Services">
          <button className="mt-12 buttonCust">{button}</button>
        </a>{" "}
      </div>
    );
  });

  return (
    <>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:ltr:mr-8 lg:w-3/4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {HeadingsAndParagraphs}
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="grid w-full grid-cols-1 mt-8 lg:mt-32 gap-y-6 lg:gap-20 lg:w-3/4 lg:grid-cols-2"
          >
            {modifiedDataBoxes.map(({ id, Img, Heading, Description }) => {
              return (
                <div key={id}>
                  <div>
                    <div className="ease-in border-2 border-opacity-0 border-secondColor hover:border-opacity-100 p-4 duration-300 shadow-xl lg:ltr:h-[36rem] lg:rtl:h-[20rem] xl:ltr:h-[28rem] xl:rtl:h-[18rem] lg:p-8">
                      <div>
                        <LazyLoadImage
                          className="w-12 h-12"
                          src={Img}
                          alt={Heading}
                        />
                      </div>
                      <div>
                        <div className="mt-2">
                          <h6>{Heading}</h6>
                        </div>
                        <div>
                          <p>{Description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
          <motion.div
            className="block md:hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 150 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {Button}
          </motion.div>
        </div>
        <div className="relative">
          <LazyLoadImage
            className="absolute h-[25rem] w-full bottom-96 md:bottom-80 -z-10"
            src={Shape}
            alt="Shape"
          />
        </div>
      </div>
    </>
  );
};

export default WhyUs;
