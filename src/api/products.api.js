export async function getProductList() {
    const response = await fetch("http://localhost:3000/Products");
    const data = await response.json();
    return data;
}