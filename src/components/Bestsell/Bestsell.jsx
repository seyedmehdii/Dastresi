import { useDispatch, useSelector } from "react-redux";
import "./Bestsell.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { fetchBestsell } from "../../redux/Bestsell/BestsellSlice";

const Now = () => {
  const bestsell = useSelector((state) => state.bestsell.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBestsell());
  }, [dispatch]);

  return (
    <div className="w-[94%] bg-[#CBCBCB] mb-8 mx-auto rounded-[8px] p-4 pb-6">
      {/* تیتر بالا */}
      <div className="flex justify-between items-center mb-4 px-2">
        <span className="text-[#757575] text-[22px]">
          همین الان موجود شد...
        </span>
        <a href="#" className="text-[16px] hidden md:block">
          مشاهده همه محصولات
        </a>
      </div>

      {/* اسلایدر محصولات */}
      <Swiper
        spaceBetween={12}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 8 },
          480: { slidesPerView: 2.5, spaceBetween: 12 },
          640: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
        }}
        className="nowSwiper"
      >
        {bestsell.map((elem) => (
          <SwiperSlide key={elem.id}>
            <div className="flex flex-col bg-white rounded-[8px] overflow-hidden shadow-sm hover:shadow-md transition h-full">
              {/* تصویر و توضیحات */}
              <div className="flex-1 flex flex-col items-center justify-start p-3">
                <img
                  className="w-full h-[150px] md:h-[180px] object-contain mb-2"
                  src={elem.image}
                  alt={elem.alt}
                />
                {/* title */}
                <h3
                  className="text-sm font-bold text-center text-[#555] min-h-[40px] leading-5
                               line-clamp-2 md:line-clamp-none"
                >
                  {elem.title}
                </h3>
                {/* body */}
                <p
                  className="text-xs text-center text-gray-600 min-h-[32px] leading-4
                              line-clamp-2 md:line-clamp-none"
                >
                  {elem.body}
                </p>
              </div>

              {/* قیمت یا وضعیت */}
              {elem.not.length > 0 ? (
                <div className="h-[60px] bg-[#FFF5F5] flex items-center justify-center">
                  <span className="text-rose-600 text-[16px] font-medium">
                    {elem.not}
                  </span>
                </div>
              ) : (
                <div className="h-[60px] bg-white flex flex-col items-center justify-center px-2">
                  {elem.finalprice.length > 0 ? (
                    <>
                      <h3 className="line-through text-sm text-gray-500">
                        {elem.price}
                      </h3>
                      <h3 className="text-lg font-bold text-blue-600">
                        {elem.finalprice}{" "}
                        <span className="text-[13px] text-black">تومان</span>
                      </h3>
                    </>
                  ) : (
                    <h3 className="text-lg font-bold text-blue-600">
                      {elem.price}{" "}
                      <span className="text-[13px] text-black">تومان</span>
                    </h3>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Now;
