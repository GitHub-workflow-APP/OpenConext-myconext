import "core-js/stable";
import "regenerator-runtime/runtime";

import App from "./App.svelte";

import "./locale/en";
import "./locale/nl";

const app = new App({target: document.body});

export default app;