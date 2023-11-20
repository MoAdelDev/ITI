const addTrackList=(trackId, parentElement)=>{
    let trackListObject = document.createElement('ul');
    trackListObject.id=trackId;
    trackListObject.innerText=trackId.toUpperCase();
    addOption(trackId.toUpperCase());
    parentElement.appendChild(trackListObject);
}

const addOption=(optionName)=>{
    let optionObject = document.createElement('option');
    optionObject.innerText=optionName.toUpperCase();
    optionObject.id=optionName;
    document.querySelector('select[name=track_menu]').appendChild(optionObject);
}
const addCourse=(courseName, listTrackElement)=>{
    let courseObject = document.createElement('li');
    courseObject.id=courseName;
    courseObject.innerText=courseName.toUpperCase();
    listTrackElement.appendChild(courseObject);
}
