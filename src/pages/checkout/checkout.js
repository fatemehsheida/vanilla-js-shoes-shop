import header from "../../components/checkout/checkout-header";
import { ce } from "../../Utils/create-element";
import shipingNav from "../../components/checkout/checkout-shipping";

export default function checkout() {
  let checkout2 = ce("div", {
    className: "w-full h-screen bg-pink-600 flex flex-col px-6",
    children: [header("checkout", true), shipingNav()],
  });
  return checkout2;
}
