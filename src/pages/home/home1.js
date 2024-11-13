import { El } from "../../el/el";
import { router } from "../../routes/router";
import { getProductList } from "../../api/products.api";
import { productCard } from "../../componants/product-card";

export default function Home() {
  const productWrapper = El("div", {
    className: "flex",
  });
  const home = El("div", { childran: [productWrapper] });

  getProductList().then((products) => {
    products.forEach((product) => {
      const card = productCard(product);
    });
  });
  return Home();
}
