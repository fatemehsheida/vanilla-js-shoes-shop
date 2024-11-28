import { ce } from "../../Utils/create-element.js";
import searchInput from "../../components/home/searchInput.js";
import fetchAllLogo from "../home/fetchLogo.js";
import most from "../home/homeMostNav.js";
import fetchAllProducts from "../home/fetchAllProducts.js";
import searchItem from "../../components/payment/searchitem.js";
import paymentCart from "../../components/payment/paymentcrat.js";
import footer from "../footer.js";
import footerCart from "../../components/payment/footerCart.js";
import cardElementPayment from "../../components/cardElementPayment.js";
import fetchFromBasket from "../../api/basket.api.js";
import fetchCardFromBasket from "./fetchFromBasket.js";

export default function payment() {
  let payment = ce("div", {
    className:
      "paymentContainer w-full h-screen px-6 flex flex-col justify-between items-center  relative",
    children: [
      //searchBox
      searchItem("My Cart"),
      
      //fetch cards from basket
      fetchCardFromBasket(),

      //footer and total price
      ce("div", {
        className: "w-full h-2/8",
        children: [paymentCart(), footerCart()],
      }),
    ],
  });
  return payment;
}
