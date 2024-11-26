import { ce } from "../Utils/create-element.js";
import { router } from "../routes/router.js";
//function for showing card detail
function showCardDetail(e, products) {
  let endpoint = e.target.id.toString();
  router.navigate(`card/${endpoint}`);
}
export default function cardCompleredOrder(product, productss) {
  //function for shown selected color----------------------------
  function returnColor(product) {
    let color = "";
    product.color.forEach((element) => {
      if (element == "green") {
        color = "w-5 h-5 rounded-full bg-green-400";
      }
      if (element == "rose") {
        color = "w-5 h-5 rounded-full bg-rose-400";
      }
      if (element == "sky") {
        color = "w-5 h-5 rounded-full bg-sky-400";
      }
      if (element == "indigo") {
        color = "w-5 h-5 rounded-full bg-indigo-400";
      }
    });
    return color;
  }
  let card = ce("div", {
    className:
      " w-full h-52 p-3 rounded-xl bg-white flex flex-row justify-center items-start gap-3 ",
    children: [
      ce("div", {
        className:
          "imageContainer w-1/3 h-full rounded-3xl p-2 bg-[#ECEFF1] flex justify-center items-center",
        children: [
          ce("img", {
            restAttrs: { src: product.images, id: product.id },
            className: `w-36 h-36 `,
            events: {
              click: showCardDetail,
            },
          }),
        ],
      }),
      ce("div", {
        className:
          "detailContainer flex flex-col justify-between items-start gap-1 w-2/3",
        children: [
          ce("div", {
            className: "flex flex-row justify-between items-center w-full",
            children: [
              ce("h1", {
                className: "productName font-bold text-2xl leading-6 ",
                innerText: product.title,
              }),
            ],
          }),
          ce("div", {
            className:
              "flex flex-row justify-start items-center w-full  gap-2  py-2 mt-2",
            children: [
              ce("div", {
                className:
                  "  relative after:absolute pr-2 after:w-full after:h-full  after:top-0 after:left-1.5 after:border-r-2 after:border-r-solid after:border-r-slate-400 after:pointer-events-none",
                children: [
                  ce("ul", {
                    className: " flex justify-start items-center gap-1",
                    children: [
                      ce("div", {
                        className: returnColor(product),
                      }),
                      ce("h1", {
                        className: "font-semibold text-slate-700 text-lg",
                        innerText: product.color,
                      }),
                    ],
                  }),
                ],
              }),
              ce("div", {
                className: "pl-1",
                children: [
                  ce("h5", {
                    className: "font-semibold text-slate-700 text-lg pr-2",
                    innerText: `Size=${product.size}`,
                  }),
                ],
              }),
              ce("div", {
                className:
                  "  relative after:absolute  after:w-full after:h-full  after:top-0 after:right-1.5 after:border-l-2 after:border-l-solid after:border-l-slate-400 after:pointer-events-none",
                children: [
                  ce("ul", {
                    className: " flex justify-start items-center gap-1",
                    children: [
                      ce("h5", {
                        className: "font-semibold text-slate-700 text-lg pr-1",
                        innerText: `Qty=${product.size}`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          ce("div", {
            className: "bg-slate-300 rounded-md",
            children: [
              ce("h3", {
                className: "py-1 px-2",
                innerText: "Completed",
              }),
            ],
          }),
          ce("div", {
            className:
              "numberSection flex gap-3 w-full h-10 justify-between items-center mt-5",
            children: [
              ce("p", {
                restAttrs: { id: `checkoutPrice${productss.id}` },
                className: "productPrice font-bold text-xl leading-5",
                innerText: `$ ${product.price}.00`,
              }),
              ce("div", {
                className:
                  "w-1/2 rounded-full bg-black flex justify-center items-center px-2 py-2",
                children: [
                  ce("div", {
                    className: "text-center font-bold  text-white",
                    innerText: "Track Order",
                    restAttrs: {
                      id: "Buy Again",
                    },
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return card;
}
