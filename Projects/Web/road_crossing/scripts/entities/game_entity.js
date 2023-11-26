class Game {
  static isBoxHittedTheLine;

  #box;
  #score;
  #id;

  constructor() {
    this.#startGame();
  }

  get box() {
    return this.#box;
  }
  get score() {
    return this.#score;
  }
  #startGame() {
    Game.isBoxHittedTheLine=false;
    this.#box = new Box();
    this.#score = new Score();
    this.#removeAllLines();
    
    new Line(this.#box.boxDivObj);
    this.#id = setInterval(() => {
      if (Game.isBoxHittedTheLine) {
        clearInterval(this.#id);
        alert(`Game Over: your score is ${this.#score.score}`);
        this.#startGame();
      }else{
        new Line(this.#box.boxDivObj);
      }
    }, 8000);
  }
  #removeAllLines(){
    let topLines=document.querySelectorAll('.top_line');
    topLines.forEach(topLine => {
        topLine.remove();
    });
    let bottomLines=document.querySelectorAll('.bottom_line');
    bottomLines.forEach(bottomLine => {
        bottomLine.remove();
    });
  }
}
