class Box {
  #boxDivObj;
  #top;
  #left;

  constructor() {
    this.#initializeProperties();
  }
  
  #initializeProperties(){
    this.#boxDivObj=document.querySelector('div');
    this.#top=this.#boxDivObj.getClientRects()[0].top;
    this.#left=this.#boxDivObj.getClientRects()[0].left;
  }
  moveUp() {
    if(this.#top>10)this.#top-=BOX_VERTICAL_SPEED; 
    this.#updateVerticalPosition(this.#top);

  }
  moveDown() {
    if(this.#top<window.innerHeight-this.#boxDivObj.getClientRects()[0].height-20){
      this.#top += BOX_VERTICAL_SPEED;
      this.#updateVerticalPosition(this.#top);
    }
  }
  moveRight() {
    if(this.#left<window.innerWidth-parseInt(this.#boxDivObj.getClientRects()[0].width)-10) this.#left+=BOX_Horizontal_SPEED;
    this.#updateHorizontalPosition(this.#left);
  }
  moveLeft() {
    if(this.#left>10)this.#left-=BOX_Horizontal_SPEED;
    this.#updateHorizontalPosition(this.#left);
  }
  #updateVerticalPosition(position){
    this.#boxDivObj.style.top=`${position}px`;
  }
  #updateHorizontalPosition(position){
    this.#boxDivObj.style.left=`${position}px`;
  }
}
