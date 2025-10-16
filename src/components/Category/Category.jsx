import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/Category/CategorySlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./category.css";

const Category = () => {
  const category = useSelector((state) => state.category.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className="w-[94%] mx-auto p-4 mt-[40px]">
      <h3 className="font-bold text-center mb-4 text-2xl">
        دسته‌بندی‌های منتخب
      </h3>

      {/* 🌟 اسلایدر فقط برای md به بالا */}
      <div className="hidden md:block">
        <Swiper
          spaceBetween={20}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            768: { slidesPerView: 5 },   // md
            1280: { slidesPerView: 6 },  // xl
          }}
          className="myCategorySwiper"
        >
          {category.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="flex flex-col items-center cursor-pointer">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-28 h-28 object-contain rounded-[8px] p-2"
                />
                <p className="text-sm text-center mt-2">{cat.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🌟 نمایش ساده برای موبایل (بدون اسلایدر) */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {category.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center cursor-pointer bg-white rounded-lg shadow-sm p-2"
          >
            <img
              src={cat.image}
              alt={cat.alt}
              className="w-24 h-24 object-contain rounded-[8px]"
            />
            <p className="text-sm text-center mt-2">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
