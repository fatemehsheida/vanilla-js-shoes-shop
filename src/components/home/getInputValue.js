export default function getInputValue() {
  let endpoint = fe("searchBox").value;
  localStorage.setItem("searchKey", endpoint);
  return endpoint
}
