import { useParams } from "react-router-dom";
import PlatformsDetailsHeader from "./PlatformsDetailsHeader";
import PlatformsForm from "./PlatformsForm";
import Title from "../../../GeneralFunctions/Title";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    header: "All The World",
  },
  {
    id: 2,
    header: "Canada",
  },
];

const PlatformsDetails = () => {
  Title("Dz Work Away | Détails des plateformes");

  const { i18n } = useTranslation();

  const { platformId } = useParams();
  const platform = data.find((platform) => platform.id == platformId);
  const { header } = platform;

  return (
    <>
      <motion.div>
        <PlatformsDetailsHeader header={header} />
        <div className="container">
          <div className="mt-20">
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
                <div>
                  <h1 className="relative mb-2 headingStyleLg">{header}</h1>
                </div>
                <div>
                  <p>
                    Welcome to our form page! Please fill out the form below
                    with your details and any inquiries you may have. Your
                    information is secure and will only be used to assist you.
                    If you need help, just let us know. Thank you for reaching
                    out!
                  </p>
                </div>
              </motion.div>
            </div>
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
                className="mt-12"
              >
                <div className="relative pl-4 before:absolute lg:pl-8 before:md:block before:h-full before:w-2 before:left-0 before:bg-hoverColor before:top-1/2 before:-translate-y-1/2">
                  <p>
                    ARRIMA and Entrée express are both systems used in the
                    province of Quebec, Canada, for managing immigration
                    applications. ARRIMA stands for Arrima System, which is
                    Quebec s Expression of Interest (EOI) system for managing
                    applications to the Quebec Skilled Worker Program (QSWP). It
                    allows candidates to submit an expression of interest online
                    and enter a pool of candidates. The Quebec government then
                    selects candidates from this pool based on their skills,
                    qualifications, and the labor market needs of the province.
                    Entrée express, on the other hand, is not specific to Quebec
                    but rather a federal system used across Canada. It manages
                    applications for the Federal Skilled Worker Program, Federal
                    Skilled Trades Program, and Canadian Experience Class.
                    Applicants create an online profile, enter a pool of
                    candidates, and are then ranked based on various factors
                    such as age, education, work experience, and language
                    proficiency. The Canadian government regularly invites
                    top-ranked candidates to apply for permanent residence. In
                    summary, ARRIMA is specific to Quebec s immigration system,
                    while Entrée express is part of Canada s federal immigration
                    system.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <PlatformsForm />
        </div>
      </motion.div>
    </>
  );
};

export default PlatformsDetails;
