
const validateGrade=(grade)=>{
    if(grade>=0 && grade<=100){
        return true;
    }
    return false;
}

const validateStudentName=(students, studentName)=>{
    if(studentName != '') {
        for(let i in students){
            if(students[i].name==studentName){
                return false;
            }
            return true;
        }
    }
    else{
        return false;
    }
    return true;
}



const addStudent=(name, grade, department, students)=>{
    let student = new Student(name, department, grade);
    students.push(student);
    console.log(students);
    return students;
}