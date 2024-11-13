export async function getProductList() {
    const response = await fetch("http://localhost:5000/products");
    const product = response.json();
    return product;
}