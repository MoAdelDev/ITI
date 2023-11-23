let ball = {
    top: 20,
    left: 20,
    radius: 30,
    color: 'red',
    calculateArea() {
        let area = Math.pow(this.radius, 2) * 3.14;
        return area;
    },
    toString() {
        return `top: ${this.top}, left: ${this.left}, radius: ${this.radius}, area: ${this.calculateArea()}, color:${this.color}`;
    }
};
createBall(20, 30, 40, 'blue');
let balls = [createBall(20, 30, 40, 'blue'), createBall(5, 30, 60, 'red'), createBall(50, 10, 40, 'orange'), createBall(20, 50, 10, 'green')];


for (let i in balls) {
    let ball = balls[i];
    console.log(ball['color']);
    console.log(ball['calculateArea']());
}

// Sort Ascending by top
balls.sort((a, b)=>a['top']-b['top']);
console.log('Ascending Order by top');
console.table(balls);

// Sort Ascending by left
balls.sort((a, b)=>a['left']-b['left']);
console.log('Ascending Order by left');
console.table(balls);


