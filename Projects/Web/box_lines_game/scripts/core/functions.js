const getRandomrizedNumber=(min, max)=>{
    let randomNumber = Math.random() * (max - min) + 1 + min;
    return randomNumber;
}