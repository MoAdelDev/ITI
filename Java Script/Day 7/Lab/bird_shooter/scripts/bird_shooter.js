window.addEventListener('load',function(){
    let birdImgObj=document.querySelector("#bird");
    let number = Math.round(Math.random() * (window.innerHeight-50 - 5) + 1) + 5;
    birdImgObj.style.top=number+"px";
    moveRight(birdImgObj, 0);

    this.document.onclick=function(event){
        shootBird(birdImgObj, event.x, event.y);
    }
});