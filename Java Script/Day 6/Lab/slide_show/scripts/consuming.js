window.addEventListener('load', function () {
    let currentIndex = 0;
    let images = [];
    let intervalId = null;

    addImages(images);

    // Set src image to image element
    setImageSrc(images, currentIndex);

    let nextButtonObj = document.querySelector('#next_btn');
    let previousButtonObj = document.querySelector('#previous_btn');
    let slideShowButtonObj = document.querySelector('#slide_show_btn');
    let stopButtonObj = document.querySelector('#stop_btn');

    nextButtonObj.onclick = function () {
        if (intervalId == null) {
           currentIndex=nextImage(images, currentIndex);
        }
    
    };
    previousButtonObj.onclick = function () {
        if (intervalId == null)
            currentIndex=previousImage(images, currentIndex);
            
    };
    slideShowButtonObj.onclick = function () {
        if (intervalId == null)
            intervalId = startSlideShow(images, currentIndex);
    }
    
    stopButtonObj.onclick = function () {
        if (intervalId != null)
            intervalId = stopSlideShow(intervalId);
    }
});