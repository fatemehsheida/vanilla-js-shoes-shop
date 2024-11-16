import { El } from "../../el/el";
import { getProductList } from "../../api/products.api";
import { productCard } from "../../componants/product-card";
import { router } from "../../routes/router";

export default async function Home() {
  const productWrapper = El({
    element: "div",
    className: "flex  w-[428px] bg-[#fcfcfc]",
    children: [
      El({
        element: "div",
        children: [
          El({
            element: "div",
            children: [
              El({
                element: "img",
                className: "w-[48px] h-[48px] bg-black rounded-full",
                src: "../../../src/images/assets/1-1.png",
              }),
              El({
                element: "h2",
                className: "text-black",
                children: ["Good Morning 👋"],
              }),
              El({
                element: "h2",
                className: "text-black",
                children: ["Saeed Abdilar"],
              }),    
            ],
          })
        ],
      }),
    ],
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
