import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import "./Swiper.css";
import ImgWoman from "../../../../assets/TestimonialOne.png";
import ImgMan from "../../../../assets/TestimonialTwo.png";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { useEffect } from "react";
import { useState } from "react";

const Data = [
  {
    id: 1,
    Img: ImgMan,
    Testi:
      "I couldn't be happier with the service provided by DZ Work Away. As a male immigrant navigating a complex process, their team's guidance and expertise were invaluable. They made everything clear and straightforward, and I'm now living my dream in a new country. Thank you, DZ Work Away!",
    Name: "John Doe",
  },

  {
    id: 2,
    Img: ImgWoman,
    Testi:
      "Choosing DZ Work Away was the best decision I made for my immigration journey. The support I received from their team was exceptional. They took the time to understand my individual needs and concerns, and they were with me every step of the way. I'm now settled in my new home country, and I owe it all to DZ Work Away",
    Name: "Emily Smith",
  },

  {
    id: 3,
    Img: ImgMan,
    Testi:
      "I was impressed by the professionalism and dedication of DZ Work Away. As a male immigrant, I had many questions and uncertainties about the process, but their team provided clear answers and reassurance. Thanks to their expertise, I successfully obtained my visa and am now building a new life",
    Name: "David Johnson",
  },
  {
    id: 4,
    Img: ImgWoman,
    Testi:
      "I can't thank DZ Work Away enough for their support throughout my immigration journey. As a female immigrant, I appreciated their understanding and empathy. They were patient, attentive, and always available to answer my questions. Thanks to their guidance, I'm now thriving in a new country.",
    Name: "Sophia Garcia",
  },
];

export default function App() {
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth < 768 ? 1 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 2);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-full mx-auto md:w-3/4">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Data.map(({ id, Img, Testi, Name }) => {
            return (
              <SwiperSlide key={id}>
                <div className="w-full p-4 md:mx-auto mt-12 md:mt-20 border border-grey shadow-lg mb-12 md:h-[22rem]">
                  <div className="p-4">
                    <div>
                      <LazyLoadImage
                        className="!w-10 !h-10 mb-4"
                        src={Img}
                        alt={Name}
                      />
                    </div>
                    <div>
                      <p>
                        <span>&#34;</span>
                        {Testi}
                        <span>&#34;</span>
                      </p>
                    </div>
                    <div className="mt-4">
                      <h6>{Name}</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
