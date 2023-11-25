window.addEventListener('load', function(){
    let game=new Game();
    
    this.document.addEventListener('keydown', function(event){
        if(event.key=='ArrowRight'){
            game.getBoxObject().moveRight();
        }
        else if(event.key=='ArrowLeft'){
            game.getBoxObject().moveLeft();
        }
        else if(event.key=='ArrowUp'){
            game.getBoxObject().moveUp();
        }
        else if(event.key=='ArrowDown'){
            game.getBoxObject().moveDown();
        }
    });
});