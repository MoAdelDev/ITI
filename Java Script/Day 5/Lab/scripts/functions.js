
const createTrackList=(trackId, parentElement)=>{
    let trackListObject=document.createElement('ul');
    trackListObject.innerText=trackId;
    trackListObject.className=trackId;
    parentElement.append(trackListObject);
    return trackListObject;
}

const addCourse=(courseName, listTrackElement)=>{
    let courseObject=document.createElement('li');
    courseObject.innerText=courseName;
    courseObject.className=courseName;
    listTrackElement.append(courseObject);
    return courseObject;
}

const removeCourse=(courseName, listTrackElement)=>{
    let listObject=listTrackElement.getElementsByTagName('li');
    for(let i in listObject){
        if(listObject[i].textContent=== courseName){
            listTrackElement.removeChild(listObject[i]);
            break;
        }
    }
    return listObject;
}