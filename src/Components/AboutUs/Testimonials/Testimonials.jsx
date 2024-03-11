import Data from "../../../data.json";
import Swiper from "./Swiper/Swiper";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { i18n } = useTranslation();

  const modifiedDataHeaderAndParagraph =
    Data.AboutUs_Testimonial_Heading_Paragraph.map((data) => {
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
            <div>
              <div>
                <h1 className="relative mb-2 lg:mb-0 before:absolute before:hidden rtl:lg:pr-20 ltr:lg:pl-20 before:md:block before:h-2 before:w-16 before:rtl:left-[93%] before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
                  {header}
                </h1>
              </div>
              <div>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <div className="mt-12 md:mt-28">
      <div>
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-full md:w-3/4"
          >
            {HeadingsAndParagraphs}
          </motion.div>
        </div>
      </div>
      <Swiper />
    </div>
  );
};

export default Testimonials;
