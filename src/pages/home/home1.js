import { El } from "../../el/el";
import { router } from "../../routes/router";

export default function Home() {
  const home1 = () => {
    //   setTimeout(() => {
    //     router.navigate("/page2");
    //   }, 8000);
    return El({
      element: "div",
      id: "loading",
      className:
        "bg-[#fcfcfc] w-[428PX] h-[926PX] flex flex-col justify-between items-center relative",
      children: [
        El({
          element: "div",
          className:
            "flex gap-[122px] w-[428PX] h-[80PX] px-[24px] py-[16px] flex-col",
          children: [
            El({
              element: "div",
              className: "flex gap-[16px] ",
              children: [
                El({
                  element: "img",
                  className: "bg-black rounded-full w-[48px] h-[48px]",
                  src: "../../../src/images/assets/1-1.png",
                }),
                El({
                  element: "div",
                  className: "flex flex-col",
                  children: [
                    El({
                      element: "p",
                      className: "text-[#757475]",
                      children: ["Good Morning 👋"],
                    }),
                    El({
                      element: "p",
                      className: "text-[#152536]",
                      children: ["Saeed Abdilar"],
                    }),
                  ],
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex gap-[16px]",
              children: [
                El({
                  element: "div",
                  className: "w-[210px] h-[220px] bg-white",
                  src: "../../../src/images/assets/Vector.png",
                }),
                El({
                  element: "div",
                  className: "w-[24px] h-[24px]",
                  src: "../../../src/images/assets/heart.png",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };

  // export default home1;

  return Layout(home);
}
