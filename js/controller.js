import * as model from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", init);

function init() {
    console.log("Controller is live!");

    // Initialize model and view
    model.init();
    view.init();

    // Make model and view accessible in the browser console
    window.model = model;
    window.view = view;
}
