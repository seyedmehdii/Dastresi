import Image from "../../assets/icon2.png";
import Image1 from "../../assets/icon1.png";
import Image2 from "../../assets/icon3.png";
import Image3 from "../../assets/icon4.png";

const Why = () => {
  return (
    <>
      <div className="w-[94%] max-w-screen-xl h-auto hidden md:block mx-auto mb-8 p-4">
        <h3 className="mb-8 font-bold text-center text-[22px]">
          چرا دسترسی رو برای خرید انتخاب کنیم؟
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col h-full justify-center items-center p-4 bg-white rounded-lg">
            <img className="mb-2 w-16" src={Image} alt="" />
            <p className="text-center font-bold text-gray mb-2">
              مشاوره تخصصی برای خرید محصول
            </p>
            <p className="text-center text-sm text-black-87 leading-7">
              برای خرید هر محصول با تیم دسترسی در ارتباط باشید تا بهترین انتخاب
              رو انجام دهید.
            </p>
          </div>
          <div className="flex flex-col h-full justify-center items-center p-4 bg-white rounded-lg">
            <img className="mb-2 w-16" src={Image1} alt="" />
            <p className="text-center font-bold text-gray mb-2">
              قیمت مناسب با بالاترین کیفیت
            </p>
            <p className="text-center text-sm text-black-87 leading-7">
              گروه دسترسی در تلاش است که کالای با کیفیت را با مناسب‌ترین قیمت به
              دست شما برساند.
            </p>
          </div>
          <div className="flex flex-col h-full justify-center items-center p-4 bg-white rounded-lg">
            <img className="mb-2 w-16" src={Image2} alt="" />
            <p className="text-center font-bold text-gray mb-2">ارسال سریع</p>
            <p className="text-center text-sm text-black-87 leading-7">
              ارسال از طریق تیپاکس، پست پیشتاز و پیک موتوری (ویژه تهران) صورت می
              گیرد.
            </p>
          </div>
          <div className="flex flex-col h-full justify-center items-center p-4 bg-white rounded-lg">
            <img className="mb-2 w-16" src={Image3} alt="" />
            <p className="text-center font-bold text-gray mb-2">امکان خرید حضوری</p>
            <p className="text-center text-sm text-black-87 leading-7">
              مشتری گرامی جهت خرید حضوری می‌توانید به آدرس مندرج در پایین سایت
              مراجعه نمایید.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
