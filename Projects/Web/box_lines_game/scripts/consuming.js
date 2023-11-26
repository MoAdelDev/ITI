window.addEventListener('load', function(){
    let game=new Game();
    this.document.addEventListener('keydown', function(event){
        if(!Game.isBoxHittedTheLine){
            if(event.key=='ArrowRight'){
                game.box.moveRight();
            }
            else if(event.key=='ArrowLeft'){
                game.box.moveLeft();
            }
            else if(event.key=='ArrowUp'){
                game.box.moveUp();
            }
            else if(event.key=='ArrowDown'){
                game.box.moveDown();
            }
        }   
    });
});