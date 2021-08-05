"use strict";

import { urlPage, urlCharacter } from "../entites/data.js";
import { showNewPage } from "../entites/newPage.js";
import { getPageNumber } from "../entites/pagination.js";
import { characterInfo } from "../entites/characterInfo.js";

//////////

export const load = (pageNum) => {
  let promisePage = new Promise((resolve, reject) => {
    $.ajax({
      url: `${urlPage}${pageNum}`,
      method: "GET",
    }).done((response) => {
      if (response) {
        resolve(response);
      } else {
        reject("No data");
      }
    });
  });

  promisePage.then(
    (value) => {
      getPageNumber(value, pageNum);
    },
    (error) => {
      getPageNumber(error);
    }
  );

  promisePage.then(
    (value) => {
      showNewPage(value);
    },
    (error) => {
      showNewPage(error);
    }
  );
};

export const loadC = (numOfCharac) => {
  let promisePage_2 = new Promise((resolve, reject) => {
    $.ajax({
      url: `${urlCharacter}${numOfCharac}`,
      method: "GET",
    }).done((response) => {
      if (response) {
        resolve(response);
      } else {
        reject("No data");
      }
    });
  });

  promisePage_2.then(
    (value) => {
      characterInfo(value);
    },
    (error) => {
      characterInfo(error);
    }
  );
};
