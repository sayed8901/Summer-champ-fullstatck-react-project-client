import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggler = ({ toggleMode, isDarkMode }) => {
  return (
    <button className="btn btn-sm glass capitalize" onClick={toggleMode}>
      {isDarkMode ? <MdDarkMode size={24} /> : <MdOutlineDarkMode size={24} />}
    </button>
  );
};

export default ThemeToggler;