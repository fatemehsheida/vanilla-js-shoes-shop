import { ce } from "../../Utils/create-element.js";
import logo from "../../components/logo.js";
import spiner from "../../components/loading.js";
export default function layout() {
  const layout = ce("div", {
    children: [logo(), spiner()],
    className:
      " container h-full w-full flex flex-col justify-center items-center",
  });
  return layout;
}
