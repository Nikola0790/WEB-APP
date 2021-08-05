"use strict";

import { load, loadC } from "./controller/urlFunc.js";

$(document).ready(() => {
  load(1);
});

window.load = load;
window.loadC = loadC;
