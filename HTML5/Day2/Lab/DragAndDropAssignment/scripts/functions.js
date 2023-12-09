export const startDrag = function (e) {
  e.dataTransfer.setData("img", e.target);
};

export const endDrag = function (e) {
  e.preventDefault();
  e.target.style.display = "none";
};

export const dropImage = function (e, bottomElement) {
    console.log(e.dataTransfer.getData('img'));
  e.preventDefault();
  bottomElement.innerHTML += e.dataTransfer.getData("img");
};
