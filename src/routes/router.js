import Navigo from "navigo";

//import onboarding
import header from "../pages/onboarding/page1";
import page2 from "../pages/onboarding/page2";
import page3 from "../pages/onboarding/page3";
import page4 from "../pages/onboarding/page4";
import page5 from "../pages/onboarding/page5";

//import loading
import login from "../pages/login/login";

//import home
import home from "../pages/home/home";

export const router = new Navigo("/");

const changeContents = (target) => {
  const root = document.getElementById("rootsEl");
  root.innerHTML = "";
  root.append(target());
};
const changeContents2 = (target, item) => {
  target(item).then((res) => {
  const root = document.getElementById("rootsEl");
  root.innerHTML = "";
  root.append(res);
  });
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
  })

  //router home
  .on("/home", () => {
    changeContents2(home);
  });
