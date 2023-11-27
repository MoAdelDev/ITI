const convertWordToPascalCase = (fullName) => {
    return fullName.replace(
        /\w\S*/g,
        function (txt) {
            // Make first character to Uppercase and remaining character to lowercase  
            return txt[0].toUpperCase() + txt.slice(1).toLowerCase();
        }
    );
}

const getEmployee=(employee, imgObj, fullNameObj, genderObj, languageObj, salaryObj)=>{
    if(employee.image==''){
        let src=employee.gender.toLowerCase() == 'male' ? 'images/man.png':'images/woman.png';
        imgObj.setAttribute('src', src);    
    }
    
    fullNameObj.innerText=employee.fullName;
    genderObj.innerText=employee.gender;
    languageObj.innerText=employee.language;
    salaryObj.innerText=employee.salary;
}

const updateEmployee=(employee, imgObj, fullNameObj, genderObj, languageObj, salaryObj)=>{
    

    getEmployee(
        employee,
        imgObj,
        fullNameObj,
        genderObj,
        languageObj,
        salaryObj
      );
    }