import "./src/index.css";
import { App } from "../App.js";
import { router } from "./../routes/router.js";

const root = fe("app");
root.className = "w-full h-screen";
root.appendChild(App());
router.resolve();
