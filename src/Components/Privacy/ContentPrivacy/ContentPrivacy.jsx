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
            <h1 className="relative mb-2 xl:mb-0 before:absolute before:hidden rtl:xl:pr-20 ltr:xl:pl-20 before:md:block before:h-2 before:w-16 before:rtl:left-[93%] before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2g">
              {Header}
            </h1>
          </div>
          <div>
            <p>{Privacy_Policy_Text}</p>
          </div>
        </div>
      );
    }
  );

  const HeadingsAndParagraphsTwo = Data.Privacy_Header_Paragraph_Header_One.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          Header: data.Header_ar,
          Privacy_Policy_Text_Header: data.Privacy_Policy_Text_Header_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          Header: data.Header_fr,
          Privacy_Policy_Text_Header: data.Privacy_Policy_Text_Header_fr,
        };
      }
      return data;
    }
  );

  const modifiedDataHeaderAndParagraphTwo = HeadingsAndParagraphsTwo.map(
    ({ id, Header, Privacy_Policy_Text_Header }) => {
      return (
        <div key={id}>
          <div>
            <div className="mb-8 textCenter">
              <h1>{Header}</h1>
            </div>
            <div className="relative">
              <h6>{Privacy_Policy_Text_Header}</h6>
            </div>
          </div>
        </div>
      );
    }
  );

  const ModifiedDataParagraphOne = Data.Privacy_Paragraph_One.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_Text_fr,
      };
    }
    return data;
  });

  const ParagraphOne = ModifiedDataParagraphOne.map(
    ({ id, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <p>
              <span className="font-bold ltr:mr-4 rtl:ml-4 text-mainColor">
                1_
              </span>
              {Privacy_Policy_Text}
            </p>
          </div>
        </div>
      );
    }
  );

  const ModifiedDataParagraphTwo = Data.Privacy_Paragraph_Two.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_Text_fr,
      };
    }
    return data;
  });

  const ParagraphTwo = ModifiedDataParagraphTwo.map(
    ({ id, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <p>
              <span className="font-bold ltr:mr-4 rtl:ml-4 text-mainColor">
                2_
              </span>
              {Privacy_Policy_Text}
            </p>
          </div>
        </div>
      );
    }
  );

  const ModifiedDataParagraphThree = Data.Privacy_Paragraph_Three.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          Privacy_Policy_Text: data.Privacy_Policy_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          Privacy_Policy_Text: data.Privacy_Policy_Text_fr,
        };
      }
      return data;
    }
  );

  const ParagraphThree = ModifiedDataParagraphThree.map(
    ({ id, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <p>
              <span className="font-bold ltr:mr-4 rtl:ml-4 text-mainColor">
                3_
              </span>
              {Privacy_Policy_Text}
            </p>
          </div>
        </div>
      );
    }
  );

  const ModifiedDataParagraphFour = Data.Privacy_Paragraph_Four.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_Text_fr,
      };
    }
    return data;
  });

  const ParagraphFour = ModifiedDataParagraphFour.map(
    ({ id, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <p>
              <span className="font-bold ltr:mr-4 rtl:ml-4 text-mainColor">
                4_
              </span>
              {Privacy_Policy_Text}
            </p>
          </div>
        </div>
      );
    }
  );

  const HeadingsAndParagraphsThree =
    Data.Privacy_Header_Paragraph_Header_Two.map((data) => {
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

  const modifiedDataHeaderAndParagraphThree = HeadingsAndParagraphsThree.map(
    ({ id, Header }) => {
      return (
        <div key={id}>
          <div>
            <div>
              <h6>{Header}</h6>
            </div>
          </div>
        </div>
      );
    }
  );

  const ModifiedDataParagraphFive = Data.Privacy_Paragraph_Five.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_Text_fr,
      };
    }
    return data;
  });

  const ParagraphFive = ModifiedDataParagraphFive.map(
    ({ id, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <p>
              <span className="font-bold ltr:mr-4 rtl:ml-4 text-mainColor">
                5_
              </span>
              {Privacy_Policy_Text}
            </p>
          </div>
        </div>
      );
    }
  );

  const ModifiedDataParagraphSix = Data.Privacy_Paragraph_Six.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_Text_fr,
      };
    }
    return data;
  });

  const ParagraphSix = ModifiedDataParagraphSix.map(
    ({ id, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <p>
              <span className="font-bold ltr:mr-4 rtl:ml-4 text-mainColor">
                1_
              </span>
              {Privacy_Policy_Text}
            </p>
          </div>
        </div>
      );
    }
  );

  const ModifiedDataParagraphSeven = Data.Privacy_Paragraph_Seven.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          Privacy_Policy_Text: data.Privacy_Policy_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          Privacy_Policy_Text: data.Privacy_Policy_Text_fr,
        };
      }
      return data;
    }
  );

  const ParagraphSeven = ModifiedDataParagraphSeven.map(
    ({ id, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <p>
              <span className="font-bold ltr:mr-4 rtl:ml-4 text-mainColor">
                2_
              </span>
              {Privacy_Policy_Text}
            </p>
          </div>
        </div>
      );
    }
  );

  const ModifiedDataParagraphEight = Data.Privacy_Paragraph_Eight.map(
    (data) => {
      if (i18n.language === "ar") {
        return {
          id: data.id,
          Privacy_Policy_Text: data.Privacy_Policy_ar,
        };
      }

      if (i18n.language === "fr") {
        return {
          id: data.id,
          Privacy_Policy_Text: data.Privacy_Policy_Text_fr,
        };
      }
      return data;
    }
  );

  const ParagraphEight = ModifiedDataParagraphEight.map(
    ({ id, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <p>
              <span className="font-bold ltr:mr-4 rtl:ml-4 text-mainColor">
                3_
              </span>
              {Privacy_Policy_Text}
            </p>
          </div>
        </div>
      );
    }
  );

  const ModifiedDataParagraphNine = Data.Privacy_Paragraph_Nine.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_Text_fr,
      };
    }
    return data;
  });

  const ParagraphNine = ModifiedDataParagraphNine.map(
    ({ id, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <p>
              <span className="font-bold ltr:mr-4 rtl:ml-4 text-mainColor">
                4_
              </span>
              {Privacy_Policy_Text}
            </p>
          </div>
        </div>
      );
    }
  );

  const ModifiedDataParagraphTen = Data.Privacy_Paragraph_Ten.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Privacy_Policy_Text: data.Privacy_Policy_Text_fr,
      };
    }
    return data;
  });

  const ParagraphTen = ModifiedDataParagraphTen.map(
    ({ id, Privacy_Policy_Text }) => {
      return (
        <div key={id}>
          <div>
            <p>
              <span className="font-bold ltr:mr-4 rtl:ml-4 text-mainColor">
                5_
              </span>
              {Privacy_Policy_Text}
            </p>
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
              <div className="mb-4 md:mb-8">
                <div>{modifiedDataHeaderAndParagraphTwo}</div>
                <div>
                  <div className="mt-4 md:mt-8">
                    {ParagraphOne}
                    {ParagraphTwo}
                    {ParagraphThree}
                    {ParagraphFour}
                    {ParagraphFive}
                  </div>
                </div>
              </div>

              <div>
                <div>{modifiedDataHeaderAndParagraphThree}</div>
                <div className="mt-4 md:mt-8">
                  {ParagraphSix}
                  {ParagraphSeven}
                  {ParagraphEight}
                  {ParagraphNine}
                  {ParagraphTen}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPrivacy;
