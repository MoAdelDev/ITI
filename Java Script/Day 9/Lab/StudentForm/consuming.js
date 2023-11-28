
let students=[];

window.addEventListener('load', function(){
    let studentNameObj=document.querySelector('input[name=studentName]');
    let studentGradeObj=document.querySelector('input[name=studentGrade]');
    let studentDepartmentObj=document.getElementsByName('Department');
    let addButtonObj=this.document.querySelector('input[type=button]');

    let tableObject=this.document.querySelector('table');

    let filterSelectObject=this.document.querySelector('#filter');
    let sortSelectObject=this.document.querySelector('#sort');
    
    
    addButtonObj.onclick= function(event){
        event.preventDefault();
        let studentName = studentNameObj.value;
        let studentGrade = studentGradeObj.value;
        let studentDepartment=[...studentDepartmentObj].find(c=>c.checked).value;
        
        if(validateStudentName(students, studentName)){
            if(validateGrade(studentGrade)){
                // add student
                addStudent(studentName, studentGrade, studentDepartment, tableObject);
            }else{
                alert("Enter Grade between 0 to 100");
            }
        }
        else{
            alert("Enter another name");
        }
    }
    
    filterSelectObject.addEventListener('change', function(event){
        filterStudents(filterSelectObject.value, tableObject);
    });
    sortSelectObject.addEventListener('change', function(event){
        event.preventDefault();
        sortStudents(sortSelectObject.value, tableObject);
    });
});


