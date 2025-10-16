import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTakhfif } from "../../redux/Takhfif/TakhfifSlice";

const Takhfif = () => {
  const takhfif = useSelector((state) => state.takhfif.posts);
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    dispatch(fetchTakhfif());
  }, []);
  useEffect(() => {
    if (takhfif && takhfif.length > 0) {
      setTimeLeft(takhfif[0].timerHours * 3600 * 1000);
    }
  }, [takhfif]);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <>
      <div className="xl:w-[92%] w-full max-w-screen-xl mt-[35px] pb-6 xl:rounded-[8px] h-[700px] bg-[#CBCBCB] mx-auto ">
        <div className="py-4 h-[12%]">
          <div className="w-[92%] mx-auto h-full flex md:justify-between justify-center items-center ">
            <h1 className="text-2xl md:text-4xl text-[#6C6F72] ">
              <span className="text-rose-500 ">%</span>
              تخفیف‌های روزانه دسترسی
            </h1>
            <span className=" text-[#6C6F72] text-[22px] hidden md:block text-center ">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
        <div className=" w-[92%] h-[88%] flex-row mx-auto flex">
          <div className="w-[60%] hidden lg:flex gap-9 col-2 h-full ">
            {takhfif.slice(0, 2).map((elem, sliceidx) => {
              return (
                <div
                  key={`${elem.id}-${sliceidx}`}
                  className="p-4 flex flex-col bg-white cursor-pointer rounded-[8px] border-1 border-[#e2e8f0]  w-[45%] h-full "
                >
                  <div className="h-1/2 w-full ">
                    <img
                      src={elem.image}
                      alt={elem.alt}
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex w-full  flex-1 flex-col  ">
                    <h3 className="my-5 h-3/5 leading-8 break-words whitespace-normal">
                      {elem.title}
                    </h3>
                    <div className="flex flex-col gap-2 w-full h-2/5 pt-4 ">
                      <div className="flex flex-row gap-2 justify-between">
                        <span className="line-through text-[#8E8EAC]">
                          {elem.price}
                        </span>
                        <h1 className="text-red-600 text-[15px] ">
                          {elem.takhfif} <span>تومان تخفیف</span>
                        </h1>
                      </div>
                      <div className="flex flex-row items-center justify-end gap-1">
                        <h1 className="text-blue-700">
                          {elem.finalprice}
                          <span className="text-black text-[13px] ">تومان</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[40%] lg:flex flex-col gap-5 justify-between hidden h-full ">
            {takhfif.slice(2, 5).map((elem, itx) => {
              return (
                <div
                  key={`${elem.id}-${itx}`}
                  className="w-full flex flex-row cursor-pointer items-center gap-2 border-1 border-[#e2e8f0] h-1/3 bg-white rounded-[8px]"
                >
                  <div className="w-1/3 h-full  rounded-[8px] ">
                    <img
                      src={elem.image}
                      alt={elem.alt}
                      className="object-cover rounded h-full"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-between w-2/3 h-full gap-2 p-3 ">
                    <h3 className="leading-8 break-words whitespace-normal">
                      {elem.title}
                    </h3>
                    <div className=" w-full h-2/3 flex flex-col gap-2">
                      <div className="flex flex-row gap-2 justify-between  w-full h-1/3">
                        <h3 className="line-through text-[#9E9E9E]">
                          {elem.price}
                        </h3>
                        <h1 className="text-red-500 text-[15px]">
                          <span>{elem.takhfif}</span>
                          تومان تخفیف
                        </h1>
                      </div>
                      <div className="flex flex-row items-center justify-end gap-1 w-full h-2/3">
                        <h1 className="text-blue-600">
                          {elem.finalprice}
                          <span className="text-black text-[13px] ">تومان</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:hidden h-full gap-4 flex-col justify-between w-full flex">
            {/** mobile */}
            {takhfif.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className="rounded-xl flex flex-row items-center bg-white gap-2 w-full flex-1 overflow-hidden p-2"
                >
                  {/* تصویر */}
                  <div className="h-full w-1/5 flex-shrink-0">
                    <img
                      src={elem.image}
                      className="object-cover w-20 h-20 rounded-[8px]"
                      alt=""
                    />
                  </div>

                  {/* متن و قیمت‌ها */}
                  <div className="flex flex-col flex-1 justify-between gap-2 p-2">
                    {/* عنوان با محدودیت خط */}
                    <h3 className="text-sm leading-5 line-clamp-2 overflow-hidden">
                      {elem.title}
                    </h3>

                    {/* قیمت‌ها */}
                    <div className="flex flex-col gap-1 w-full min-h-[45px]">
                      <div className="flex justify-between flex-row gap-2 text-sm">
                        <h1 className="line-through text-gray-400">
                          {elem.price}
                        </h1>
                        <h1 className="text-red-500">
                          {elem.takhfif}
                          <span> تومان تخفیف</span>
                        </h1>
                      </div>
                      <div className="flex flex-row items-center justify-end gap-1 text-sm">
                        <h1 className="font-semibold text-blue-600">
                          {elem.finalprice}
                          <span className="text-black"> تومان</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Takhfif;
/** <div className="h-full w-1/5 bg-red-500 "></div>
              <div className="flex flex-col flex-1 justify-between gap-2 p-2 bg-green-700 ">
                <h3 className="text-sm leading-7  ">
                  ماساژور ULTRA-MINI پاورولوژی مدل Powerology SM011
                </h3>
                <div className="flex flex-col gap-2 bg-amber-400 w-full h-[50px] ">
                  <div className="flex justify-between flex-row gap-2">
                    <h1>gjgjgjg</h1>
                    <h1>gjgjgjg</h1>
                  </div>
                  <div className="flex flex-row items-center justify-end gap-1">
                    <h1>gjgjgjg</h1>
                  </div>
                </div>
              </div> */
