import onboardingPage4 from "../pages/onboarding-page-4.js";
import onboardingPage5 from "../pages/onboarding-page-5.js";
import login from "../pages/login.js";
import home from "../pages/home.js";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> feature/onboarding
import fetchAllProducts from "../pages/fetchAllProducts.js";
import getProduct from "../api/products.api.js";
import fetchAllLogo from "../pages/fetchLogo.js";
import searchInput from "../components/searchInput.js";
import most from "../pages/homeMostNav.js";
import footer from "../pages/footer.js";
import home from "../pages/home.js";
<<<<<<< HEAD
=======
import getProduct from "../api/products.api.js";
>>>>>>> feature/login


let welcome = fe("welcome");
welcome.className = "w-full h-dvh";
<<<<<<< HEAD
=======
welcome.appendChild(login());
>>>>>>> feature/login
welcome.appendChild(home());
=======


import fetchAdiddasProducts from "../pages/fetchAdiddasProducts.js";
import {App} from "../App.js";
import { router } from "./../routes/router.js";
const root = fe("app");
root.className="w-full h-screen";
root.appendChild(App());
router.resolve();
// let welcome = fe("app");
// welcome.className = "w-full h-dvh";
// welcome.appendChild(home());
>>>>>>> feature/onboarding
