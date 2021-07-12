import Movie from '../entities/movie.js';
import Program from '../entities/program.js';
import {festival} from '../entities/festival.js';

///// create movie

var titleNode = document.querySelector('#title');
var durationNode = document.querySelector('#length');
var genreNode = document.querySelector('#genre');
var listMovieNode = document.querySelector('.movieList');
var errorMovieNode = document.querySelector('.error-movie');

////// create program

var dateNode = document.querySelector('#date');
var listProgramNode = document.querySelector('.programList');
var errorProgramNode = document.querySelector('.error-program');

/////// add movie to program

var movieSelectNode = document.querySelector('#movieSelect');
var programSelectNode = document.querySelector('#programSelect');

export function createMovie () {
    function create (title, duration, genre) {
        var newMovie = new Movie (title, duration, genre);
        return newMovie.getData();
    }

    if(!titleNode.value) {
        errorMovieNode.textContent = 'Title is required !!!';
    } else if (!durationNode.value) {
        errorMovieNode.textContent = 'Duration is required !!!';
    } else if (!genreNode.value) {
        errorMovieNode.textContent = 'Genre is required !!!';
    } else {
        errorMovieNode.textContent = '';
        var elementLi = document.createElement('li');
        listMovieNode.appendChild(elementLi);
        elementLi.textContent = create(titleNode.value, durationNode.value, genreNode.value);
    
        /////// add movie to movie select menu
    
        var elementOptionMovie = document.createElement('option');
        movieSelectNode.appendChild(elementOptionMovie);
        elementOptionMovie.textContent = elementLi.textContent;
    
        ///// reset input
        titleNode.value = '';
        durationNode.value = '';
        genreNode.value = genreNode.options[0].value;
    }
}



export function createProgram () {
    function createPr (date) {
        var newProgram = new Program (date);
        return newProgram.getData()
    }

    if (!dateNode.value) {
        errorProgramNode.textContent = 'Date is required !!!';
    } else {
        errorProgramNode.textContent = '';
        var elementProgramLi = document.createElement('li');
        listProgramNode.appendChild(elementProgramLi);
        elementProgramLi.textContent = createPr(dateNode.value);

        /////////// add program to program select menu

        var elementOptionProgram = document.createElement('option');
        programSelectNode.appendChild(elementOptionProgram);
        elementOptionProgram.textContent = elementProgramLi.textContent;

        ////// reset date
        dateNode.value = '';
    }
    
}



export function addMoToProgram () {
    var selectMovie = movieSelectNode.value;
    var split = selectMovie.split(', ');
    var splitTitle = split[0];
    var splitDuration = parseInt(split[1]);
    var splitGenre = split[2];
    /////
    var selectProgram = programSelectNode.value;
    var splitPr = selectProgram.split(', ');
    var splitPrDate = splitPr[0];


    var createMovieAgain = function (title, duration, genre) {
        return new Movie (title, duration, genre);
    }

    var xxx = createMovieAgain(splitTitle, splitDuration, splitGenre);

    var createProgramAgain = function (date) {
        return new Program (date);
    }

    var yyy = createProgramAgain(splitPrDate);

    if (festival.listOfPrograms.length > 0) {
        var count = 0;
        for (var k = 0; k < festival.listOfPrograms.length; k++) {
            if (splitPrDate === festival.listOfPrograms[k].date) {
                count ++;
            }
        }
        if (count > 0) {
            for (var i = 0; i < festival.listOfPrograms.length; i++) {
                if (splitPrDate === festival.listOfPrograms[i].date) {
                    festival.listOfPrograms[i].addMovie(xxx);
                    listProgramNode.childNodes[i].textContent = festival.listOfPrograms[i].getData();
                    programSelectNode.options[programSelectNode.selectedIndex].text = festival.listOfPrograms[i].getData();
                } 
            } 
        } else {
            festival.addProgram(yyy);
            var lengthListPr1 = festival.listOfPrograms.length;
            festival.listOfPrograms[lengthListPr1 - 1].addMovie(xxx);
            var lengthListPr = festival.listOfPrograms.length;
            listProgramNode.childNodes[lengthListPr - 1].textContent = festival.listOfPrograms[lengthListPr - 1].getData();
            programSelectNode.options[programSelectNode.selectedIndex].text = festival.listOfPrograms[lengthListPr - 1].getData();
        }
    } else {
        festival.addProgram(new Program (splitPrDate));
        festival.listOfPrograms[0].addMovie(xxx);
        listProgramNode.childNodes[0].textContent = festival.listOfPrograms[0].getData();
        programSelectNode.options[programSelectNode.selectedIndex].text = festival.listOfPrograms[0].getData();
    }
    //console.log(festival);         
}