window.addEventListener('load', function(){
    let courseSubmitObj=this.document.querySelector("input[type=submit]");
    let courseInputObj= this.document.querySelector("input[name=course]");
    
    let rightListObj=this.document.querySelector("#left_list");
    let rightUlObj=this.document.querySelector("#right_list");

    let leftBtnObj=document.querySelector("#left_btn");
    let rightBtnObj=document.querySelector("#right_btn");

    let leftList=[];
    let rightList=[];
    courseSubmitObj.onclick=function(event){
        event.preventDefault();
        let courseName=courseInputObj.value;
        if(courseName != ""){
             addCourse(courseName, rightListObj);
        }
    };
    
    rightListObj.onclick=function(event){
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
        moveCourse(rightList, rightListObj);
    }

});//load