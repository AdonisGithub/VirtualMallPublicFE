import React, { useState} from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Actions from "../../_actions";
//import "react-phone-input-2/lib/style.css";
//import { Toast } from "../../components/common/ToastAlert";

const LoginPage = () => {
  const [user, setUser] = useState({
    NameOrEmail: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (user.NameOrEmail && user.password) {
      const logindata = {
        NameOrEmail: user.NameOrEmail,
        password: user.password,
      };
      dispatch(Actions.login(logindata, navigate));
    }
  };

  return (
    <div className="min-h-screen background_login">
      <div className="bg-[#1B0C4B] bg-opacity-80">
        <div className=" min-h-screen  flex opacity-100">
          <div className="absolute md:mt-[43px] ml-[45%] md:ml-[130px] xl:ml-[159px]">
            <a href='/' className="hidden md:flex font-bold text-3xl tracking-tight text-white">
              LOGO
            </a>
          </div>
          <div className="flex w-full md:w-1/2 justify-center items-center mx-16">
            <div className="w-full h-full flex items-center justify-center ">
              <div className="">
                <span className="flex md:hidden items-center justify-center mb-3  font-bold text-3xl tracking-tight text-white ">
                  LOGO
                </span>
                <h1 className="text-white  text-2xl mb-3 flex items-center justify-center">
                  Log in
                </h1>
                <div className="flex mb-8 items-center justify-center">
                  <p className="text-white">Not yet a member?</p>&nbsp;&nbsp;
                  <a href="/signup" className="text-red-600  hover:text-white active:text-red-600">
                    Sign Up
                  </a>
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white">Username or Email Address </h1>
                  <input
                    className="border rounded-md py-1 px-1 mb-2  w-full bg-transparent md:bg-white text-white md:text-black"
                    type="text"
                    name="NameOrEmail"
                    placeholder="Username or Email Address*"
                    value={user.NameOrEmail}
                    onChange={handleChange}
                  />
                  {submitted && !user.NameOrEmail &&<div className="text-sm text-amber-600" >Name or Email is required</div>}
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto ">
                  <h1 className="text-white">Password </h1>
                  <input
                    className="border rounded-md py-1 px-1 mb-2 w-full bg-transparent md:bg-white text-white md:text-black"
                    type="password"
                    name="password"
                    placeholder="Password*"
                    value={user.password}
                    onChange={handleChange}
                  />
                  {submitted && !user.password &&<div className="text-sm text-amber-600" >Password is required</div>}
                </div>
                <div className="flex mb-3 items-center justify-center">
                  <a href="/resetpasswordrequest1" className="text-red-600  hover:text-white active:text-red-600">
                    Forgot Password
                  </a>
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <button
                    className=" flex w-full h-[34px] mt-5 items-center justify-center text-white text-base border border-transparent hover:border-gray-200 bg-[#ff0000] hover:bg-transparent rounded-md active:border-[#ff0000] active:text-[#ff0000]"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:w-1/2 hidden justify-start items-center">
            <div className=" 2xl:w-[800px] 2xl:mr-[161px]">
              <div className="w-full text-white text-[54px] 2xl:text-[75px] leading-tight font-medium font-sans tracking-wide">
                Let Your Mind Explore A New World
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginPage };
