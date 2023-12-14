import { videosList } from "./consuming.js";

export const initializePlayListBtns = function (
  videoPlayListSection,
  videoElement
) {
  let buttonElement;
  for (let i = 0; i < videosList.length; i++) {
    buttonElement = document.createElement("input");
    buttonElement.type = "button";
    buttonElement.value = `Video ${i + 1}`;
    buttonElement.classList.add("videobtn");
    if (i == 0) buttonElement.classList.add("videobtnfocus");

    buttonElement.addEventListener("click", function (event) {
      for (let item of document.querySelectorAll(
        "input[class*=videobtnfocus]"
      )) {
        item.classList.remove("videobtnfocus");
      }
      event.target.classList.add("videobtnfocus");
      videoElement.setAttribute("src", `videos/${i + 1}.mp4`);
      videoElement.play();
    });
    videoPlayListSection.appendChild(buttonElement);
  }
};

export const playPauseVideo = function (element) {
  if (element.paused) {
    element.play();
  } else {
    element.pause();
  }
};

export const forwardVideo=function(element){
  element.currentTime+=3;
}
