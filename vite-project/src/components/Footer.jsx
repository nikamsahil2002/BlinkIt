import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsThreadsFill } from "react-icons/bs";
import Links from "./Links";
import appStore from "../assets/d61019073b700ca49d22.webp";
import googlePlay from "../assets/8ed033800ea38f24c4f0.webp";


const Footer = () => {
  return (
    <div>
      <Links />
      <footer className=" bg-gray-100 w-full h-[90px] flex items-center  gap-1">
        <div className="text-gray-500 pl-40">
            © All Rights Reserved 2026.
        </div>
          <div className="flex gap-5 pl-40">
            <p className=" text-[16px] text-[#434040] opacity-75 font-bold">
              Download App
            </p>
            <img src={appStore} className="w-[100px] h-[35px]"/>
            <img src={googlePlay} className="w-[100px] h-[35px]"/>
          </div>
          <div className="flex gap-7 pl-10">
            <FaFacebook className="w-[35px] h-[35px]"/>
            <BsTwitterX className="w-[35px] h-[35px]"/>
            <FaInstagram className="w-[35px] h-[35px]"/>
            <FaLinkedin className="w-[35px] h-[35px]"/>
            <BsThreadsFill className="w-[35px] h-[35px]"/>
          </div>
      </footer>
      <div>
        <p className=" text-md text-gray-500 p-4">
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and
          is not related, linked or interconnected in whatsoever manner or
          nature, to “GROFFR.COM” which is a real estate services business
          operated by “Redstone Consultancy Services Private Limited”.
        </p>
      </div>
    </div>
  );
}

export default Footer
