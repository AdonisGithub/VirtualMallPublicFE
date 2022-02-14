import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Spin as Hamburger } from "hamburger-react";

export default function HumburgerMenu() {

  return (
    <div className="text-right  flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button
                className=""
              >
                <Hamburger
                  size={30}
                  duration={0.8}
                  color="red"
                  toggled={open}
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-[calc(100vw-45px)] md:w-56 mt-2 origin-top-right shadow-lg ring-1 ring-black ring-opacity-5 ">
                <div className="px-[1px] py-[1px] ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-white text-red-600"
                            : "bg-red-600 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        About
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-white text-red-600"
                            : "bg-red-600 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        Events
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-white text-red-600"
                            : "bg-red-600 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        Careers
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-white text-red-600"
                            : "bg-red-600 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        Services
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-white text-red-600"
                            : "bg-red-600 text-white "
                        } flex items-center w-full px-2 py-2 text-sm`}
                      >
                        Shop
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
