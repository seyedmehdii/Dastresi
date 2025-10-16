import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./popular.css";
import { fetchPopular } from "../../redux/Popular/PopularSlice";

const Popular = () => {
  const popular = useSelector((state) => state.popular.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  return (
    <div className="w-[94%] h-[210px] mb-4 mx-auto p-4 mt-[40px] ">
      <h3 className="font-bold text-[#757575] mb-4 text-2xl">
        محبوب ترین برندها
      </h3>

      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        className="myCategorySwiper"
      >
        {popular.map((elem) => (
          <SwiperSlide key={elem.id}>
            <div className="flex flex-col items-center cursor-pointer overflow-hidden w-[250px] h-[100px] ">
              <img
                src={elem.image}
                alt={elem.alt}
                className="w-full h-full object-cover rounded-[16px]  p-2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Popular;
