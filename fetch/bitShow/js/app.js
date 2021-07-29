'use strict';

//import {url, urlForSearch, searchBox, dropDownList, cardList, error, searchInfo, infoDropDownList, title, poster, season, crew, cast, description, errorInfo, div1, div2} from './data.js';

$(document).ready(() => {

    div2.hide();

    ////////////// Top 50 tv shows

    const top50Shows = () => {
        const urll = url;

        fetch(urll)
            .then(response => {
                return response.json();
            })
            .then(response => {
                response.sort((a,b) => {
                    return b.rating.average - a.rating.average;
                })

                let top50 = response.slice(0,50);

                top50.forEach((item) => {
                    let card = `<div class="col-sm-4" onclick=goToInfo(${item.id}) >
                        <div class="cardCenter">
                            <img class="card-img-top" src="${item.image.medium}" alt="image">
                            <div class="card-body">
                                <a class="card-text">${item.name}</a>
                            </div>
                        </div>
                    </div>`;
                    cardList.append(card);              
                });
            })
            .catch(error => {
                error.text(error);
            })
    }

    //////////// Search box

    const searchShow = event => {
        if (event.keyCode === 13) {
            let inputVal = searchBox.val();
            searchBox.blur();

            fetch(`${urlForSearch}${inputVal}`)
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    response.forEach(function (element) {
                        let liEl = `<li class="underLine" onclick=goToInfo(${element.show.id})>${element.show.name}</li>`;
                        dropDownList.append(liEl);
                    })
                })
                .catch(error => {
                    error.text(error);
                })
        }
    }


    //////////////// Clear search box

    const clearSearchBox = () => {
        searchBox.val("");
        error.text("");
        error.css("display", "none");
        dropDownList.html("");
    }

    searchBox.on('keydown', searchShow);
    searchBox.on('focus', clearSearchBox);
    top50Shows();
})

const goToInfo = showId => {

    div1.hide();
    div2.show();

    //////////////////// Clear info

    searchBox.val("");
    dropDownList.html("");
    title.empty();
    poster.empty();
    season.empty();
    crew.empty();
    cast.empty();
    description.empty();
    errorInfo.empty();

    ////////////////////////// TITLE

    fetch(`${url}/${showId}`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            let showTitle = `<h2>${response.name}</h2>`;
            title.append(showTitle);
        })
        .catch(error => {
            errorInfo.text(error);
        })


    ///////////////////////////////// IMAGE


    fetch(`${url}/${showId}/images`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            if (!response) {
                errorInfo.text ('No data');
            }
            let showImage = `<img src="${response[0].resolutions.original.url}">`;
            poster.append(showImage);
        })
        .catch(error => {
            errorInfo.text(error);
        })



    /////////////////////////////////// SEASONS

    fetch(`${url}/${showId}/seasons`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            if (!response) {
                errorInfo.text ('No data');
            }
            let showSeasonsHead = `<h3>Seasons (${response.length})</h3>`;
            let textDate = '<p>Premiere Date - End Date</p>'
            let listDate = $('<ul></ul>');
            response.forEach(function (el) {
                listDate.append(`<li>${el.premiereDate} - ${el.endDate}</li>`);
            })
            season.append(showSeasonsHead); 
            season.append(textDate);
            season.append(listDate);
        })
        .catch(error => {
            errorInfo.text(error);
        })

    /////////////////////////////////// CAST

    fetch(`${url}/${showId}/cast`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            if (!response) {
                errorInfo.text ('No data');
            }
            let showCast = '<h3>Cast</h3>';
            let castList = $('<ul></ul>');
            response.forEach(function (actor) {
                castList.append(`<li>${actor.person.name}</li>`)
            })
            cast.append(showCast);
            cast.append(castList);
        })
        .catch(error => {
            errorInfo.text(error);
        })

    /////////////////////////////////// CREW

    fetch(`${url}/${showId}/crew`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            if (!response) {
                errorInfo.text ('No data');
            }
            let showCrew = '<h3 class = "toggle">Crew <span>(click to show)<span></h3>';
            let crewList = $('<ul class = "hideList"></ul>');
            response.forEach(function (crew) {
                crewList.append(`<li>${crew.type}: ${crew.person.name}</li>`)
            })
            crew.append(showCrew);
            $('.toggle').click(function () {
                $('.hideList').toggle();
                crew.append(crewList);
            })
        })
        .catch(error => {
            errorInfo.text(error);
        })

    /////////////////////////////////////////// DESCRIPTION

    fetch(`${url}/${showId}`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            if (!response) {
                errorInfo.text ('No data');
            }
            let showDetails = `<h3>Show Details</h3>`
            let showDescription = `<p>${response.summary}</p>`;
            description.append(showDetails);
            description.append(showDescription);
        })
        .catch(error => {
            errorInfo.text(error);
        })        
}

//////// Back to index page

function goToIndex () {
    div1.show();
    div2.hide();
}