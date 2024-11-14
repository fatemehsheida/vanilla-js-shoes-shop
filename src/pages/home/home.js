import { El } from "../../el/el";
import { getProductList } from "../../api/products.api";
import { productCard } from "../../componants/product-card";
import { router } from "../../routes/router";

export default function Home() {
  const productWrapper = El({
    element: "div",
    className: "flex bg-pink-500",
    children: ["hkfhjk;"],
  });
  const productm = ["adwdad","rgrg"];

  getProductList().then((products) => {

    products.forEach((product) => {
      const card = productCard(product);
      console.log(card)
      productm.push(card);
    });
    const home = El({ element: "div", children: [productWrapper, ...productm] });
    return home;
  });
}
