import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../../redux/Article/ArticleSlice";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./article.css";

const Article = () => {
  const article = useSelector((state) => state.article.posts);
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(fetchArticle());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 تشخیص سایز فعلی
  const isSmDown = windowWidth < 640; // sm و پایین‌تر
  const isMdUp = windowWidth >= 768; // md و بالاتر

  // 🔹 تنظیم نمایش و گروه‌بندی
  const slidesPerView = isSmDown ? 1 : isMdUp ? 4 : 2;
  const slidesPerGroup = isSmDown ? 1 : isMdUp ? 4 : 2;

  // 🔹 تعداد دکمه‌های pagination
  const totalButtons = Math.ceil(article.length / slidesPerGroup);

  return (
    <div className="w-[94%] mx-auto px-4 mb-8">
      <div className="w-full flex justify-between items-center py-6">
        <span className="text-[#757575] text-[22px]">آخرین مقالات</span>
        <span className="text-[#757575] text-[16px]">ورود به بلاگ</span>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Autoplay]}
        className="articlesSwiper"
      >
        {article.map((art) => (
          <SwiperSlide key={art.id}>
            <a
              href={art.link}
              className="block bg-white rounded-[12px] overflow-hidden shadow-md transition hover:shadow-lg"
            >
              <img
                src={art.image}
                alt={art.alt}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4 h-[80px] flex items-center">
                <p className="text-sm text-gray-700 font-medium line-clamp-2">
                  {art.body}
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 Pagination سفارشی */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalButtons }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const swiper = document.querySelector(".articlesSwiper").swiper;
              swiper.slideTo(idx * slidesPerGroup);
            }}
            className={`w-3 h-3 rounded-full transition ${
              idx === Math.floor(activeIndex / slidesPerGroup)
                ? "bg-black scale-110"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Article;
