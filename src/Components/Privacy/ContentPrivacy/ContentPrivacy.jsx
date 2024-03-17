import Data from "../../../data.json";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContentPrivacy = () => {
  const { i18n } = useTranslation();

  const modifiedDataHeaderAndParagraph = Data.Privacy_Header_Paragraph_One.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          Header: data.Header_ar,
          Privacy_Policy_Text: data.Privacy_Policy_Text_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          Header: data.Header_fr,
          Privacy_Policy_Text: data.Header_fr,
        };
      }
      return data;
    }
  );

  const HeadingsAndParagraphs = modifiedDataHeaderAndParagraph.map(
    ({ id, Header, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <h1 className="relative mb-2 lg:mb-0 before:absolute before:hidden rtl:lg:pr-20 ltr:lg:pl-20 before:md:block before:h-2 before:w-16 before:rtl:left-[93%] before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2g">
              {Header}
            </h1>
          </div>
          <div className="relative">
            <p>{Privacy_Policy_Text}</p>
          </div>
        </div>
      );
    }
  );

  const HeadingsAndParagraphsTwo = Data.Privacy_Header_Paragraph_Two.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          Header: data.Header_ar,
          Privacy_Policy_Text: data.Privacy_Policy_Text_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          Header: data.Header_fr,
          Privacy_Policy_Text: data.Header_fr,
        };
      }
      return data;
    }
  );

  const modifiedDataHeaderAndParagraphTwo = HeadingsAndParagraphsTwo.map(
    ({ id, Header, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <div className="mb-8 textCenter">
              <h1>{Header}</h1>
            </div>
            <div className="relative pl-4 before:absolute lg:pl-8 before:md:block before:h-full before:w-2 before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
              <p>{Privacy_Policy_Text}</p>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <>
      <div className="mt-12">
        <div className="container">
          <div>
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="w-full mb-16 md:w-3/4"
              >
                <div>{HeadingsAndParagraphs}</div>
              </motion.div>

              {modifiedDataHeaderAndParagraphTwo}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPrivacy;
