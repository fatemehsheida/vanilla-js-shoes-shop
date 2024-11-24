import onboardingPage4 from "../pages/onboarding-page-4.js";
import onboardingPage5 from "../pages/onboarding-page-5.js";
import login from "../pages/login.js";
import home from "../pages/home.js";
import getProduct from "../api/products.api.js";


// let welcome = fe("welcome");
// welcome.className = "w-full h-dvh";
// welcome.appendChild(login());
// welcome.appendChild(home());


let user={
    email:"Ftmsheida@gmail.com",
    password:"123456789"
};
localStorage.setItem('user',JSON.stringify(user));