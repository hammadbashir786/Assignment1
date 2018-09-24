
let a:number =1;
let b:number =2;
let result:number =0;


function Division(firstNumber:number,secondNumber:number){
    window.alert("Div "+(firstNumber/secondNumber));
}
function Multiplication(firstNumber:number,secondNumber:number){
    window.alert("Mult "+(firstNumber/secondNumber));
}
function Addition(firstNumber:number,secondNumber:number){
    window.alert("Add "+(firstNumber+secondNumber));
}
function Substraction(firstNumber:number,secondNumber:number){
    window.alert("Sub "+(firstNumber-secondNumber));
}
Addition(a,b);
Substraction(a,b);
Multiplication(a,b);
Division(a,b);