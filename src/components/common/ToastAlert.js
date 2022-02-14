import { store } from "react-notifications-component";


export const ErrorAlert = (message) => {
  store.addNotification({
    title: "ERROR",
    message: message,
    type: "danger",
    insert: "top",
    container: "top-right",
    showicon:true,
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true
    }
  });
};
export const SuccessAlert = (message) => {
  store.addNotification({
    title: "SUCCESS",
    message: message,
    type: "success",
    insert: "top",
    container: "top-right",
    showicon:true,
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true
    }
  });
};
export const WarningAlert = (message) => {
  store.addNotification({
    title: "WARNING",
    message: message,
    type: "warning",
    insert: "top",
    container: "top-right",
    showicon:true,
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true
    }
  });
};
export const DefaultAlert = (message) => {
  store.addNotification({
    title:"",
    message: message,
    type: "default",
    insert: "top",
    container: "top-right",
    showicon:true,
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true
    }
  });
};