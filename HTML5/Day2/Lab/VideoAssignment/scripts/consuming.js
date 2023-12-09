import { initializePlayListBtns , playPauseVideo, forwardVideo} from "./functions.js";
export let videosList=['1','2','3','4','5','6','7'];

window.addEventListener('load', function(){

    let videoPlayListSection=this.document.querySelector('#playlistsection');
    let videoElement=this.document.querySelector('video');
    initializePlayListBtns(videoPlayListSection, videoElement);
    videoElement.addEventListener('click', function(event){
        playPauseVideo(event.target);
    });

    videoElement.addEventListener('dblclick', function(event){
        forwardVideo(event.target);
    });
}); // Load