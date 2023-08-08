import { createContext, useState } from "react";


export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const themeClassName = isDarkMode ? "dark" : "light";

    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };

  return (
    <ThemeContext.Provider
      value={{ themeClassName, toggleMode, isDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
