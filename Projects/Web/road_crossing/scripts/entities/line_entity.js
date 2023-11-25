class Line{
    #topLineObj;
    #bottomLineObj;
    #id;
    #right;
    constructor(){
        this.#createElements();
        this.#setStyleOfLines();
        this.#setTopLineHeight();
        this.#setBottomLineHeight();
        this.#show();
        this.#getLinePosition();
        this.#startMoving();
    }

    #createElements(){
        this.#topLineObj=document.createElement('div');
        this.#bottomLineObj=document.createElement('div');
    }
    #setStyleOfLines(){
        this.#topLineObj.classList.add('top_line');
        this.#bottomLineObj.classList.add('bottom_line');
        this.#topLineObj.style.right=20+'px';
        this.#bottomLineObj.style.right=20+'px';
    }

    #setTopLineHeight(){
        let topLineHeight=getRandomrizedNumber(10, window.innerHeight-300);
        this.#topLineObj.style.height=topLineHeight+"px";
    }

    #setBottomLineHeight(){
        let bottomLineHeight=window.innerHeight- parseFloat(this.#topLineObj.style.height) - 60;
        this.#bottomLineObj.style.height=bottomLineHeight-60+"px";
    }
    #getLinePosition(){
        this.#right=parseFloat(this.#topLineObj.style.right);
    }
    #show(){
        let bodyObj=document.querySelector('body');
        bodyObj.appendChild(this.#topLineObj.cloneNode(true));
        bodyObj.appendChild(this.#bottomLineObj.cloneNode(true));
    }

    #startMoving(){
        this.#id=setInterval(()=>{
            this.#updatePosition();

        }, 200);
    }
    #updatePosition(){
        this.#right+=20;
        this.#topLineObj.style.right=this.#right+"px";
        this.#bottomLineObj.style.right=this.#right+"px";
    }
}