window.addEventListener('load', function(){
    let courseSubmitObj=this.document.querySelector("input[type=submit]");
    let courseInputObj= this.document.querySelector("input[name=course]");
    let leftListObj=this.document.querySelector("#left_list");
    let rightListObj=this.document.querySelector("#right_list");

    let leftBtnObj=document.querySelector("#left_btn");
    let rightBtnObj=document.querySelector("#right_btn");

    let leftList=[];
    let rightList=[];
    courseSubmitObj.onclick=function(event){
        event.preventDefault();
        let courseName=courseInputObj.value;
        if(courseName != ""){
            let liObj=document.createElement("li");
            liObj.innerText=courseName;
            liObj.id=courseName;
            leftListObj.append(liObj);
        }
    };
    
    leftListObj.onclick=function(event){
        if(event.target.localName=='li'){
            let courseSelectedObj=this.querySelector(`#${event.target.id}`);
            let courseSelectedName=courseInputObj.outerText;
            if(!leftList.includes(event.target.id)) { 
                leftList.push(event.target.id);   
                courseSelectedObj.classList.add('focus');
            }
            else{
                leftList.pop(event.target.id);   
                courseSelectedObj.classList.remove('focus');
            }
        }
    };

    rightListObj.onclick=function(event){
        if(event.target.localName=='li'){
            let courseSelectedObj=this.querySelector(`#${event.target.id}`);
            let courseSelectedName=courseInputObj.outerText;
            if(!rightList.includes(event.target.id)) { 
                rightList.push(event.target.id);   
                courseSelectedObj.classList.add('focus');
            }
            else{
                rightList.pop(event.target.id);   
                courseSelectedObj.classList.remove('focus');
            }
        }
    };

    rightBtnObj.onclick=function(){
        for(let i=0; i<leftList.length; i++){
            let liObj=document.querySelector(`#${leftList[i]}`);
            liObj.classList.remove('focus')
            rightListObj.append(liObj);
        }
        leftList=[];

    }
    leftBtnObj.onclick=function(){
        for(let i=0; i<rightList.length; i++){
            let liObj=document.querySelector(`#${rightList[i]}`);
            liObj.classList.remove('focus')
            leftListObj.append(liObj);
        }
        rightList=[];
    }
    



});//load