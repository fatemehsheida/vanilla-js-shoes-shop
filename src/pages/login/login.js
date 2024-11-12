import { El } from "../../el/el";
import { router } from "../../routes/router";

const login = () => {
  //   setTimeout(() => {
  //     router.navigate("/page2");
  //   }, 8000);
  return El({
    element: "div",
    id: "loading",
    className:
      "bg-[#fcfcfc] w-[428PX] h-[926PX] flex flex-col justify-between items-center text-center relative",
    children: [
      El({
        element: "img",
        className:
          " w-[32px] h-[32px] px-2 py-[9px] absolute top-[12px] left-[24px]",
        src: "../../../src/images/assets/back.png",
      }),
      El({
        element: "img",
        className:
          " w-[54px] h-[81px] absolute top-[132px]",
        src: "../../../src/images/logo/black-logo.png",
      }),
      El({
        element: "div",
        className: " w-[380px] text-center ",
        children: [
          El({
            element: "p",
            className:
              " w-[342px] h-[39px] absolute top-[331px] text-black text-[32px] font-bold",
            children: ["Login to Your Account"],
          }),
          El({
            element: "form",
            className:
              " w-[380px] mt-[48px] absolute top-[418px] flex flex-col gap-[21px] ",
            children: [
              El({
                element: "input",
                className: "w-[380px] h-[37px]",
                type: "email",
                name: "email-input",
                placeholder: "Email",
              }),
              El({
                element: "img",
                className: "w-[16px] h-[16px]",
                src: "../../../src/images/assets/email.svg",
              }),
              El({
                element: "input",
                className: "w-[380px] h-[37px]",
                type: "password",
                name: "password-input",
                placeholder: "Password",
              }),
              El({
                element: "img",
                className: "w-[16px] h-[16px]",
                src: "../../../src/images/assets/lock.svg",
              }),
              El({
                element: "img",
                className: "w-[14px] h-[14px]",
                src: "../../../src/images/assets/eye-slash.svg",
              }),
              El({
                element: "input",
                className: "",
                type: "checkbox",
              }),
             El({
                element: "p",
                className: "text-black ",
                children: ["Remember me"],
              }),
              El({
                element: "button",
                className: "text-black ",
                type: "submit",
                children: "Sing in"
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default login;
