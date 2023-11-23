window.addEventListener('load', function(){
    let courseSubmitObj=this.document.querySelector("input[type=submit]");
    let courseInputObj= this.document.querySelector("input[name=course]");
    
    let leftUlObj=this.document.querySelector("#left_list");
    let rightUlObj=this.document.querySelector("#right_list");

    let leftBtnObj=document.querySelector("#left_btn");
    let rightBtnObj=document.querySelector("#right_btn");

    let leftList=[];
    let rightList=[];
    courseSubmitObj.onclick=function(event){
        event.preventDefault();
        let courseName=courseInputObj.value;
        if(courseName != ""){
             addCourse(courseName, leftUlObj);
        }
    };
    
    leftUlObj.onmouseover=function(event){
        if(event.target.localName=='li'){
            let liObj=document.querySelector(`#${event.target.id}`);
            liObj.style.cursor='pointer';
        }
    }
    rightUlObj.onmouseover=function(event){
        if(event.target.localName=='li'){
            let liObj=document.querySelector(`#${event.target.id}`);
            liObj.style.cursor='pointer';
        }
    }
    leftUlObj.onclick=function(event){
        if(event.target.localName=='li'){
            selectCourse(leftList, this,event);
        }
    };

    rightUlObj.onclick=function(event){
        if(event.target.localName=='li'){
            selectCourse(rightList, this, event);
        }
    };

    rightBtnObj.onclick=function(){
        moveCourse(leftList, rightUlObj);
    }
    leftBtnObj.onclick=function(){
        moveCourse(rightList, leftUlObj);
    }

});//load