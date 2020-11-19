class Student {
    constructor(firstName, lastName, sNumber, grades) {
        this.sNumber = sNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }

    getInfo() {
        console.log(this.firstName + " " + this.lastName + " " + this.avgGrade);
    }

    set fullName(fullName) {
        this.firstName = fullName.split(' ')[0];
        this.lastName = fullName.split(' ')[1];
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get avgGrade() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    }
}

var student1 = new student("Roman", "Fedorchenko", "sNumber", [1, 2, 3, 4, 5]);
student1.getInfo()
student1.fullName = 'Romann Fedorchenko';
console.log(student1.fullName);
console.log(student1.avgGrade)