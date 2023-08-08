// icons
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";


const SocialLinks = () => {
    return (
        <div className="flex text-[25px] justify-between max-w-xs mx-auto md:mx-0"
          >
            <a
              href="https://www.linkedin.com/in/md-sayed-hossain-24297315a"
              rel="noreferrer"
              target="_blank"
              className="hover:scale-150 duration-200"
            >
              <BsLinkedin />
            </a>
            <a
              href="http://github.com/sayed8901"
              rel="noreferrer"
              target="_blank"
              className="hover:scale-150 duration-200"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100010385951866"
              rel="noreferrer"
              target="_blank"
              className="hover:scale-150 duration-200"
            >
              <BsFacebook />
            </a>
            <a
              href="mailto: sayed91515@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="hover:scale-150 duration-200"
            >
              <HiOutlineMail />
            </a>
          </div>
    );
};

export default SocialLinks;