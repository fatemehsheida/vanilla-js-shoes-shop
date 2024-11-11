import { El } from "../el/el";
import { router } from "../routes/router";

const page5 = () => {
  return El({
    element: "div",
    className:
      "z-10 w-[428px] h-[926px] flex flex-col justify-between items-center relative",
    children: [
      El({
        element: "img",
        className: " h-[657px] absolute top-0",
        src: "../../src/images/onboarding/page5.jfif",
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
            children: ["Let’s fulfill your fashion needs with shoearight now!"],
          }),
          El({
            element: "div",
            className: "flex gap-1.5 absolute bottom-[119px]",
            children: [
              El({
                element: "img",
                src: "../../src/images/liner/liner.png",
              }),
              El({
                element: "img",
                src: "../../src/images/liner/liner.png",
              }),
              El({
                element: "img",
                src: "../../src/images/liner/bold-liner.png",
              }),
            ],
          }),
          El({
            element: "button",
            className:
              "w-[380px] h-[47px] rounded-[30px] bg-[#212529] absolute bottom-[32px]",
            children: "Get Startedt",
            // onclick: () => {
            // router().navigate("/page5");
            // },
          }),
        ],
      }),
    ],
  });
};

export default page5;
