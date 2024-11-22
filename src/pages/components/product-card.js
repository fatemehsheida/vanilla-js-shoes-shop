import { El } from "../el/el";

export function productCard(product) {
  return El({
    element: "div",
    className: "product-card",
    children: [
      El({
        element: "h3",
        className: "",
        children: [product.title],
      }),
      El({
        element: "p",
        children: [product.price],
      }),
      El({
        element: "div",
        children: [
          El({
            element: "img",
            src: product.images,
          }),
        ],
      }),
    ],
  });
}
