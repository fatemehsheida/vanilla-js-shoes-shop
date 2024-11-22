<<<<<<< HEAD
<<<<<<< HEAD
import "./src/index.css";
import { App } from "../App.js";
import { router } from "./../routes/router.js";

const root = fe("app");
root.className = "w-full h-screen";
root.appendChild(App());
router.resolve();
=======
=======
>>>>>>> feature/onboarding
import { ce } from "../Utils/create-element.js";
import fe from "../Utils/findElements.js";
import layout from "../layout/welcome/layout.js";
import wel1 from "../pages/onboarding-page-1.js";
import wel2 from "../pages/onboarding-page-2.js";
<<<<<<< HEAD
import onboardingPage3 from "../pages/onboarding-page-3.js";
import onboardingPage4 from "../pages/onboarding-page-4.js";
import onboardingPage5 from "../pages/onboarding-page-5.js";
import loadingPage from "../pages/LoadingPage.js";
import onboardingPage2 from "../pages/onboarding-page-2.js";

import login from "../pages/login.js";
let welcome = fe("welcome");
welcome.className = "w-full h-dvh";
welcome.appendChild(login());
>>>>>>> feature/login
=======
import login from "../pages/login.js";
import onboardingPage3 from "../pages/onboarding-page-3.js";
import onboardingPage4 from "../pages/onboarding-page-4.js";
import onboardingPage5 from "../pages/onboarding-page-5.js";

let welcome = fe("welcome");
welcome.className = "w-full h-dvh";
welcome.appendChild(onboardingPage5());
>>>>>>> feature/onboarding
