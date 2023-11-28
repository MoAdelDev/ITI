const validateGrade = (grade) => {
  if(grade != ""){
    if (grade >= 0 && grade <= 100) {
      return true;
    }
  }
  return false;
};

const validateStudentName = (students, studentName) => {
  if (studentName != "") {
    for (let i in students) {
      if (students[i].name == studentName) return false;
    }
  } else {
    return false;
  }
  return true;
};


const addStudent = (name, grade, department, tableObject) => {
  let student={
    name,
    department,
    grade,
  };

  students.push(student); // Push New Student to students array
  getStudents(students, tableObject);
};

const getStudents = (students, tableObject) => {
  document.querySelectorAll(".new_rows").forEach((element) => {
    element.remove();
  });
  for (let i in students) {

    // Create Elements
    let trObject = document.createElement("tr");
    trObject.classList.add(students[i].department);
    trObject.classList.add("new_rows");
    
    let tdName = document.createElement("td");
    tdName.innerText = students[i].name;

    let tdGrade = document.createElement("td");
    tdGrade.innerText = students[i].grade;

    // Create Delete button element and add on Click event to it.
    let tdDelete = document.createElement("td");
    let deleteBtn=document.createElement('button');
    deleteBtn.innerText='Delete'
    tdDelete.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', function(event){
      delete students[i];
      getStudents(students, tableObject);
    });

    // Append elements which created to table
    trObject.appendChild(tdName);
    trObject.appendChild(tdGrade);
    trObject.appendChild(tdDelete);
    tableObject.appendChild(trObject);
  }
};

const filterStudents = (filter, tableObject) => {
  let filterStudents = students.filter((item) => {
    if (filter == "all") {
      return true;
    } else if (filter == "success") {
      return item.grade >= 60;
    } else if (filter == "fail") {
      return item.grade <= 60;
    }
  });
  getStudents(filterStudents, tableObject);
};

const sortStudents = (comapareValue, tableObject) => {
  if (comapareValue == "name") {
    students.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else {
    students.sort((a, b) => a.grade - b.grade);
  }
  getStudents(students, tableObject);
};
