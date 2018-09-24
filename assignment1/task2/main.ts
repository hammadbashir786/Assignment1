class Student{
    name:string;
    age:number;
    rollnumber:number;
constructor(a,b,c){
   this.name=a;
   this.age=b;
   this.rollnumber=c;
}
}
let student1 :Student= new Student("Hammad",21,1512182);
let student2 :Student= new Student("Faizan",22,1512181);
window.alert(student1.name);
window.alert(student2.name);