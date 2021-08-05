"use strict";

import { listUl } from "./data.js";

export const getPageNumber = (item, numPage) => {
  listUl.html("");
  let limit = numPage + 2;
  let limitPage = numPage;
  if (limitPage < 1) {
    limitPage = "disabledA";
  }
  if (limit > 34) {
    limitPage = "disabledB";
  }
  let limitNext = numPage + 1;
  let limitPrev = numPage - 1;
  if (limitNext > 34) {
    limitNext = 34;
  }
  if (limitPrev < 1) {
    limitPrev = 1;
  }

  let pageNumber;

  let nextBtt = `<li class="page-item"><a class="page-link" href="#" onclick="load(${limitNext})">next</a></li>`;

  let prevBtt = `<li class="page-item"><a class="page-link" href="#" onclick="load(${limitPrev})">previous</a></li>`;

  listUl.append(prevBtt);

  if (limit >= 3 && limit <= 36) {
    for (let i = numPage; i <= limit; i++) {
      pageNumber = `<li class="page-item"><a class="page-link" href="#" onclick="load(${i})">${i}</a></li>`;
      listUl.append(pageNumber);
    }
  }
  if (limitPage === "disabledA") {
    listUl.html("");
    listUl.append(prevBtt);
    pageNumber = `<li class="page-item"><a class="page-link" href="#" onclick="load(1)"> 1 </a></li>
    <li class="page-item"><a class="page-link" href="#" onclick="load(2)"> 2 </a></li>
    <li class="page-item"><a class="page-link" href="#" onclick="load(3)"> 3 </a></li>`;
    listUl.append(pageNumber);
  }
  if (limitPage === "disabledB") {
    listUl.html("");
    listUl.append(prevBtt);
    pageNumber = `<li class="page-item"><a class="page-link" href="#" onclick="load(32)"> 32 </a></li>
    <li class="page-item"><a class="page-link" href="#" onclick="load(33)"> 33 </a></li>
    <li class="page-item"><a class="page-link" href="#" onclick="load(34)"> 34 </a></li>`;
    listUl.append(pageNumber);
  }

  listUl.append(nextBtt);
};
