import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggler = ({ toggleMode, isDarkMode }) => {
  return (
    <div className="hover:cursor-pointer" onClick={toggleMode}>
      {isDarkMode ? (
        <MdDarkMode
          className="text-blue-500"
          size={40}
          title="Click to turn on light mode"
        />
      ) : (
        <MdOutlineDarkMode
          className="text-red-500"
          size={40}
          title="Click to turn on dark mode"
       />
      )}
    </div>
  );
};

export default ThemeToggler;