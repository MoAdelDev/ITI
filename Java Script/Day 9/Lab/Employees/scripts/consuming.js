window.addEventListener("load", function () {
  let employee_1 = new Employee("Male", 10000, "Engish");
  employee_1.fullName = "Mohammed adel";
  let employee_2 = new Employee("Male", 10000, "Engish");
  employee_2.fullName = "Mohammed adel";
  let employee_3 = new Employee("Female", 10000, "Engish");
  employee_3.fullName = "mohammed abdelaziz";

  let employee = employee_2;
  let imageObj = this.document.querySelector("#profile_img");
  let fullNameObj = this.document.querySelector("#full_name");
  let genderObj = this.document.querySelector("#gender_text");
  let languageObj = this.document.querySelector("#language_text");
  let salaryObj = this.document.querySelector("#salary_text");

  getEmployee(
    employee,
    imageObj,
    fullNameObj,
    genderObj,
    languageObj,
    salaryObj
  );

  employee.fullName = "Ahmed mostata";
  employee.gender = "Male";
  employee.salary = "20000";
  employee.language = "Arabic";

  getEmployee(
    employee,
    imageObj,
    fullNameObj,
    genderObj,
    languageObj,
    salaryObj
  );
});
