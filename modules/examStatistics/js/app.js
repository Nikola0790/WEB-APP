import {addStudentDataToList, refreshStatistic} from '../controller/controller.js';

    /////////////////////////////////////

let bttNode = document.querySelector('.button-add');

bttNode.addEventListener('click', addStudentDataToList);
bttNode.addEventListener('click', refreshStatistic);