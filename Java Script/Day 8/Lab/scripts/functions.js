const createBall=(top, left, radius, color)=>{
    let ball={
        top:top,
        left:left,
        radius:radius,
        color:color,
        calculateArea(){
            let area=Math.pow(this.radius, 2) * 3.14;
            return area;
        },
        toString(){
            return `top: ${this.top}, left: ${this.left}, radius: ${this.radius}, area: ${this.calculateArea()}, color:${this.color}`;
        }
    };
    return ball;
}

