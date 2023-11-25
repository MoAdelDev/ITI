class Score{
    #scoreObject;
    #score;
    #id;
    constructor(){
        this.#score=0;
        this.#scoreObject=document.querySelector('#score');
        this.#start();
    }

    #start(){
        this.#id=setInterval(()=>{
            this.#score++;
            this.#scoreObject.innerText=`Score : ${this.#score.toString()}`;
        }, 10);
    }

    #stop(){
        clearInterval(this.#id);
    }
}