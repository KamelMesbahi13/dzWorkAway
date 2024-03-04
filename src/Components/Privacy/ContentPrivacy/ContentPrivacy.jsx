import { motion } from "framer-motion";

const ContentPrivacy = () => {
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
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="w-full mb-16 md:w-3/4"
              >
                <div>
                  <h1 className="relative mb-2 lg:headingStyleLg">
                    Privacy Policy Statement: Your Data Security and
                    Confidentiality Commitment
                  </h1>
                </div>
                <div className="relative">
                  <p>
                    Welcome to DZ Work Away. We are committed to protecting your
                    privacy. Rest assured, your data is safe with us. We adhere
                    to strict security measures and respect your preferences.
                    Your trust matters.
                  </p>
                </div>
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
