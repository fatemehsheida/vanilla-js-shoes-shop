export function El(
  name,
  { className = "", children = [], events = {}, restAttrs = {}, innerText } = {}
) {
  const element = document.createElement(name);
  if (className) {
    element.className = className;
  }
  Object.keys(events).forEach((eventKey) => {
    element.addEventListener(eventKey, events[eventKey]);
  });
  children.forEach((child) => {
    element.appendChild(child);
  });
  Object.keys(restAttrs).forEach((key) => {
    element.setAttribute(key, restAttrs[key]);
  });
  if (innerText) {
    element.innerText = innerText;
  }
  return element;
}
