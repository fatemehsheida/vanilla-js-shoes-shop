import { El } from "../create-element";

function Loading() {
  const loading = El("div", {
    className: "bg-red-400",
    children: [El("div", { innerText: "sfseterhrttr" })],
  });
  return loading;
}
export default Loading;
