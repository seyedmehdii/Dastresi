import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/Theme/ThemeSlice";
import { useEffect } from "react";

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className=" btn btn-primary btn-md dark:bg-gray-800 top-0 left-0 text-black fixed z-50 dark:text-white rounded cursor-pointer"
    >
      {darkMode ? "☀️ روشن" : "🌙 تاریک"}
    </button>
  );
};

export default DarkModeToggle;
