import { El } from "../../utils/el";
import { router } from "../../utils/router";

const page3 = () => {
  return El({
    element: "div",
    className:
      "z-10 w-[428px] h-[926px] flex flex-col justify-between items-center relative",
    children: [
      El({
        element: "img",
        className: " h-[657px] absolute top-0",
        src: "../../../src/images/onboarding/page3.jfif",
      }),
      El({
        element: "div",
        className:
          "bg-[#fcfcfc] h-[324px] absolute bottom-0 flex flex-col items-center",
        children: [
          El({
            element: "p",
            className:
              "text-[32px] text-black font-bold mt-8 ml-[24px] mr-[24px]",
            children: ["We provide high quality products just for you"],
          }),
          El({
            element: "div",
            className: "flex gap-1.5 absolute bottom-[119px]",
            children: [
              El({
                element: "img",
                src: "../../../src/images/liner/bold-liner.png",
              }),
              El({
                element: "img",
                src: "../../../src/images/liner/liner.png",
              }),
              El({
                element: "img",
                src: "../../../src/images/liner/liner.png",
              }),
            ],
          }),
          El({
            element: "button",
            className:
              "w-[380px] h-[47px] rounded-[30px] bg-[#212529] absolute bottom-[32px]",
            children: "Next",
            onclick: () => {
              router.navigate("/page4");
            },
          }),
        ],
      }),
    ],
  });
};

export default page3;
