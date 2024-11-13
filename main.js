import "./src/index.css";
import { App } from "./src/App.js";
import { router } from "./src/routes/router.js";
import home1 from "./src/pages/home/home1";

const root = document.getElementById("app");
root.appendChild(App());
router.resolve();
