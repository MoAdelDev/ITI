class Game{
    static isBoxHittedTheLine = false;

    #box;
    #score;
    #id;

    constructor(){
        this.#box=new Box();
        this.#score=new Score();
        this.#startGame();
    }

    get box(){
        return this.#box;
    }
    get score(){
        return this.#score;
    }
    #startGame(){
        new Line(this.#box.boxDivObj);
        this.#id=setInterval(()=>{
            if(Game.isBoxHittedTheLine){
                clearInterval(this.#id);
                delete this;
                this.#score=null;
            }
            new Line(this.#box.boxDivObj);
        }, 8000);
    }
}