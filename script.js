const backgroundVideo = document.getElementById('backgroundVideo');
const muteButton = document.getElementById('muteButton');
const playPauseButton = document.getElementById('playPauseButton');
const backToTopButton = document.getElementById('backToTop');
const scrollToSocialLinks = document.getElementById('scrollToSocialLinks')

let isMuted = true;
let isPaused = false;


muteButton.innerHTML = '<i class="fas fa-volume-up"></i>'; 

muteButton.onclick = function () {
    isMuted = !isMuted;
    backgroundVideo.muted = isMuted;

    
    if (isMuted) {
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';  
    } else {
        muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';    
    }
};


playPauseButton.onclick = function () {
    isPaused = !isPaused;
    if (isPaused) {
        backgroundVideo.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';  
    } else {
        backgroundVideo.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; 
    }
};


window.onscroll = function () {
    backToTopButton.style.display = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? "block" : "none";
};


backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

scrollToSocialLinks.onclick = function (){
    window.scrollTo({top: 500, behavior: 'smooth'});
};
