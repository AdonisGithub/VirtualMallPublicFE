import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUsModal=() => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const navigate = useNavigate();
  const sendClick = () => {
    navigate("/");
  };

  return (
    <div className="flex">
      <button className=" w-[150px]  xxl:w-[216px] h-9 xxl:h-[48px]  flex items-center justify-center border border-transparent hover:border-gray-200 text-white bg-[#ff0000] hover:bg-transparent rounded-md active:border-[#ff0000] active:text-[#ff0000]"
        onClick={openModal}
      >
        Contact Us
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center flex items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-[#1b0c4b] opacity-50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex relative justify-center text-left align-middle transition-all transform bg-[#5b3866] rounded-md w-1/3 2xl:w-[525px] m-auto">
                <button className="absolute -top-[8px] -right-2 text-white w-[25px] bg-[#5b3866] rounded-sm drop-shadow-lg" onClick={closeModal}>x</button>
                <div className="relative w-8/12 mt-8 xl:mt-10 2xl:mt-16 mb-10 xl:mb-12 2xl:mb-16">
                  <div className="w-full text-2xl text-white text-center ">
                    Contact Us
                  </div>
                  <div className="w-full justify-center mt-6 2xl:mt-6">
                    <h1 className="text-white text-sm">Name </h1>
                    <input
                      className="border rounded-md py-1 px-1 mb-2 bg-transparent bg-white text-black"
                      style={{ width: "inherit" }}
                      type="text"
                      name="name"
                      placeholder="Name*"
                    />
                  </div>
                  <div className="w-full justify-center xl:mt-1 2xl:mt-2">
                    <h1 className="text-white text-sm">Company Name </h1>
                    <input
                      className="border rounded-md py-1 px-1 mb-2 bg-transparent bg-white text-black"
                      style={{ width: "inherit" }}
                      type="text"
                      name="companyname"
                      placeholder="Company Name*"
                    />
                  </div>
                  <div className="w-full justify-center xl:mt-1 2xl:mt-2">
                    <h1 className="text-white text-sm">Email Address </h1>
                    <input
                      className="border rounded-md py-1 px-1 mb-2 bg-transparent bg-white text-black"
                      style={{ width: "inherit" }}
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                    />
                  </div>
                  <div className="w-full justify-center xl:mt-1 2xl:mt-2">
                    <h1 className="text-white text-sm">Phone Number</h1>
                    <PhoneInput
                      inputStyle={{
                        width: "100%",
                        background: "white",
                        color: "black",
                      }}
                      dropdownStyle={{ height: "110px", width: "auto" }}
                    />
                  </div>
                  <div className="w-full justify-center mt-1 xl:mt-2 2xl:mt-3">
                    <h1 className="text-white text-sm">Message</h1>
                    <textarea
                      className="border rounded-md py-1 px-1 mb-2 bg-transparent bg-white text-black"
                      style={{ width: "inherit" }}
                      type="message"
                      name="message"
                      rows={3}
                      cols={40}
                      placeholder="Message*"
                    />
                  </div>
                  <div className="w-full justify-center mt-2 xl:mt-3 2xl:mt-4">
                    <button className=" flex w-full h-[34px] items-center justify-center text-white text-base border border-transparent hover:border-gray-200 bg-[#ff0000] hover:bg-transparent rounded-md active:border-[#ff0000] active:text-[#ff0000]"
                      onClick={sendClick}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export {ContactUsModal};