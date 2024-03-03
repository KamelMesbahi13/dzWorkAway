import Img from "../../../assets/OurStoryImg.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <>
      <div>
        <div>
          <div className="relative mt-8 mb-20 sm:52">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="textCenter lg:text-left"
            >
              <LazyLoadImage src={Img} alt="Our Story Image" />
            </motion.div>
            <div className="lg:absolute bg-white shadow-xl duration-500 hover:shadow-2xl px-8 py-12 rounded-lg lg:top-1/4 lg:w-[70%] lg:left-[20%]">
              <h1 className="mb-8 textCenter">Our Story</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                reprehenderit architecto vero sequi suscipit, earum porro quo ad
                voluptas nisi recusandae illum ipsum amet, repellendus soluta
                tenetur veritatis tempore odit sunt nihil quam laudantium
                aliquid neque illo! Quae suscipit asperiores quasi nesciunt
                exercitationem vero vel alias, repellat dignissimos tempore ad
                rerum tempora dolorem nihil distinctio culpa commodi aliquam
                sint, molestias optio labore nam. Dolorum aliquid aut rerum a
                deserunt dolor saepe, iure nesciunt velit recusandae asperiores
                soluta adipisci, porro perferendis reprehenderit sapiente
                mollitia obcaecati ut? Exercitationem molestias, cumque dicta
                officia deserunt rerum sapiente a? Harum, natus itaque
                distinctio illo rem sapiente dolorem maiores ipsa, commodi
                quidem qui. Laborum repellendus nemo quis numquam officiis in
                impedit alias deserunt, ipsa ex error ipsam molestiae
                perspiciatis, ab eaque. Dicta quos accusamus, porro iusto
                doloribus et nisi officia? Iste, obcaecati ipsam! Reprehenderit
                animi fugiat doloremque repudiandae, vel accusantium veniam
                corrupti. At odio distinctio impedit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
