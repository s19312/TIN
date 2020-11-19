function Student(firstName,lastName,id,grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    this.getInfo = function () {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return this.firstName + " " + this.lastName + " " + (sum / this.grades.length);
    }
}

var student1 = new Student("Roman","Fedorchenko","sNumber",[1,2,3,4,5]);
console.log(student1.getInfo());