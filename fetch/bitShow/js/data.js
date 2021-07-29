'use strict';

const url = 'http://api.tvmaze.com/shows';
const urlForSearch = 'http://api.tvmaze.com/search/shows?q='

// index.html

const searchBox = $('.searchBox');
const dropDownList = $('.drop-down-list');
const cardList = $('.cardAll');
const error = $('.error');

// infoPage.html

const searchInfo = $('.searchInfo');
const infoDropDownList = $('.drop-down-list-info');
const title =  $('.title');
const poster = $('.poster');
const season = $('#seasons');
const crew = $('#crew');
const cast = $('#cast');
const description = $('.summary');
const errorInfo = $('.errorInfo');

//////

const div1 = $('#indexPage');
const div2 = $('#infoPage');