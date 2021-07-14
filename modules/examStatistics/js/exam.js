import Student from './student.js';
import Subject from './subject.js';

class Exam {
    constructor (subjectName, student, grade) {
        let studentX = student.split(' ');
        this.subject = new Subject (subjectName);
        this.student = new Student (studentX[0], studentX[1]);
        this.grade = grade;
    }

    getExaminfo () {
        return `${this.subject.getSubjectName()} - ${this.student.getStudentData()}`;
    }
    hasPassed () {
        if (this.grade > 5) {
            return 'Passed';
        } else {
            return 'Failed';
        }
    }
}

export default Exam;