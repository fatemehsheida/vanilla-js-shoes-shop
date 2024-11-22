import { ce } from "../Utils/create-element.js";
import logo from "../components/logo.js";
<<<<<<< HEAD
import { router } from "../routes/router.js";
import spiner from "../components/loading.js";

export default function loadingPage() {
  setTimeout(() => {
    router.navigate("/page2");
  }, 3000);
=======

import spiner from "../components/loading.js";
export default function loadingPage() {
>>>>>>> feature/login
  const loadingPage = ce("div", {
    children: [logo(), spiner()],
    restAttrs: { id: "loading" },
    className:
      " loading h-full w-full flex flex-col justify-center items-center",
  });
  return loadingPage;
}
