import { Provider } from "react-redux";
import store from "../../redux/store";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import Takhfif from "../Takhfif/Takhfif";
import Category from "../Category/Category";
import Now from "../Now/Now";
import Why from "../Why/Why";
import Bestsell from "../Bestsell/Bestsell";
import Popular from "../Popular/Popular";
import Article from "../Article/Article";
import Footer from "../Footer/Footer";

const App = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const desktopHeader = document.getElementById("site-header");
    const mobileHeader = document.getElementById("mobile-header"); // باید id بدی به div موبایل

    const updatePadding = () => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches; // lg breakpoint
      if (isDesktop && desktopHeader) {
        setHeaderHeight(desktopHeader.offsetHeight);
      } else if (!isDesktop && mobileHeader) {
        setHeaderHeight(mobileHeader.offsetHeight);
      } else {
        setHeaderHeight(0);
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  return (
    <Provider store={store}>
      <>
        <Header />
        <main
          style={{ paddingTop: headerHeight }}
          className="bg-[#FAFAFA] w-full h-fit"
        >
          <Slider />
          <Takhfif />
          <Category />
          <Now />
          <Why />
          <Bestsell />
          <Popular />
          <Article />
          <Footer />
        </main>
      </>
    </Provider>
  );
};

export default App;
