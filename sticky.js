window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.style.background = 'rgba(10, 10, 10, 1)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0)';
    }
});




