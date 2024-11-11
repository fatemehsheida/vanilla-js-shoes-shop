import Navigo from "navigo";
import header from "../pages/page1";
import page2 from "../pages/page2";
import page3 from "../pages/page3";
import page4 from "../pages/page4";
export const router = new Navigo("/");

const changeContents = (target) => {
  const root = document.getElementById("rootsEl");
  root.innerHTML = "";
  root.append(target());
};

router
  .on("/", () => {
    changeContents(header);
  })

  .on("/page2", () => {
    changeContents(page2);
  })

  .on("/page3", () => {
    changeContents(page3);
  })

  .on("/page4", () => {
    changeContents(page4);
  });