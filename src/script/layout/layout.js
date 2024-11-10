import { El } from "../create-element";
import Loading from "./loading";

export default function Layout() {
  const layout = El("div", {
    children: [Loading()],
  });
  return layout;
}
