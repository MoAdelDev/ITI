// const moveBoxDown=(boxDivObj, boxDivTop)=>{
//     let top=parseFloat(boxDivTop);
//     if(top<window.innerHeight-parseInt(boxDivObj.style.height)-10)top+=10;
//     boxDivObj.style.top=top+"px";
// }

// const moveBoxUp=(boxDivObj, boxDivTop)=>{
//     let top=parseFloat(boxDivTop);
//     if(top>10)top-=10;
//     boxDivObj.style.top=top+"px";
// }

// const moveBoxRight=(boxDivObj, boxDivLeft)=>{
//     let left=parseFloat(boxDivLeft);
//     if(left<window.innerWidth-parseInt(boxDivObj.style.width)-10)left+=10;
//     boxDivObj.style.left=left+"px";
// }

// const moveBoxLeft=(boxDivObj, boxDivLeft)=>{
//     let left=parseFloat(boxDivLeft);
//     if(left>4)left-=10;
//     boxDivObj.style.left=left+"px";
// }

// const createLine=()=>{
//     let topLine=createTopLine();
//     let bottomHeight=window.innerHeight- topLine.height - 60;
//     let bottomLine=createBottomLine(bottomHeight-60);
//     return [topLine, bottomLine];
// }

// const createTopLine=()=>{
//     let lineHeight=getRandomrizedNumber(4, window.innerHeight-300);
//     let topLine=new Line('top_line', lineHeight,20,0,undefined,'red', 20);
//     let topLineObj=document.createElement('div');
//     topLineObj.style.height=lineHeight+"px";
//     topLineObj.classList.add(topLine.name);
//     document.querySelector('body').appendChild(topLineObj.cloneNode(true));
//     return topLine;
// }

// const createBottomLine=(height)=>{
//     let bottomLine=new Line('bottom_line', height,20,undefined,0,'red', 20);
//     let bottomLineObj=document.createElement('div');
//     bottomLineObj.style.height=height+"px";
//     bottomLineObj.classList.add(bottomLine.name);
//     document.querySelector('body').appendChild(bottomLineObj.cloneNode(true));
// }
// const getRandomrizedNumber=(min, max)=>{
//     let randomNumber = Math.random() * (max - min) + 1 + min;
//     return randomNumber;
// }
