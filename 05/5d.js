function student(firstName,lastName,id,grades) {

    const student = {
        getInfo() {

            console.log(this.firstName + " " + this.lastName + " " + this.avgGrade);
        },

        set fullName(fullName) {
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        },

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        get avgGrade() {
            let sum = 0;
            for (let i = 0; i < this.grades.length; i++) {
                sum += this.grades[i];
            }
            return sum/this.grades.length;
        },
    };
    student.id = id;
    student.firstName = firstName;
    student.lastName = lastName;
    student.grades = grades;
    return student;
}

var student1 = new student("Roman","Fedorchenko","sNumber",[1,2,3,4,5]);
student1.getInfo()
student1.fullName ='Romann Fedorchenko';
console.log(student1.fullName);
console.log(student1.avgGrade)