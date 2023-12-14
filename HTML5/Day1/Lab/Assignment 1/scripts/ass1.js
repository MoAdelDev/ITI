window.addEventListener('load',function(){
    let startButtonObject=this.document.querySelector('#start_button');
    let stopButtonObject=this.document.querySelector('#stop_button');
    let boxSectionObject=this.document.querySelector('#box_section');

    startButtonObject.addEventListener('click', function(){
        boxSectionObject.style.animationPlayState="running";
    });

    stopButtonObject.addEventListener('click', function(){
        boxSectionObject.style.animationPlayState="paused";
    });

    boxSectionObject.addEventListener('mouseover', function(){
        boxSectionObject.style.animationPlayState="paused";
    })
});