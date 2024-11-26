import header from "../../components/checkout/checkout-header";
import orderList from "../../components/checkout/checkout-orderList";
import { ce } from "../../Utils/create-element";
import shipingAddressNav from "../../components/checkout/checkout-shipping";
import shippingTypeNav from "../../components/checkout/checkout-shippingType";

export default function checkout() {
  let checkout2 = ce("div", {
    className: "w-full h-screen bg-pink-600 flex flex-col px-6",
    children: [
      header("checkout", true),
      shipingAddressNav(),
      orderList(),
      shippingTypeNav(),
    ],
  });
  return checkout2;
}
