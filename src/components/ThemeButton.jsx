//redux
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../store/theme";
//icons
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => dispatch(setTheme("light"))}>
          <MdOutlineDarkMode size={25} />
        </button>
      ) : (
        <button onClick={() => dispatch(setTheme("dark"))}>
          <MdDarkMode size={25} />
        </button>
      )}
    </>
  );
};

export default ThemeButton;
