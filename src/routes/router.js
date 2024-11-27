import Navigo from "navigo";

//import onboarding
import loadingPage from "../pages/onboarding/LoadingPage.js";
import onboardingPage2 from "../pages/onboarding/onboarding-page-2.js";
import onboardingPage3 from "../pages/onboarding/onboarding-page-3.js";
import onboardingPage4 from "../pages/onboarding/onboarding-page-4.js";
import onboardingPage5 from "../pages/onboarding/onboarding-page-5.js";
import productFilterByLogo from "../pages/filterByLogoProducts.js";
//import loading
import login from "../pages/login.js";

//import home
import home from "../pages/home.js";
import fe from "../Utils/findElements.js";
import fetchByTitle from "../pages/fetchByTitle.js";
import fetchCardByImage from "../api/fetchCardByImage.js";
import fetchCardDetail from "../pages/fetchCardDetail";
import payment from "../pages/payment.js";
import ordersPage from "../pages/Orders/orders-page.js";
import fetchCardFromBasket from "../pages/fetchFromBasket.js";
import checkout from "../pages/checkout/checkout.js";
import shippingAdressPage from "./../pages/checkout/shippingAdress";
import shippingTypePage from "./../pages/checkout/shippingType";
import checkoutBeforePay from "./../pages/checkout/checkout-before-pay";
import paymentMethodPage from "../pages/checkout/checkout-payment-method.js";
import MostPopularpage from "../pages/Mostpage.js";
import cardElementWishList from "../pages/WishList/cardElementWishList.js";
import searchPage from "../pages/search/searchPage.js";
import cardCompleredOrder from "../components/cardCompletedOrder.js";
import cardActiveOrder from "../components/cardActiveOrder.js";
import ordersCompletePage from "../pages/Orders/ordersCompletePage.js";

export const router = new Navigo("/");

const changeContents3 = (page, data) => {
  const root = fe("rootsEl");
  root.innerHTML = "";
  if (data) {
    root.append(page(data));
  }
  root.append(page());
};
const changeContents = (page, data) => {
  const root = fe("rootsEl");
  root.innerHTML = "";
  root.append(page(data));
};

const changeContents2 = (page, data) => {
  page(data).then((response) => {
    const root = document.getElementById("rootsEl");
    root.innerHTML = "";
    root.append(response);
  });
};

router
  //router onboarding
  .on("/", () => {
    changeContents(loadingPage);
  })

  .on("/page2", () => {
    changeContents(onboardingPage2);
  })

  .on("/page3", () => {
    changeContents(onboardingPage3);
  })

  .on("/page4", () => {
    changeContents(onboardingPage4);
  })

  .on("/page5", () => {
    changeContents(onboardingPage5);
  })

  //router login
  .on("/login", () => {
    changeContents(login);
  })

  //router home

  .on("/home", () => {
    changeContents(home);
  })
  .on("/home/:brand", (params) => {
    changeContents(home, params);
  })

  .on("/test/:brand", (params) => {
    changeContents(productFilterByLogo, params);
  })

  .on("filterbytitle/:brand", (params) => {
    changeContents(fetchByTitle, params);
  })
  .on("/card/:id", (params) => {
    changeContents(fetchCardDetail, params);
  })
  .on("/bag", () => {
    changeContents(payment);
  })
  .on("/user", () => {
    changeContents(login);
  })
  .on("/cart", () => {
    changeContents(ordersPage);
  })
  .on("/checkout", () => {
    changeContents(checkout);
  })
  .on("/shippingAdress", () => {
    changeContents(shippingAdressPage);
  })
  .on("/shippingType", () => {
    changeContents(shippingTypePage);
  })
  .on("/checkoutPay", () => {
    changeContents(checkoutBeforePay);
  })
  .on("/paymentMethod", () => {
    changeContents(paymentMethodPage);
  })
  .on("/wallet", () => {
    changeContents(paymentMethodPage);
  })
  .on("/MostPopularpage", () => {
    changeContents(MostPopularpage);
  })
  .on("/MostPopularpage/:brand", (params) => {
    changeContents(MostPopularpage, params);
  })
  .on("/cardElementWishList", () => {
    changeContents(cardElementWishList);
  })

  .on("/searchPage", () => {
    changeContents(searchPage);
  })

  .on("/cardActiveOrder", () => {
    changeContents(ordersPage);
  })
  .on("/completedOrders", () => {
    changeContents(ordersCompletePage);
  });
//test commit
