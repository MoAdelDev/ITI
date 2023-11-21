const cloneBoxByClassName = function (child, className, parentObject) {
    parentObject.append(child.cloneNode(true));
    child.onclick=null;
    child = document.querySelectorAll(className)[document.querySelectorAll(className).length - 1];
    child.onclick = function(){
        cloneBoxByClassName(this, className, parentObject);
    }
}