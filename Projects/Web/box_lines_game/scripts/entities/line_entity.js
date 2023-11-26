class Line {
  #topLineObj;
  #bottomLineObj;
  #id;
  #right;
  #boxDivObj;
  constructor(boxDivObj) {
    this.#boxDivObj = boxDivObj;
    this.#createElements();
    this.#setStyleOfLines();
    this.#right = parseFloat(this.#topLineObj.style.right);
    this.#startMoving();
  }

  #createElements() {
    this.#topLineObj = document.createElement("div");
    this.#bottomLineObj = document.createElement("div");
  }
  #setStyleOfLines() {
    this.#topLineObj.classList.add("top_line");
    this.#bottomLineObj.classList.add("bottom_line");
    this.#topLineObj.style.right = 20 + "px";
    this.#bottomLineObj.style.right = 20 + "px";

    // Top line height
    let topLineHeight = getRandomrizedNumber(10, window.innerHeight - 300);
    this.#topLineObj.style.height = topLineHeight + "px";

    // Bottom line height
    let bottomLineHeight =
      window.innerHeight - parseFloat(this.#topLineObj.style.height) - 60;
    this.#bottomLineObj.style.height = bottomLineHeight - 60 + "px";

    // Show lines
    let bodyObj = document.querySelector("body");
    bodyObj.appendChild(this.#topLineObj);
    bodyObj.appendChild(this.#bottomLineObj);
  }

  #startMoving() {
    this.#id = setInterval(() => {
      if (this.#right > window.innerWidth) {
        clearInterval(this.#id);
      } else {
        this.#right += 2;
        this.#topLineObj.style.right = this.#right + "px";
        this.#bottomLineObj.style.right = this.#right + "px";
        this.#checkCollision();
        if (Game.isBoxHittedTheLine) {
          clearInterval(this.#id);
        }
      }
    }, 20);
  }

  #checkCollision() {
    let boxRight = this.#boxDivObj.getBoundingClientRect().right;
    let boxLeft = this.#boxDivObj.getBoundingClientRect().left;
    let boxTop = this.#boxDivObj.getBoundingClientRect().top;
    let boxBottom = this.#boxDivObj.getBoundingClientRect().bottom;

    let topLineLeft = this.#topLineObj.getBoundingClientRect().left;
    let topLineHeight = this.#topLineObj.getBoundingClientRect().height;

    let bottomLineLeft = this.#bottomLineObj.getBoundingClientRect().left;
    let bottomLineTop = this.#bottomLineObj.getBoundingClientRect().top;
    // Check if the box is hitting the top line
    if (
      topLineLeft > boxLeft &&
      topLineLeft < boxRight &&
      bottomLineLeft > boxLeft &&
      bottomLineLeft < boxRight
    ) {
      if (!(boxTop > topLineHeight && boxBottom < bottomLineTop)) {
        Game.isBoxHittedTheLine= true;
      }
    }
    return true;
  }
}
