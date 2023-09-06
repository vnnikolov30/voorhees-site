document.addEventListener("DOMContentLoaded", function () {
    let mediaElements = document.querySelectorAll(".vid, .img");
    let overlay = document.querySelector(".overlay");

    mediaElements.forEach(function (media) {
        media.addEventListener("click", function () {
            media.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    });

    overlay.addEventListener("click", function () {
        mediaElements.forEach(function (media) {
            media.classList.remove("active");
        });
        overlay.classList.remove("active");
    });
});