import React from "react";
//import { useNavigate } from "react-router-dom";
import HumburgerMenu from "./humburgermenu";
import {ContactUsModal} from "./ContactUsModal";
const Header = () => {
  //const navigate = useNavigate();

  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (window.scrollY < 20) {
  //       document.getElementById("nav").style.top = "0";
  //     } else document.getElementById("nav").style.top = "-5rem";
  //   };
  // },[]);
  return (
    <nav
        id="nav"
        className=" flex absolute top-0  z-10 w-full p-6 bg-stone-800 bg-opacity-70 h-[79px] lg:h-[100px] l:h-[141px] transition-[top] duration-300"
      >
        <div className="flex flex-row justify-between w-full pl-1 lg:pl-20">
          <div className="flex flex-row justify-start w-full">
            <div className="flex items-center">
              {/* <img src={logo} alt="logo"  className="cursor-pointer"  width={60} height={30} onClick={""}></img>                */}
              <a href='/' className="font-bold text-3xl tracking-tight text-white mr-2">
                LOGO
              </a>
            </div>
            <div className="hidden lg:flex">
              <a
                href="/"
                className="flex items-center px-4 py-2 text-white hover:text-red-600 ml-2 "
              >
                About
              </a>
              <a
                href="/"
                className="flex items-center px-4 py-2 text-white  hover:text-red-600 ml-2 "
              >
                Services
              </a>
              <a
                href="/"
                className="flex items-center px-4 py-2 text-white  hover:text-red-600 ml-2 "
              >
                Events
              </a>
              <a
                href="/"
                className="flex items-center px-4 py-2 text-white  hover:text-red-600 ml-2 "
              >
                Careeres
              </a>
            </div>
          </div>
          <div className="flex lg:hidden jutisfy-end gap-2">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="phone-alt"
              className="svg-inline--fa fa-phone-alt fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={30}
            >
              <path
                fill="white"
                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
              ></path>
            </svg>
            <HumburgerMenu />
          </div>
          <div className="hidden lg:flex flex-row xs:w-6/12 gap-5 justify-center items-center">
            <a href="https://seller.theinfiniteplaza.com">
              <button className=" w-[150px]  xxl:w-[216px] xxl:h-[48px] h-9 flex items-center justify-center border border-transparent hover:border-gray-200 text-white bg-[#ff0000] hover:bg-transparent rounded-md active:border-[#ff0000] active:text-[#ff0000]"
              >
                Become a Vendor
              </button>
            </a>
            <ContactUsModal/>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="user-circle"
              className="svg-inline--fa fa-user-circle fa-w-16 ml-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              width={30}
            >
              <path
                fill="red"
                d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
  );
};

export { Header };
