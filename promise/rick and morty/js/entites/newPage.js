"use strict";

import { cardAll } from "./data.js";

export const showNewPage = (item) => {
  cardAll.html("");
  item.results.forEach((item) => {
    let card = `<div class="col-sm-12 col-md-4 col-lg-3 cursor" onclick="loadC(${item.id})">
              <img class="card-img-top" src="${item.image}" alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary">Like</a>
              </div>
          </div>`;
    cardAll.append(card);
  });
};
