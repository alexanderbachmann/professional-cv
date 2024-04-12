document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.querySelector(".aspect-[672/494]");
    const video = videoContainer.querySelector("video");

    videoContainer.addEventListener("mouseenter", function() {
        video.play();
    });

    videoContainer.addEventListener("mouseleave", function() {
        video.pause();
    });
});
