import fetchCardByImage from "../api/fetchCardByImage.js";
import clog from "../Utils/logdata.js";
import { ce } from "../Utils/create-element.js";
import getAdiddasProductsList from "../api/addidas.api.js";
import cardElement from "../components/card.js";
export default function fetchCardDetail(data = {}) {
  let test2 = ce("div", {
    className: "w-ful h-screen ",
  });
  fetchCardByImage(data).then((products) => {
    products.forEach((product) => {
      clog(product);

      let test3 = ce("div", {
        className: "detailContainer w-full h-screen flex flex-col ",
        children: [
          ce("div", {
            className: "w-full h-1/3",
            children: [
              ce("i", {
                className:
                  "fa-solid fa-backward cursor-pointer absolute top-2 left-2 ",
                events: {
                  click: () => {
                    router.navigate("/home");
                  },
                },
              }),
            ],
          }),
          ce("div", {
            className: "infoContainer  w-full bg-orange-300 h-2/3 px-6 ",
            children: [
              ce("div", {
                className:
                  "w-full h-1/4 relative mb-3 after:absolute pb-3 after:w-full after:h-full  after:top-0 after:left-0 after:border-b-2 after:border-b-solid after:border-b-slate-300 ",
                children: [
                  //div for heart
                  ce("div", {
                    className:
                      "w-full flex flex-row justify-start items-center h-2/3",
                    children: [
                      ce("h1", {
                        innerText: product.title,
                        className: "font-bold text-4xl w-full  ",
                      }),
                      ce("i", {
                        className:
                          "fa-regular fa-heart text-2xl block w-10 h-10  text-center p-2",
                      }),
                    ],
                  }),
                  ce("div", {
                    className:
                      "w-full h-1/3  flex flex-row justify-start items-center",
                    children: [
                      ce("div", {
                        className:
                          "w-1/6  bg-slate-200 rounded-lg flex justify-center items-center px-1 py-1",
                        children: [
                          ce("p", {
                            className: "font-bold text-[11px] text-slate-700",
                            innerText: "5,371sold",
                          }),
                        ],
                      }),
                      ce("div", {
                        className:
                          "pl-3 flex flex-row justify-center items-center gap-2",
                        children: [
                          ce("div", {
                            children: [
                              ce("i", {
                                className: "fa-solid fa-star",
                              }),
                            ],
                          }),
                          ce("p", {
                            className:
                              "font-semibold text-[14px] text-slate-700",
                            innerText: "4.3(5.389 reviews)",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              ce("div", {
                className: "detailMiddlePart bg-pink-200",
                children: [
                  ce("div", {
                    className: "",
                    children: [
                      ce("h1", {
                        className: "font-bold",
                        innerText: "Description",
                      }),
                      ce("p", {
                        className: "font-semibold text-sm text-slate-700",
                        innerText:
                          "lorem ipsum dolor sit amet, consectatur adipiscing elit,sad do eiusmod tempor incididunt ut labore et ",
                      }),
                    ],
                  }),

                  ce("div", {
                    className: "selectSection",

                    children: [
                      ce("div", {
                        className: "w-full bg-green-200 mt-2",
                        children: [
                          ce("div", {
                            className:
                              "w-1/2 flex flex-col justify-center items-start gap-2 bg-red-300",
                            children: [
                              ce("h3", {
                                className: "font-bold",
                                innerText: "Size",
                              }),
                              ce("ul", {
                                children: [createSize(product)],
                              }),
                            ],
                          }),
                        ],
                      }),
                      ce("div", {
                        className: "colorsSection",
                        children: [
                          ce("h3", {
                            className: "",
                            innerText: "Color",
                          }),
                          ce("i", {
                            className: "",
                            innerText: "",
                          }),
                        ],
                      }),
                    ],
                  }),
                  ce("div", {
                    className: "numberSection",

                    children: [
                      ce("h3", {
                        className: "",
                        innerText: "Quantity",
                      }),
                      ce("div", {
                        className: "",
                        children: [
                          ce("i", {
                            className: "",
                          }),
                          ce("div", {
                            className: "",
                          }),
                          ce("i", {
                            className: "",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              ce("div", {
                className: "payment",

                children: [
                  ce("div", {
                    className: "",
                    children: [
                      ce("h5", {
                        className: "",
                        innerText: "Total price",
                      }),
                      ce("h5", {
                        className: "",
                        innerText: `$.00`,
                      }),
                    ],
                  }),
                  ce("div", {
                    className: "",
                    children: [
                      ce("i", {
                        className: "",
                      }),
                      ce("p", {
                        className: "",
                        innerText: "Add to Cart",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
      test2.append(test3);
    });
    return test2;
  });
  return test2;
}
