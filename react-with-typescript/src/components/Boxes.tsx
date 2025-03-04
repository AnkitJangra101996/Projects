import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Boxes = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      {theme}
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Boxes;
