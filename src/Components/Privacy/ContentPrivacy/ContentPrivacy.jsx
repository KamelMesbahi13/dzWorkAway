import Data from "../../../data.json";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContentPrivacy = () => {
  const { i18n } = useTranslation();

  const modifiedDataHeaderAndParagraph = Data.Privacy_Header_Paragraph.map(
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

              <div>
                <div className="mb-8 textCenter">
                  <h1>Privacy Policy</h1>
                </div>
                <div className="relative pl-4 before:absolute lg:pl-8 before:md:block before:h-full before:w-2 before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
                  <p>
                    Welcome to DZ Work Away, where your privacy and security are
                    our top priorities. This Privacy Policy Statement is a
                    testament to our unwavering commitment to protecting your
                    personal information and ensuring its confidentiality. As
                    you navigate our platform to explore immigration and work
                    opportunities in Canada and beyond, rest assured that every
                    measure is taken to safeguard your data. From collection to
                    utilization, disclosure, and storage, we operate with
                    transparency and adherence to the highest standards of data
                    protection laws. Our dedication to your privacy extends
                    beyond legal requirements; it is ingrained in our ethos. We
                    recognize the sensitivity of the information you entrust to
                    us and pledge to handle it with the utmost care. Our robust
                    security measures and strict access controls ensure that
                    your data remains secure from unauthorized access, misuse,
                    or disclosure. Additionally, we regularly review and update
                    our privacy practices to adapt to evolving technologies and
                    regulatory requirements, ensuring that your privacy rights
                    are always protected. At DZ Work Away, we believe that
                    transparency is key to fostering trust. Therefore, we
                    provide clear and comprehensive explanations about the types
                    of data we collect, how we use it, and your rights regarding
                    your personal information. Whether you are browsing our
                    website for immigration resources, signing up for
                    newsletters, or engaging with our interactive features, you
                    can have confidence in our commitment to respecting your
                    privacy preferences. Your privacy matters to us, and we
                    value your trust in allowing us to be stewards of your data.
                    If you have any inquiries or require clarification about our
                    approach to privacy, please do not hesitate to reach out to
                    us. Your peace of mind matters to us as much as your
                    aspirations. Welcome to DZ Work Away, where your privacy and
                    security are our top priorities. This Privacy Policy
                    Statement is a testament to our unwavering commitment to
                    protecting your personal information and ensuring its
                    confidentiality. As you navigate our platform to explore
                    immigration and work opportunities in Canada and beyond,
                    rest assured that every measure is taken to safeguard your
                    data. From collection to utilization, disclosure, and
                    storage, we operate with transparency and adherence to the
                    highest standards of data protection laws. Our dedication to
                    your privacy extends beyond legal requirements; it is
                    ingrained in our ethos. We recognize the sensitivity of the
                    information you entrust to us and pledge to handle it with
                    the utmost care. Our robust security measures and strict
                    access controls ensure that your data remains secure from
                    unauthorized access, misuse, or disclosure. Additionally, we
                    regularly review and update our privacy practices to adapt
                    to evolving technologies and regulatory requirements,
                    ensuring that your privacy rights are always protected. At
                    DZ Work Away, we believe that transparency is key to
                    fostering trust. Therefore, we provide clear and
                    comprehensive explanations about the types of data we
                    collect, how we use it, and your rights regarding your
                    personal information. Whether you are browsing our website
                    for immigration resources, signing up for newsletters, or
                    engaging with our interactive features, you can have
                    confidence in our commitment to respecting your privacy
                    preferences. Your privacy matters to us, and we value your
                    trust in allowing us to be stewards of your data. If you
                    have any inquiries or require clarification about our
                    approach to privacy, please do not hesitate to reach out to
                    us. Your peace of mind matters to us as much as your
                    aspirations.
                  </p>
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
