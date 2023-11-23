const addCourse = (courseName, leftListObj) => {
    let liObj = document.createElement("li");
    liObj.innerText = courseName;
    liObj.id = courseName;
    leftListObj.append(liObj);
}

const selectCourse = (courseList, courseSelectedObj,event) => {
    if (!courseList.includes(event.target.id)) {
        courseList.push(event.target.id);
        courseSelectedObj.classList.add('focus');
    }
    else {
        courseList.pop(event.target.id);
        courseSelectedObj.classList.remove('focus');
    }
    return courseList;
}

const moveCourse=(courseList, ulObj)=>{
    for(let i=0; i<courseList.length; i++){
        let liObj=document.querySelector(`#${courseList[i]}`);
        liObj.classList.remove('focus')
        ulObj.append(liObj);
    }
    courseList=[];
    return courseList;
}