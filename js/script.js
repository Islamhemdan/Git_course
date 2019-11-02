 /*Load the content*/
 var playBtn = document.querySelector('[value="|>"]');
 var pauseBtn = document.querySelector('[value="||"]');
 var stopBtn = document.querySelector('[value="[]"]');
 var fullScrBtn = document.querySelector('[value="[ ]"]');
 var seekBar = document.querySelector('[type="range"]');
 var video = document.querySelector('video')
 var lec1 = document.querySelector('#lec1');
 var lec2 = document.querySelector('#lec2');
 var lec3 = document.querySelector('#lec3');
 var lec4 = document.querySelector('#lec4');
 var lec5 = document.querySelector('#lec5');
 var lec6 = document.querySelector('#lec6');
 /*Handle Events*/
 playBtn.addEventListener('click', function () {
     video.play()
 })
 pauseBtn.addEventListener('click', function () {
     video.pause()
 })
 stopBtn.addEventListener('click', function () {
     video.pause()
     video.currentTime = 0;
 })
 fullScrBtn.addEventListener('click', function () {
     video.webkitEnterFullScreen();
 })
 video.addEventListener('timeupdate', function () {
     seekBar.value = (video.currentTime * 100) / video.duration
 })
 seekBar.addEventListener('change', function () {
     video.currentTime = (seekBar.value * video.duration) / 100
 })
 lec1.addEventListener('click', function () {
    video.src = "./videos/1.mp4";
    video.play()
})
lec2.addEventListener('click', function () {
    video.src = "./videos/2.mp4";
    video.play()
})
lec3.addEventListener('click', function () {
    video.src = "./videos/3.mp4";
    video.play()
})
lec4.addEventListener('click', function () {
    video.src = "./videos/4.mp4";
    video.play()
})
lec5.addEventListener('click', function () {
    video.src = "./videos/5.mp4";
    video.play()
})
lec6.addEventListener('click', function () {
    video.src = "./videos/6.mp4";
    video.play()
})