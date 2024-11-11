import { El } from "../el/el";
import { router } from "../routes/router";

const header = () => {
  setTimeout(() => {
    router.navigate("/page2");
  }, 8000);
  return El({
    element: "div",
    id: "loading",
    className:
      "bg-[#fcfcfc] w-[428PX] h-[926PX] flex flex-col justify-between items-center relative",
    children: [
      El({
        element: "img",
        id: "img-loading",
        className:
          " w-[59px] h-[60px] rounded-full pt-[8.75px] pl-[16.96px] pr-[15.49px] pb-[10.31px] bg-black absolute top-[394px] bottom-[473px] right-[270px] left-[99px]",
        src: "../../src/images/onboarding/logo.png",
        // onclick: () => {
        // Router().navigate("/welcome");
        // },
      }),
      El({
        element: "img",
        id: "img-loading",
        className:
          " w-[157px] h-[60px] absolute top-[392px] bottom-[471px] right-[98px] left-[170px]",
        src: "../../src/images/onboarding/Shoea.png",
      }),
      El({
        element: "img",
        id: "img-loading",
        className:
          "w-[49px] h-[49px] absolute top-[761px] bottom-[117px] right-[190px] left-[190px]",
        src: "../../src/images/onboarding/spinner-atom.png",
      }),
    ],
  });
};

export default header;
