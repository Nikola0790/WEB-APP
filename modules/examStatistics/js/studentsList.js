class StudentsList {
    constructor () {
        this.passedStudents = [];
        this.failedStudents = [];
    }

    addStudentsToPassList (student) {
        this.passedStudents.push(student);
    }
    addStudentsToFailList (student) {
        this.failedStudents.push(student);
    }
}

export default StudentsList;