import { createMovie, createProgram, addMoToProgram} from '../js/controller/controller.js';

var bttCreateMovieNode = document.querySelector('#btt-movie');
var bttCreateProgramNode = document.querySelector('#btt-program');
var bttAddMovieToProgram = document.querySelector('#add-movie-program')

bttCreateMovieNode.addEventListener('click', createMovie);
bttCreateProgramNode.addEventListener('click', createProgram);
bttAddMovieToProgram.addEventListener('click', addMoToProgram);