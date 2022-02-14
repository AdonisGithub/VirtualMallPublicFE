import { userConstants } from '../_constants';
import axios from "axios";
import  {SuccessAlert, DefaultAlert} from "../components/common/ToastAlert";
import {ErrorAlert} from "../components/common/ToastAlert";
const API_URL = "https://theinfiniteplaza.com";
//const API_URL = "http://localhost:8080";


 export function register(registeruserdata, navigate) {
     return dispatch => {
         //console.log('sended data:', registeruserdata);
         axios.post(API_URL + "/api/auth/signup", registeruserdata)
            .then(res => { 
                    console.log('received data:', res.data);
                    SuccessAlert(res.data);
                    ///////wellcome email////////
                    axios.post(API_URL + "/api/wellcomeemail",{email:registeruserdata.email} )
                    .then(res => { 
                      console.log(res.data);
                      })
                    .catch(err =>{ 
                      console.log(err.response.data); 
                    });
                    DefaultAlert("Please Check your email!");
                    //////////////////////////////
                    dispatch({
                        type: userConstants.REGISTER_SUCCESS, 
                        payload: "success"
                    });
                    if(navigate) {
                        navigate('/login')
                    }
                }
            )
            .catch(error => {
                //console.log("received error data:", error.response.data)
                ErrorAlert(error.response.data);
                dispatch({
                    type: userConstants.REGISTER_FAILURE, 
                    payload: "error"
                });
            });
     };
 
 }

export function login(logindata, navigate) {
    return dispatch => {
        //console.log('sended data:', logindata);
        axios.post(API_URL + "/api/auth/signin", logindata)
           .then(res => { 
                   //console.log('received data:', res.data);
                   SuccessAlert("Login Success!");
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(res.data));
                   dispatch({
                       type: userConstants.LOGIN_SUCCESS, 
                       payload: res.data
                   });
                   if(navigate) {
                    navigate('/virtualmal')
                    }
               }
           )
           .catch(error => {
               //console.log("received error data:", error.response.data)
               ErrorAlert(error.response.data);
               dispatch({
                   type: userConstants.LOGIN_FAILURE, 
                   payload: "error"
               });
           });
    };

};
