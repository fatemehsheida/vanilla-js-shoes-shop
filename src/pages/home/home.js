import { El } from "../../el/el";
import { getProductList } from "../../api/products.api";
import { productCard } from "../../componants/product-card";
import { router } from "../../routes/router";

export default async function Home() {
  const productWrapper = El({
    element: "div",
    className: "flex",
    children: [],
  });
  let productElement = [];
  let products = await getProductList();
  products.forEach((product) => {
    let card = productCard(product);
    productElement.push(card);
  });
  let home = El({ element: "div", children: [productWrapper, ...productElement] });
  return home;
}
async function renderHomePage() {
  const homeElement = await Home();
  render(homeElement);
}

renderHomePage();
