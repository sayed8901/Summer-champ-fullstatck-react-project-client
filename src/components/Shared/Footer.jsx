import logo from "../../assets/logo.jpg";

const Footer = () => {
  
  return (
    // <footer
    //   className={`grid grid-cols-3 items-center justify-between gap-6 sm:gap-12 text-center bg-base-100 sticky top-[100vh] pb-4`}
    // >
    //   <div>
    //     <div className="items-center">
    //       <div className="flex items-center justify-center mx-auto">
    //         <img className="w-20" src={logo} alt="" />
    //         <div>
    //           <div className="mx-auto normal-case text-base md:text-2xl xl:text-3xl font-bold text-gradient">
    //             Summer Champ
    //           </div>
    //         </div>
    //       </div>
    //       <p className="mx-auto text-sm">
    //         <b>Copyright © Summer Champ School.</b>
    //         <br /> All right reserved @ Sayed-2023.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="items-center">
    //     <p className="footer-title mx-auto mb-2">Find us at</p>
    //     <div className="text-center text-sm sm:text-base lg:text-xl">
    //       <b>29, West Panthapath, Dhaka</b> <br />
    //     </div>
    //   </div>

    //   <div className="items-center">
    //     <p className="footer-title mx-auto mb-2">Contact Us</p>
    //     <div className="text-center text-sm sm:text-base lg:text-xl">
    //       <p>sayed@mssbd.org</p>
    //       <p>01730024046</p>
    //     </div>
    //   </div>
    // </footer>
    <footer
      className={`grid grid-cols-3 items-center justify-between gap-6 sm:gap-12 text-center glass rounded-md sticky top-[100vh]`}
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
        <p className="mx-auto text-sm">All right reserved @ Sayed-2023-2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
