function return_final_grade(){
    var firstGrade = 9
    var secondGrade = 6
    var thirdGrade = 8
    var fourthGrade = 6
    var finalGrade = ((firstGrade + secondGrade + thirdGrade + fourthGrade + 1)/4).toFixed(1)
    return finalGrade
}
var student_name = "Vitor";
console.log(student_name);
final_grade = return_final_grade();

var elementStudentName = document.getElementById('output');
elementStudentName.innerHTML = 'Bem vindo ' + student_name;
document.write("<br />")
document.write('Sua nota final é : ' + final_grade)





