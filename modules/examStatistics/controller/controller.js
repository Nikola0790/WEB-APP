import Exam from "../js/exam.js";
import StudentsList from "../js/studentsList.js";

const subjectSelect = document.querySelector("#subject");
const inputNameData = document.querySelector("#name");
const inputGradeData = document.querySelector("#grade");

/////////////////////////////////////

const passedListNode = document.querySelector(".passedList");
const failedListNode = document.querySelector(".failedList");

/////////////////////////////////////

const statisticPassNode = document.querySelector("#passed-num");
const statisticFailNode = document.querySelector("#failed-num");
const statisticPercentPassNode = document.querySelector("#passed-percent");
const statisticPercentFailNode = document.querySelector("#failed-percent");
const totalNumStudents = document.querySelector("#count");

// Use constructor StudentList
let listsForPassedFailed = new StudentsList();

// Function for add data in pass/fail list
export let addStudentDataToList = () => {
  // Use constructor Exam
  if (!inputNameData.value) {
    alert("Name is required !!!");
  } else if (inputNameData.value.split(" ").length !== 2) {
    alert("BOX NAME - must have First name and Second name !!!");
  } else if (!inputGradeData.value) {
    alert("Grade is required !!!");
  } else {
    let examInfo = new Exam(
      subjectSelect.value,
      inputNameData.value,
      inputGradeData.value
    );
    let passOrFail = examInfo.hasPassed();
    let elementLi = document.createElement("li");

    if (passOrFail === "Passed") {
      passedListNode.appendChild(elementLi);
      elementLi.textContent = examInfo.getExaminfo() + " " + examInfo.grade;
      listsForPassedFailed.addStudentsToPassList(examInfo);
    } else if (passOrFail === "Failed") {
      failedListNode.appendChild(elementLi);
      elementLi.textContent = examInfo.getExaminfo() + " " + examInfo.grade;
      listsForPassedFailed.addStudentsToFailList(examInfo);
    }
  }
};

// Func for refresh statistics
export let refreshStatistic = () => {
  let numPassStudents = listsForPassedFailed.passedStudents.length;
  let numFailStudents = listsForPassedFailed.failedStudents.length;
  totalNumStudents.textContent = numPassStudents + numFailStudents;
  statisticPassNode.textContent = numPassStudents;
  statisticFailNode.textContent = numFailStudents;
  statisticPercentPassNode.textContent =
    Math.round((numPassStudents * 100) / (numPassStudents + numFailStudents)) +
    "%";
  statisticPercentFailNode.textContent =
    100 -
    Math.round((numPassStudents * 100) / (numPassStudents + numFailStudents)) +
    "%";
};
