import { dropImage as dropImage, endDrag, startDrag } from "./functions.js";
window.addEventListener("load", function () {
  let images = this.document.querySelectorAll("img");
  let top = this.document.querySelector("#draggersection");
  let bottom = this.document.querySelector("#droppersection");
  let imagesCount = images.length;
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("dragstart", startDrag);
    images[i].addEventListener("dragend", endDrag);
  }

  bottom.addEventListener("drop", function (event) {
    console.log(event.target.getBoundingClientRect());

    imagesCount--;
    if(imagesCount==0){
        top.innerText="Empty";
    }
    dropImage(event, bottom);
  });

  bottom.addEventListener("dragover", function (event) {
    event.preventDefault();

    event.target.style.backgroundColor = "lightgreen";
    dropImage(event, bottom);
  });

  top.addEventListener("dragleave", function (event) {
    event.preventDefault();
  });
}); //load
