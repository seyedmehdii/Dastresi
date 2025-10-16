import Image from "../../assets/logo1.png";
import Image2 from "../../assets/instagram.png";
import Image3 from "../../assets/namad.png";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#F5F5F5]">
        {/* بخش تماس */}
        <div className="w-full bg-[#E2E2E2] text-[#75757E] text-[14px]">
  <div
    className="
      w-[92%] mx-auto h-full 
      flex flex-col lg:flex-row
      justify-start lg:justify-between
      items-start lg:items-center
      p-6 gap-y-4 lg:gap-4
      text-right
    "
  >
    {/* شماره تماس */}
    <div className="flex items-center justify-start w-full lg:w-auto">
      <span>021-33902646</span>
    </div>

    {/* ساعات کاری */}
    <div className="flex items-center justify-start w-full lg:w-auto">
      <span>
        شنبه تا چهارشنبه از ساعت 10 صبح الی ساعت 18 پنجشنبه‌ها از 10 صبح الی ساعت 16
      </span>
    </div>

    {/* آدرس */}
    <div className="flex items-center justify-start w-full lg:w-auto">
      <span>
        تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3 - فروشگاه بدیع
      </span>
    </div>

    {/* دکمه برو بالا */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        w-[96px] h-[44px]
        bg-white rounded-xl text-start pr-2
        cursor-pointer
        hidden xl:block
      "
    >
      برو بالا
    </button>
  </div>
</div>

        {/* بخش اصلی Footer */}
        <div className="w-[94%] mx-auto px-4 py-8 gap-8 flex flex-col lg:flex-row">
          {/* لوگو و شبکه اجتماعی */}
          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-[16%]">
            <img src={Image} alt="" className="w-[20%] object-contain" />
            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <p className="text-sm lg:text-base">با ما در ارتباط باشید:</p>
              <img src={Image2} alt="" />
            </div>
          </div>

          {/* توضیحات */}
          <div className="w-full lg:w-[50%] flex flex-col justify-start">
            <h1 className="text-[14px] md:text-[16px] lg:text-[20px] mb-2 lg:mb-4 text-right lg:text-right px-2 lg:px-0">
              با ما در ارتباط باشید:
            </h1>
            <p className="leading-6 md:leading-7 text-[#626262] text-[12px] md:text-[14px] lg:text-[16px] text-right lg:text-justify px-2 lg:px-0">
              فروشگاه دسترسی فعالیت خود را از سال 1389 به صورت فروش فیزیکی کالا
              در حوزه لوازم جانبی کامپیوتر و موبایل در تهران شروع کرد و از سال
              1398 از طریق پیج اینستاگرام وارد فروش آنلاین شد و به خاطر ارائه
              کالای اصلی و مشاوره‌های دقیق در بازه بسیار کوتاهی توانست اعتماد
              بسیاری از مشتریانش را جلب کند و سرانجام در سال 1399 فروش از طریق
              سایت را هم به فعالیت های خود اضافه کرد تا اینکه بتواند با بررسی
              دقیق کالاها انتخاب صحیح شما را به ارمغان آورد. و امروز دسترسی
              فعالیت خود را در زمینه آداپتور موبایل، کابل شارژ، پاوربانک، ساعت
              هوشمند، هندزفری و هدست، لوازم گیمینگ، باتری و شارژر، لوازم شبکه،
              تجهیزات ذخیره سازی، گیرنده دیجیتال و هزاران گجت جذاب ادامه می‌دهد.
            </p>
          </div>

          {/* دسترسی سریع */}
          <div className="w-full lg:w-[17%] flex flex-col mt-4 lg:mt-0">
            <h3 className="font-bold mb-4 text-right text-xl">دسترسی سریع</h3>
            <a href="#" className="mb-2 text-[#757575] text-sm">
              باشگاه مشتریان
            </a>
            <a href="#" className="mb-2 text-[#757575] text-sm">
              سوالات متداول
            </a>
            <a href="#" className="mb-2 text-[#757575] text-sm">
              بلاگ
            </a>
            <a href="#" className="mb-2 text-[#757575] text-sm">
              شرایط و قوانین
            </a>
            <a href="#" className="mb-2 text-[#757575] text-sm">
              ارتباط ما
            </a>
            <a href="#" className="mb-2 text-[#757575] text-sm">
              درباره ما
            </a>
          </div>

          {/* نماد */}
          <div className="w-full lg:w-[17%] flex-shrink-0 flex items-center justify-center mt-4 lg:mt-0">
            <img
              src={Image3}
              alt=""
              className="object-contain w-full h-auto max-w-[150px] lg:max-w-full"
            />
          </div>
        </div>

        {/* کپی رایت */}
        <div className="w-full bg-[#0A5ABD] text-white text-center text-sm py-3">
          تمامی حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی دسترسی می‌باشد.
        </div>
      </div>
    </>
  );
};

export default Footer;
