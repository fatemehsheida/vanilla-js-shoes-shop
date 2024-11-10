import { El } from "../el/el";
import { router } from "../routes/router";

const page2 = () => {
  // setTimeout(() => {
  // router.navigate("/welcome");
  // // console.log("settimeout");
  // }, 3000);
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
        className: "mt-[200px]",
        children: [
          El({
            element: "p",
            className: "",
            children: ["welcome to 👋"],
          }),
          El({
            element: "p",
            className: "",
            children: ["Shoea"],
          }),
          El({
            element: "p",
            className: "",
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
