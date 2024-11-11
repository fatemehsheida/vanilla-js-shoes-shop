import './src/index.css'
import { App } from "./src/App.js";
import { router } from "./src/routes/router.js";


const root = document.getElementById("app");
root.appendChild(App());
router.resolve();

