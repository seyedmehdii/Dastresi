import { useDispatch, useSelector } from "react-redux";
import Image from "../../assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { fetchMenu } from "../../redux/Menu/MenuSlice";
const Header = ({ onHeightChange }) => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.menu);
  useEffect(() => {
    dispatch(fetchMenu());
  }, []);
  const [showDiv, setShowDiv] = useState(false);
  const divRef = useRef(null);

  // بستن div وقتی بیرونش کلیک بشه
  useEffect(() => {
    function handleClickOutside(e) {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setShowDiv(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        id="site-header"
        className="w-full bg-white h-[134px] hidden lg:block fixed z-50 border-b border-gray-400"
      >
        <div className="flex  flex-col mx-auto mt-6  h-[82.1%]  max-w-screen-xl px-4 ">
          <div className="flex justify-between gap-4 items-center w-full h-1/2">
            <div className="w-2/3 h-full flex gap-8 items-center">
              <img
                src={Image}
                alt="فروشگاه اینترنتی دسترسی"
                className="w-22 "
              />
              <div className="relative px-3 lg:w-[32%] xl:w-[40%] h-[70%] flex items-center rounded-[8px] bg-[#F7F8FA]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                  />
                </svg>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="جستجو محصولات"
                  className="  w-full h-full focus:outline-none ml-2 "
                />
              </div>
              <div className="flex text-sm flex-1  h-[80%] gap-4 text-[#B0B0B0] justify-center items-center">
                <a href="">باشگاه مشتریان </a>
                <a href="">بلاگ </a>
                <a href="">ارتباط ما </a>
                <a href="">درباره ما </a>
              </div>
            </div>
            <div className="flex gap-4 items-center h-full flex-1 justify-end">
              <a
                href=""
                className="flex relative items-center justify-center rounded-[8px] bg-[#F7F8FA] w-[42px] h-[42px] "
              >
                <svg
                  className="!text-[#fe5f5f] w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  aria_label="سبد خرید"
                >
                  <title>سبد خرید</title>

                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l1.6 9.6c.16.95.98 1.64 1.95 1.64h8.9c.95 0 1.77-.68 1.95-1.61L21 7H7"
                  />

                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 7l1 0 M10 7l0 0"
                  />

                  <circle cx="9.5" cy="19" r="1.7" fill="currentColor" />
                  <circle cx="17.5" cy="19" r="1.7" fill="currentColor" />

                  <circle cx="9.5" cy="19" r="0.6" fill="#fff" opacity="0.15" />
                  <circle
                    cx="17.5"
                    cy="19"
                    r="0.6"
                    fill="#fff"
                    opacity="0.15"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.5 5.5L2 2.5"
                    opacity="0.9"
                  />
                </svg>
                <span className="cursor-pointer absolute flex justify-center items-center rounded-full text-white text-xs bg-[#fe5f5f] shadow-blue-0-4 top-[-10px] right-[-10px] w-5 h-5 ">
                  0
                </span>
              </a>
              <button className="btn bg-[#0A5ABD] border-none text-white rounded-[8px]">
                ورود و ثبتنام
              </button>
            </div>
          </div>
          <div className="flex justify-between  items-center w-full h-1/2 pt-2 ">
            <ul className="w-full h-full flex justify-between items-center text-[14px] ">
              {posts.map((elem, idx) => {
                if (elem.submenu.length > 0) {
                  if (elem.type === "brands") {
                    /**brand */
                    return (
                      <li
                        className="hover:text-red-500 p-3 cursor-pointer hover:underline hover:decoration-solid hover:decoration-[3px] relative group/brand hover:underline-offset-[17px] "
                        key={`${elem.id}-${idx}`}
                      >
                        <a href={elem.link}>{elem.name}</a>
                        <div
                          className="absolute top-full border-1 border-[#e2e8f0] pl-0.5 bg-white  w-[91vw] left-0 h-[260px] border-t  text-black  
                        group-hover/brand:block hidden rounded-bl-[8px] rounded-br-[8px] z-[60]"
                        >
                          <div className="grid grid-cols-5 w-[inherit] h-[85%]  border-b border-gray-200  divide-x divide-gray-200  ">
                            <ul className="h-full pt-2">
                              {elem.submenu
                                .slice(0, 6)
                                .map((brand, brandIdx) => {
                                  return (
                                    <li
                                      className="hover:text-blue-700 w-full relative flex justify-between h-[36px]  items-center  hover:bg-[#F5F5F5]"
                                      key={`${brand.id}-${brandIdx}`}
                                    >
                                      <a href={elem.link}>{brand.name_fa}</a>
                                      <a href={elem.link}>{brand.name_en}</a>
                                    </li>
                                  );
                                })}
                            </ul>{" "}
                            <ul className="h-full pt-2 ">
                              {elem.submenu
                                .slice(6, 12)
                                .map((brand, brandIdx) => {
                                  return (
                                    <li
                                      className="hover:text-blue-700 w-full relative flex justify-between h-[36px]  items-center  hover:bg-[#F5F5F5]"
                                      key={`${brand.id}-${brandIdx}`}
                                    >
                                      <a href="">{brand.name_fa}</a>
                                      <a href="">{brand.name_en}</a>
                                    </li>
                                  );
                                })}
                            </ul>{" "}
                            <ul className="h-full pt-2">
                              {elem.submenu
                                .slice(12, 18)
                                .map((brand, brandIdx) => {
                                  return (
                                    <li
                                      className="hover:text-blue-700 w-full relative flex justify-between h-[36px]  items-center  hover:bg-[#F5F5F5]"
                                      key={`${brand.id}-${brandIdx}`}
                                    >
                                      <a href="">{brand.name_fa}</a>
                                      <a href="">{brand.name_en}</a>
                                    </li>
                                  );
                                })}
                            </ul>{" "}
                            <ul className="h-full pt-2">
                              {elem.submenu
                                .slice(18, 24)
                                .map((brand, brandIdx) => {
                                  return (
                                    <li
                                      className="hover:text-blue-700 w-full relative flex justify-between h-[36px]  items-center  hover:bg-[#F5F5F5]"
                                      key={`${brand.id}-${brandIdx}`}
                                    >
                                      <a href="">{brand.name_fa}</a>
                                      <a href="">{brand.name_en}</a>
                                    </li>
                                  );
                                })}
                            </ul>{" "}
                            <ul className="h-full pl-0.5 pt-2">
                              {elem.submenu
                                .slice(24, 30)
                                .map((brand, brandIdx) => {
                                  return (
                                    <li
                                      className="hover:text-blue-700 w-full relative flex justify-between h-[36px]  items-center  hover:bg-[#F5F5F5]"
                                      key={`${brand.id}-${brandIdx}`}
                                    >
                                      <a href="">{brand.name_fa}</a>
                                      <a href="">{brand.name_en}</a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                          <div className="flex items-center justify-between pt-1 h-[14%] ">
                            <a
                              className="hover:text-blue-600 text-[12px] text-red-600 "
                              href=""
                            >
                              مشاهده دیگر برندها{" "}
                            </a>
                          </div>
                        </div>
                      </li>
                    );
                  } else {
                    /**sayer */
                    return (
                      <li
                        className="hover:text-red-500 p-3 relative group cursor-pointer hover:underline hover:decoration-solid hover:decoration-[3px] hover:underline-offset-[17px]"
                        key={`${elem.id}-${idx}`}
                      >
                        <a href={elem.link}>{elem.name}</a>
                        <ul className="absolute w-[330px] bg-white flex-col h-fit z-50 top-full pt-4 text-black group-hover:flex hidden rounded-bl-[8px] border-1 border-[#e2e8f0] rounded-br-[8px] ">
                          {elem.submenu.map((item, itemIdx) => {
                            if (item.submenuu.length > 0) {
                              return (
                                <li
                                  className="hover:text-blue-700 w-full relative group/sub h-[42px] flex pr-2 items-center justify-start hover:bg-[#F5F5F5]"
                                  key={`${item.id}-${itemIdx}`}
                                >
                                  <a href={item.link}>
                                    {item.name} {" > "}
                                  </a>
                                  <ul className="h-fit w-[330px] bg-white absolute hidden group-hover/sub:flex flex-col z-50 text-black rounded-tl-[8px] rounded-bl-[8px] border-1 border-[#e2e8f0]  top-0 right-full">
                                    {item.submenuu.map((e, eIdx) => (
                                      <li
                                        key={`${e.id}-${eIdx}`}
                                        className="hover:text-blue-700 w-full relative h-[42px] flex pr-2 items-center justify-start hover:bg-[#F5F5F5]"
                                      >
                                        <a href={e.link}>{e.name}</a>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              );
                            } else {
                              return (
                                <li
                                  key={`${item.id}-${itemIdx}`}
                                  className="hover:text-blue-700 w-full relative h-[42px] flex pr-2 items-center justify-start hover:bg-[#F5F5F5]"
                                >
                                  <a href={item.link}>{item.name}</a>
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </li>
                    );
                  }
                } else {
                  return (
                    /**khane */
                    <li key={`${elem.id}-${idx}`}>
                      <a
                        href={elem.link}
                        className="hover:text-red-500 p-3 cursor-pointer hover:underline hover:decoration-solid hover:decoration-[3px] hover:underline-offset-[17px] "
                      >
                        {elem.name}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
      {/**mobile header */}
      <div
        id="mobile-header"
        className="w-full flex lg:hidden h-[60px] justify-between items-center fixed z-[60] py-4 px-3 bg-[#D7D7D7] "
      >
        <div className="flex h-full gap-4 w-[11%]  ">
          <button onClick={() => setShowDiv(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <img src={Image} className="object-cover" alt="" />
        </div>
        <div className="flex h-full gap-4 w-auto justify-center items-center text-[#696969] ">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="currentColor"
              strokeWidth={2}
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l1.6 9.6c.16.95.98 1.64 1.95 1.64h8.9c.95 0 1.77-.68 1.95-1.61L21 7H7"
            />
            <circle cx="9.5" cy="19" r="1.7" fill="currentColor" />
            <circle cx="17.5" cy="19" r="1.7" fill="currentColor" />
          </svg>
        </div>
      </div>
 <div
  ref={divRef} /** scroll dar */
  className={`${
    showDiv ? "flex" : "hidden"
  } h-screen fixed flex-col right-0 top-0 bg-white z-[80] transition-all duration-300`}
  style={{
    // وقتی صفحه بزرگه حدود 30%، هرچی کوچیک‌تر بشه تا حداکثر 100% می‌ره بالا
    width: "clamp(300px, 30vw, 100%)",
  }}
>
  {/* لوگو */}
  <a href="" className="p-4 border-b border-black w-full flex-shrink-0">
    <img src={Image} className="h-24 mx-auto py-4" alt="" />
  </a>

  {/* منو */}
  <div className="flex w-full h-[50px] border-b border-black flex-shrink-0">
    <div className="flex flex-1 mx-auto">
      <div className="flex w-full justify-between items-center h-full">
        <a href="" className="px-2 text-xs text-gray-light hover-black">
          خانه
        </a>
        <a href="" className="px-2 text-xs text-gray-light hover-black">
          درباره ما
        </a>
        <a href="" className="px-2 text-xs text-gray-light hover-black">
          تماس با ما
        </a>
        <a href="" className="px-2 text-xs text-gray-light hover-black">
          بلاگ
        </a>
      </div>
    </div>
  </div>

  {/* بخش اصلی */}
  <div className="flex-1 w-full overflow-auto mt-4 mb-16">
    <div className="flex flex-col">
      {posts
        .filter((item) => item.name !== "خانه") // حذف خانه
        .map((elem, idx) => (
          <a
            key={`${elem.id}-${idx}`}
            href={elem.link}
            className="p-4 border-b border-gray-300 hover:bg-gray-200"
          >
            {elem.name}
          </a>
        ))}
    </div>
  </div>

  <a
    href=""
    className="mb-14 text-white mx-4 bg-[#0A295A] rounded-xl text-center text-sm p-3 "
  >
    ورود به باشگاه مشتریان
  </a>
</div>


    </>
  );
};

export default Header;
