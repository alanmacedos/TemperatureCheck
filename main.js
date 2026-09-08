import { listenLedState } from "./fbService.js";

const tempDisplay = document.getElementById("temp-display");

listenLedState((state) => {
    tempDisplay.textContent = state;
});