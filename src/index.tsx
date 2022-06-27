import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

import "./rem.js";

// initConf();

// const vConsole = new VConsole();

const root = createRoot(document.querySelector("#root") as Element);
root.render(<App />);
