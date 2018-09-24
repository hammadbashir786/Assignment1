var Student = /** @class */ (function () {
    function Student(a, b, c) {
        this.name = a;
        this.age = b;
        this.rollnumber = c;
    }
    return Student;
}());
var student1 = new Student("Hammad", 21, 1512182);
var student2 = new Student("Faizan", 22, 1512181);
window.alert(student1.name);
window.alert(student2.name);
