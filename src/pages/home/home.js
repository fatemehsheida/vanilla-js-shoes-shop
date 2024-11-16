import { ce } from "../Utils/create-element.js";
import searchInput from "../components/searchInput.js";
import fetchAllLogo from "./fetchLogo.js";
import most from "./homeMostNav.js";
import fetchAllProducts from "./fetchAllProducts.js";
import footer from "./footer.js";

export default function home(data = {}) {
  let home = ce({
    element: "div",
    className:
      " homeContainer px-6 flex flex-col justify-center items-center relative",
    children: [
      searchInput(),
      fetchAllLogo(),
      most(),
      fetchAllProducts(data),
      footer(),
    ],
  });
  return home;
}