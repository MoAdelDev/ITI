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
            let courseSelectedObj = this.querySelector(`#${event.target.id}`);
            leftList= selectCourse(leftList, courseSelectedObj,event);
        }
    };

    rightUlObj.onclick=function(event){
        if(event.target.localName=='li'){
            let courseSelectedObj = this.querySelector(`#${event.target.id}`);
            rightList=selectCourse(rightList, courseSelectedObj, event);
        }
    };

    rightBtnObj.onclick=function(){
        leftList=moveCourse(leftList, rightUlObj);
    }
    leftBtnObj.onclick=function(){
        rightList=moveCourse(rightList, rightListObj);
    }

});//load