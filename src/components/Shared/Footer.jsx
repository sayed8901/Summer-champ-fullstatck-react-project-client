import logo from "../../assets/logo.jpg";

const Footer = () => {
  
  return (
    <footer
      className={`glass sticky top-[100vh] p-4`}
    >
      <div
        className={`grid grid-cols-3 items-center justify-between gap-6 sm:gap-12 text-center`}
      >
        <div className="items-center">
          <p className="mx-auto text-sm">
            <b>Copyright © Summer Champs School.</b>
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 sm:gap-4">
          <img className="h-12 p-1 rounded-xl" src={logo} alt="" />
          <div>
            <div className="mx-auto normal-case text-base md:text-2xl xl:text-3xl font-bold text-gradient">
              Summer Champs
            </div>
          </div>
        </div>

        <div className="items-center">
          <p className="mx-auto text-sm">
            All right reserved @ Sayed-2023-2024.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
