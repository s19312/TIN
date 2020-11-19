const student = {
    id: '',
    firstName: '',
    lastName: '',
    subjects: ['Java', 'BYT', 'TIN'],
};

function studentBuilder(id, firstName, lastName) {
    const newStudent = Object.create(student);
    newStudent.id = id;
    newStudent.firstName = firstName;
    newStudent.lastName = lastName;
    newStudent.subjects = student.subjects;
    return newStudent;
}

console.log(studentBuilder('s19312', 'Roman', 'Fedorchenko'));
