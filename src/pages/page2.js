import { El } from "../el/el";
import { router } from "../routes/router";

const page2 = () => {
    setTimeout(() => {
      router.navigate ("/page3");
    }, 8000);
  return El({
    element: "div",
    id: "welcome",
    className:
      "bg-[url('../../src/images/onboarding/back-ground-page-one.jpg')] z-10 w-[428px] h-[926px] flex flex-col justify-between items-center relative",
    children: [
      El({
        element: "img",
        className: " w-[741px] h-[926px] absolute top-0 left-0",
        src: "../../src/images/onboarding/gradiant.png",
      }),
      El({
        element: "div",
        className:
          "flex justify-start flex-col absolute bottom-[74px] w-[364px] gap-4 font-bold",
        children: [
          El({
            element: "p",
            className: "text-[40px] text-start",
            children: ["welcome to 👋"],
          }),
          El({
            element: "p",
            className: "text-7xl text-start",
            children: ["Shoea"],
          }),
          El({
            element: "p",
            className: "text-base text-start mt-2.5",
            children: [
              "The best sneakers & shoes e-commerse app of the century for your fashion needs!",
            ],
          }),
        ],
      }),
    ],
  });
};

export default page2;
