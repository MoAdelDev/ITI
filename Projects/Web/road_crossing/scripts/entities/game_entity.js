class Game{
    #box;
    #score;
    #line;

    constructor(){
        this.#box=new Box();
        this.#score=new Score();
        this.#line=new Line();
    }

    getBoxObject(){
        return this.#box;
    }
    getScoreObject(){
        return this.#score;
    }
    getLineObject(){
        return this.#line;
    }
    
}