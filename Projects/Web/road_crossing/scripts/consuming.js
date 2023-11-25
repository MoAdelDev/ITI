window.addEventListener('load', function(){
    let box=new Box();

    this.document.addEventListener('keydown', function(event){
        if(event.key=='ArrowRight'){
            box.moveRight();
        }
        else if(event.key=='ArrowLeft'){
            box.moveLeft();
        }
        else if(event.key=='ArrowUp'){
            box.moveUp();
        }
        else if(event.key=='ArrowDown'){
            box.moveDown();
        }
    });
});