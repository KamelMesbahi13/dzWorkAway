import Data from "../../../data.json";
import ImgOne from "../../../assets/Experience.png";
import ImgTwo from "../../../assets/Priority.png";
import ImgThree from "../../../assets/Advice.png";
import ImgFour from "../../../assets/Support.png";
import Shape from "../../../assets/OurServicesShape.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    Img: ImgOne,
    Heading: "Immigration Consulting",
    Heading_ar: "استشارات الهجرة",
    Heading_fr: "Conseil en Immigration",

    Description:
      "Our immigration experts are here to guide you every step of the way. Whether you have questions about visa requirements, immigration procedures or current regulations, we're here to provide you with sound, personalized advice.",
    Description_ar:
      "خبراء الهجرة لدينا هنا لإرشادك في كل خطوة على الطريق. وسواء كانت لديك أسئلة حول متطلبات التأشيرة أو إجراءات الهجرة أو اللوائح الحالية، فنحن هنا لنقدم لك المشورة السليمة والشخصية.",
    Description_fr:
      "Nos experts en immigration sont là pour vous guider à chaque étape du processus. Que vous ayez des questions sur les exigences en matière de visas, les procédures d'immigration ou les réglementations en vigueur, nous sommes là pour vous fournir des conseils avisés et personnalisés.",
  },

  {
    id: 2,
    Img: ImgTwo,
    Heading: "Case management",
    Heading_ar: "إدارة الملفات",
    Heading_fr: "Gestion de Dossiers",

    Description:
      "We understand that the paperwork associated with immigration can be overwhelming. Our experienced team takes charge of managing your files, ensuring that all necessary documents are submitted in a timely manner and in compliance with government requirements..",
    Description_ar:
      "نحن ندرك أن الأعمال الورقية المرتبطة بالهجرة يمكن أن تكون مرهقة. سيتولى فريقنا المتمرس إدارة ملفاتك، مما يضمن تقديم جميع المستندات اللازمة في الوقت المناسب وبما يتوافق مع المتطلبات الحكومية.",
    Description_fr:
      "Nous comprenons que la paperasserie associée à l'immigration peut être écrasante. Notre équipe expérimentée prend en charge la gestion de vos dossiers, veillant à ce que tous les documents nécessaires soient soumis en temps opportun et en conformité avec les exigences gouvernementales.",
  },

  {
    id: 3,
    Img: ImgThree,
    Heading: "Visa Services",
    Heading_ar: "خدمات التأشيرات",
    Heading_fr: "Services de Visa",

    Description:
      "Whether you need a work visa, a student visa, a permanent residence visa or any other type of visa, we are here to help you obtain the necessary authorizations to enter and stay in the country of your choice.",
    Description_ar:
      "سواء كنت بحاجة إلى تأشيرة عمل أو تأشيرة طالب أو تأشيرة إقامة دائمة أو أي نوع آخر من التأشيرات، نحن هنا لمساعدتك في الحصول على التصاريح اللازمة للدخول إلى البلد الذي تختاره والإقامة فيه.",
    Description_fr:
      "Que vous ayez besoin d'un visa de travail, d'un visa d'étudiant, d'un visa de résidence permanente ou tout autre type de visa, nous sommes là pour vous aider à obtenir les autorisations nécessaires pour entrer et rester dans le pays de votre choix.",
  },

  {
    id: 4,
    Img: ImgFour,
    Heading: "Application Assistance",
    Heading_ar: "ضضبلثفي بيخنش يبثض",
    Heading_fr: "Application Assistance",

    Description:
      "Our support is unwavering. We're here to guide you through challenges and celebrate your successes, offering personalized assistance every step of the way.",
    Description_ar:
      "انستمب سبخهلا سبخهالس شخهاب شخيهال شيهخال شخهشثال شحçاض بهاس هيسال سخيهلا ",
    Description_fr:
      "With extensive experience guiding countless clients, we offer seasoned expertise to navigate your journey seamlessly. Trust in our track record and let us streamline your path to success.",
  },
];

const WhyUs = () => {
  const { i18n } = useTranslation();

  const modifiedDataHeader = Data.OurServices_Services_Header.map((data) => {
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

  const modifiedDataContent = data.map((data) => {
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

  const Heading = modifiedDataHeader.map(({ id, header, description }) => {
    return (
      <div key={id}>
        <div>
          <h1 className="relative mb-2 lg:mb-0 md:headingStyleMd lg:headingStyleLg">
            {header}
          </h1>
        </div>
        <div>
          <p className="md:mt-4 lg:mt-0">{description}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        <div className="container flex flex-col mt-20 lg:flex-row">
          <div className="w-full lg:ltr:mr-8 lg:w-3/4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {Heading}
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="grid w-full grid-cols-1 mt-8 lg:mt-32 gap-y-6 lg:gap-20 lg:grid-cols-2"
          >
            {modifiedDataContent.map(({ id, Img, Heading, Description }) => {
              return (
                <div key={id}>
                  <div>
                    <div className="p-4 duration-300 shadow-xl lg:h-[28rem] md:cardServices xl:h-[22rem] hover:text-white lg:p-8">
                      <div className="relative w-16 h-16 bg-white rounded-full">
                        <LazyLoadImage
                          className="absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
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
        </div>
        <div className="relative">
          <LazyLoadImage
            className="absolute h-[25rem] w-full bottom-96 md:bottom-52 -z-10"
            src={Shape}
            alt="Shape"
          />
        </div>
      </div>
    </>
  );
};

export default WhyUs;
