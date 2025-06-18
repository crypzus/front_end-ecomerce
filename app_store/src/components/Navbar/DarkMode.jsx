import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = React.useState(storedTheme || "light");

  React.useEffect(() => {
    const element = document.documentElement; //elemento de html
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className=" relative">
      <img
        src={theme === "light" ? LightButton : DarkButton}
        alt={`boton ${theme}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
