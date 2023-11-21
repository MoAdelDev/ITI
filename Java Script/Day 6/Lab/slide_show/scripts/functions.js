const addImages = (images) => {
    for (let i = 0; i < 5; i++) {
        images.push(`images/${i + 1}.jpg`);
    }
}

const setImageSrc = (images, currentIndex) => {
    let imageObject = document.querySelector('img');
    imageObject.src = images[currentIndex];
}

const nextImage = (images, currentIndex) => {
    if (currentIndex != images.length - 1)
        currentIndex++;

    else
        currentIndex = 0;

    setImageSrc(images, currentIndex);
    return currentIndex;
}

const previousImage = (images, currentIndex) => {
    if (currentIndex != 0)
        currentIndex--;

    else
        currentIndex = images.length - 1;

    setImageSrc(images, currentIndex);

    return currentIndex;
}
const startSlideShow=(images, currentIndex)=>{
    let intervalId = setInterval(function () {
       currentIndex = nextImage(images, currentIndex);
    }, 1500);
    return intervalId
}

const stopSlideShow=(intervalId)=>{
    clearInterval(intervalId);
    return null;
}