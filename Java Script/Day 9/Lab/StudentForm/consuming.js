window.addEventListener('load', function(){
    let studentNameObj=document.querySelector('input[name=studentName]');
    let studentGradeObj=document.querySelector('input[name=studentGrade]');
    let studentDepartmentObj=document.querySelector('input[name=Department]:checked');
    let addButtonObj=this.document.querySelector('input[type=button]');
    let students=[];

    addButtonObj.onclick= function(event){
        event.preventDefault();
        let studentName = studentNameObj.value;
        let studentGrade = studentGradeObj.value;
        let studentDepartment=studentDepartmentObj.value;
        if(validateStudentName(students, studentName)){
            if(validateGrade(studentGrade)){
                // add student
                students=addStudent(studentName, studentGrade, studentDepartment, students);
            }else{
                alert("Enter Grade between 0 to 100");
            }
        }
        else{
            alert("Enter another name");
        }
    }

});


