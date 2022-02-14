import React  from "react";
import mail from "../../assets/images/mail.png";
import internet from "../../assets/images/internet1.jpg";
const Footer = () => {
  return (
    <div className=" bg-black">
        <div className="max-w-2xl h-[75px] lg:h-[120px] xxl:h-[157px] mx-auto text-white flex items-center justify-center py-3">
          <div className="text-center">
            <p className="text-lg "> Powered by Pro XR Solutions</p>
            <div className="text-lg mb-1 flex justify-center gap-2 max-w-full overflow-hidden">
              <div className="flex">
                <img src={internet} className="w-[15px] h-[17px] m-auto"alt="internet"/>&nbsp;<a href="https://proxrsolutions.com" className="hover:text-red-600 active:text-blue-600">proxrsolutions.com</a>
              </div>
              <div className="flex">
                <img src={mail} className="w-[15px] h-[17px] m-auto" alt="mail"/>&nbsp;<a href="https://proxrsolutions.com" className="hover:text-red-600 active:text-blue-600">proxrsolutions.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
      
export {Footer};