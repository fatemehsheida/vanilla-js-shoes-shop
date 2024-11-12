import Navigo from "navigo";

//import onboarding
import header from "../pages/onboarding/page1";
import page2 from "../pages/onboarding/page2";
import page3 from "../pages/onboarding/page3";
import page4 from "../pages/onboarding/page4";
import page5 from "../pages/onboarding/page5";

//import loading
import login from "../pages/login/login";


export const router = new Navigo("/");

const changeContents = (target) => {
  const root = document.getElementById("rootsEl");
  root.innerHTML = "";
  root.append(target());
};

router
//router onboarding
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
  })

  .on("/page5", () => {
    changeContents(page5);
  })


  //router login
  .on("/login", () => {
    changeContents(login);
  });