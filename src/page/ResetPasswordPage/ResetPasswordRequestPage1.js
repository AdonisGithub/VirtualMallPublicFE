
import React, { useState } from "react";
import validator from 'validator'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {DefaultAlert, ErrorAlert} from "../../components/common/ToastAlert";
const API_URL = "https://theinfiniteplaza.com";
//const API_URL = "http://localhost:8080";

const ResetPasswordRequestPage1 = () => {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const resetpasswordClick = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(email);
    if(validator.isEmail(email)){
      localStorage.setItem('ResendEmail', email); //*******Localstorage********/
      axios.post(API_URL + "/api/resetpasswordrequestemail",{email:email} )
      .then(res => { 
        console.log(res.data);
        })
      .catch(err =>{ 
        console.log(err.response.data);
        ErrorAlert(err.response.data);   
      });
      DefaultAlert("Please Check your email!");
      navigate("/resetpasswordrequest2");
    }
    
  };

  return (
    <div className="min-h-screen background2">
      <div className=" bg-[#1B0C4B] bg-opacity-80">
        <div className=" min-h-screen flex">
          <div className="absolute md:mt-[43px] ml-[45%] md:ml-[130px] xl:ml-[159px]">
              <a href='/'className="hidden md:flex font-bold text-3xl tracking-tight text-white">
                  LOGO
              </a>
          </div>
          <div>
              <a href="/signup" className="absolute hidden md:flex md:mt-[50px] md:ml-[38%] xl:ml-[33%] text-red-600  hover:text-white">
                    Sign Up
              </a>
          </div>
          <div className="flex w-full md:w-1/2 justify-center items-center mx-16">
            <div className="w-full h-full flex items-center justify-center ">
              <div className="">
                  <a href='/'className="flex md:hidden items-center justify-center mb-3  font-bold text-3xl tracking-tight text-white ">
                      LOGO
                  </a>
                  <h1 className="text-white  text-2xl mb-3 flex items-center justify-center">
                      Reset Password
                  </h1>
                  <a href="/signup" className="mb-3 flex items-center justify-center md:hidden text-red-600  hover:text-white active:text-red-600">
                    Sign Up
                  </a>
                <div className="flex mb-3 items-center justify-center">
                  <p className="text-red-600">
                    Please enter your email address
                  </p>
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <h1 className="text-white">Email Address </h1>
                  <input
                    className="border rounded-md py-1 px-1 mb-2  w-full bg-transparent md:bg-white text-white md:text-black"
                    type="text"
                    name="Email Address"
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  {submitted && !validator.isEmail(email) &&<div className="text-sm text-amber-600" >Validate Email is required</div>}
                </div>
                <div className="w-full 2xl:w-[369px] lg:w-[320px]  m-auto">
                  <button className=" flex w-full h-[34px] mt-5 items-center justify-center text-white text-base border border-transparent hover:border-gray-200 bg-[#ff0000] hover:bg-transparent rounded-md active:border-[#ff0000] active:text-[#ff0000]"
                    onClick={resetpasswordClick}
                  >
                    ResetPassword
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

export {ResetPasswordRequestPage1};
