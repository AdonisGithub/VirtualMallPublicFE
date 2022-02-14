import React, { useState} from "react";
import { useDispatch} from "react-redux";
import * as Actions from "../../_actions";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {WarningAlert} from "../../components/common/ToastAlert";
import { useNavigate } from "react-router-dom";
import validator from 'validator'


const SignupPage = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
	const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  //const registering = useSelector((state) => state.registration.registerstate);
  //console.log("registering-", registering);
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if(user.password !== user.passwordConfirm) WarningAlert("Match Password and Confirm Password!");
    else
    if(user.fullName && user.lastName && user.userName && validator.isEmail(user.email) && user.password && phoneNumber){
      const registeruserdata = {
        fullName: user.fullName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        password: user.password,
        phoneNumber: phoneNumber,
      };
      dispatch(Actions.register(registeruserdata, navigate));
    }
  };
  return (
    <div className=" background_login min-h-screen">
      <div className=" bg-[#1B0C4B] bg-opacity-80">
        <div className="min-h-screen  flex opacity-100">
          <div className="absolute md:mt-[43px] ml-[45%] md:ml-[130px] xl:ml-[159px]">
            <a href='/' className="hidden md:flex font-bold text-3xl tracking-tight text-white">
              LOGO
            </a>
          </div>
          <div className="flex w-full md:w-1/2 justify-center items-center mt-[95px] mx-16">
            <div className="w-full h-full flex items-center justify-center ">
              <div className="">
                <a href='/'className="flex md:hidden items-center justify-center mb-3  font-bold text-3xl tracking-tight text-white ">
                  LOGO
                </a>
                <h1 className="text-white  text-2xl mb-3 flex items-center justify-center">
                  Create An Account
                </h1>
                <div className="flex mb-3 lg:items-center justify-center">
                  <p className="text-white">Already an user?</p>&nbsp;&nbsp;
                  <a href="/login" className="text-red-600  hover:text-white active:text-red-600">
                    Sign in
                  </a>
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <div className="block lg:grid lg:grid-cols-2 lg:gap-3">
                    <div className="w-full">
                      <h1 className="text-white">Full Name </h1>
                      <input
                        className="border rounded-md py-1 px-1 mb-2 bg-transparent md:bg-white text-white md:text-black"
                        style={{ width: "inherit" }}
                        type="text"
                        name="fullName"
                        placeholder="Full Name*"
                        value={user.fullName}
                        onChange={handleChange}
                      />
                      {submitted && !user.fullName &&<div className="text-sm text-amber-600" >Full Name is required</div>}
                    </div>
                    <div className="w-full">
                      <h1 className="text-white">Last Name </h1>
                      <input
                        className="border rounded-md py-1 px-1 mb-2 bg-transparent md:bg-white text-white md:text-black"
                        style={{ width: "inherit" }}
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        value={user.lastName}
                        onChange={handleChange}
                      />
                      {submitted && !user.lastName &&<div className="text-sm text-amber-600" >Last Name is required</div>}
                    </div>
                  </div>
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white">Email Address </h1>
                  <input
                    className="border rounded-md py-1 px-1 mb-2  w-full bg-transparent md:bg-white text-white md:text-black"
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={user.email}
                    onChange={handleChange}
                  />
                  {submitted && !validator.isEmail(user.email) &&<div className="text-sm text-amber-600" >Validate Email is required</div>}
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white">User Name </h1>
                  <input
                    className="border rounded-md py-1 px-1 mb-2 w-full bg-transparent md:bg-white text-white md:text-black"
                    type="text"
                    name="userName"
                    placeholder="User Name*"
                    value={user.userName}
                    onChange={handleChange}
                  />
                  {submitted && !user.userName &&<div className="text-sm text-amber-600" >User Name is required</div>}
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
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white">Confirm Password </h1>
                  <input
                    className="border rounded-md py-1 px-1 mb-2 w-full bg-transparent md:bg-white text-white md:text-black"
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm Password*"
                    value={user.passwordConfirm}
                    onChange={handleChange}
                  />
                  {submitted && !user.passwordConfirm &&<div className="text-sm text-amber-600" >Password Confirm is required</div>}
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white">Phone Number</h1>
                  <PhoneInput
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: true
                    }}
                    inputStyle={{
                      width: "100%",
                      background: "transparent",
                      color: "white",
                    }}
                    dropdownStyle={{ height: "110px", width:'auto' }} 
                  />
                  {submitted && !phoneNumber &&<div className="text-sm text-amber-600" >phoneNumber is required</div>}
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <button
                    className=" flex w-full h-[34px] mt-5 mb-10 items-center justify-center text-white text-base border border-transparent hover:border-gray-200 bg-[#ff0000] hover:bg-transparent rounded-md active:border-[#ff0000] active:text-[#ff0000]"
                    onClick={handleRegister}
                  >
                    Sign Up
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

export { SignupPage };
