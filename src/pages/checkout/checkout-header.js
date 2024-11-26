import { ce } from "../../Utils/create-element";
export default function header(text, more = false) {
  if (more == true) {
    let header = ce("div", {
      className:
        "flex flex-row justify-between items-center py-3 w-full h-2/12",
      children: [
        ce("div", {
          className: "title flex flex-row justify-center items-center gap-3",
          children: [
            ce("i", {
              className: "fa-solid fa-backward",
            }),
            ce("h1", {
              innerText: text,
              className: "text-2xl font-semibold",
            }),
          ],
        }),
        ce("i", {
          className: "fa-solid fa-ellipsis text-2xl",
        }),
      ],
    });
  } else {
    header = ce("div", {
      className:
        "flex flex-row justify-between items-center bg-orange-300 w-full h-12",
      children: [
        ce("div", {
          className:
            "title flex flex-row justify-center items-center gap-4 bg-green-600",
          children: [
            ce("i", {
              className: "fa-solid fa-backward ",
            }),
            ce("h1", {
              className: "text-2xl font-semibold",
              innerText: text,
            }),
          ],
        }),
      ],
    });
  }
  return header;
}
