import { El } from "../../el/el";
import { router } from "../../routes/router";

const login = () => {
    // setTimeout(() => {
    //   router.navigate("/home1");
    // }, 8000);
  return El({
    element: "div",
    id: "loading",
    className:
      "bg-[#fcfcfc] w-[428PX] h-[926PX] flex flex-col justify-center items-center text-center relative",
    children: [
      El({
        element: "img",
        className:
          " w-[32px] h-[32px] px-2 py-[9px] absolute top-[12px] left-[24px]",
        src: "../../../src/images/assets/back.png",
      }),
      El({
        element: "img",
        className: " w-[54px] h-[81px] absolute top-[132px]",
        src: "../../../src/images/logo/black-logo.png",
      }),
      El({
        element: "div",
        className: " w-[380px] text-center ",
        children: [
          El({
            element: "p",
            className:
              " w-[342px] h-[39px] ml-[17px] absolute top-[331px] text-black text-[32px] font-bold text-center",
            children: ["Login to Your Account"],
          }),
          El({
            element: "form",
            className:
              " w-[380px] h-[458px] mt-[48px] absolute top-[418px] flex flex-col gap-[21px]",
            children: [
              El({
                element: "input",
                className: "w-[380px] h-[45px] bg-gray-100 pl-10 rounded-[4px] dark:text-black",
                type: "email",
                name: "email-input",
                placeholder: "Email",
              }),
              El({
                element: "img",
                className: "w-[16px] h-[16px] fill-gray-400 absolute top-[16px] left-[10px] ",
                src: "../../../src/images/assets/email.svg",
              }),
              El({
                element: "input",
                className: "w-[380px] h-[45px] bg-gray-100 pl-10 rounded-[4px] dark:text-black",
                type: "password",
                name: "password-input",
                placeholder: "Password",
              }),
              El({
                element: "img",
                className: "w-[16px] h-[16px] absolute top-[81px] left-[11px] ",
                src: "../../../src/images/assets/lock.svg",
              }),
              El({
                element: "img",
                className: "w-[14px] h-[14px] absolute top-[81px] right-[18px]",
                src: "../../../src/images/assets/eye-slash.svg",
              }),
              El({
                element: "div",
                className: "flex gap-[8px] mt-[34px] mx-[auto] text-center justify-center ",
                children: [
                  El({
                    element: "input",
                    className: "accent-gray-900 cursor-pointer ",
                    type: "checkbox",
                  }),
                  El({
                    element: "p",
                    className: "text-black font-bold",
                    children: ["Remember me"],
                  }),
                ],
              }),
              El({
                element: "button",
                className: "bg-[#212529] text-white w-[380px] h-[47px] rounded-[30px] font-bold absolute bottom-[32px]",
                type: "submit",
                children: "Sing in",
                onclick: () => {
                  router.navigate("/home1");
                  },
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default login;
