import { dropImage as dropImage, endDrag, startDrag } from "./functions.js";

window.addEventListener('load', function(){


    let images=this.document.querySelectorAll('img');
    let top=this.document.querySelector('#draggersection');
    let bottom=this.document.querySelector('#droppersection');
    
    for(let i=0;i<images.length; i++){
        images[i].addEventListener('dragstart', startDrag);
        images[i].addEventListener('dragend', endDrag);
    }
    
    bottom.addEventListener('drop', function(event){
        dropImage(event, bottom);
    });
    bottom.addEventListener('enterdrag', function(){
        console.log('Dropped');
        e.preventDefault();
    });

});//load