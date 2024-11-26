import header from "../../components/checkout/checkout-header";
import orderList from "../../components/checkout/checkout-orderList";
import { ce } from "../../Utils/create-element";
import shipingAddressNav from "../../components/checkout/checkout-shipping";
import shippingTypeNav from "../../components/checkout/checkout-shippingType";

export default function checkout() {
  let checkout2 = ce("div", {
    className: "w-full h-screen flex flex-col px-6 justify-around ",
    children: [
      header("checkout", true),
      shipingAddressNav(),
      orderList(),
      shippingTypeNav(),
      ce("button", {
        innerText: "countinue to Payment",
        className:
          "w-full bg-black text-white px-3 py-3 rounded-[35px]   font-bold text-lg hover:bg-slate-600 ",
      }),
    ],
  });
  return checkout2;
}
