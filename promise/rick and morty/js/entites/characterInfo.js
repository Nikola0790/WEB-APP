"use strict";

import { cardAll } from "./data.js";

export const characterInfo = (item) => {
  cardAll.html("");
  let info = `<div class="col-12 container-info"><div class="row">
      <div class="imgCharacter col-sm-12 col-md-6 col-lg-6"><img src="${item.image}"></div>
      <div class="characterInfo col-sm-12 col-md-6 col-lg-6">
      <p>NAME: ${item.name}</p>
      <p>SPECIES: ${item.species}</p>
      <p>TYPE: ${item.type}</p>
      <p>ORIGIN: ${item.origin.name}</p>
      <p>STATUS: ${item.status}</p>
      <p>GENDER: ${item.gender}</p>
      <p>LOCATION: ${item.location.name}</p>
      </div>
      </div>
      </div>`;
  cardAll.append(info);
};
