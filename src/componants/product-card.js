import { El } from "../el/el";


export function productCard(product){
    return El({
        element: "div",
        className: "product-card",
        children: [
            El({
                element: "img",
                src: "http://localhost:5173/products/adidas/1.webp"
            })
        ],
    }
    )
}