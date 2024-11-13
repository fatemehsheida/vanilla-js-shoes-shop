import "./src/index.css";
import { App } from "./src/App.js";
import { router } from "./src/routes/router.js";
import Home from "./src/pages/home/home1.js";

const root = document.getElementById("app")?. root.appendChild(Home());
router.resolve();
