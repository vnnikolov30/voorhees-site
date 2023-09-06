function fadeInSpotify() {
    var spotifyContainer = document.getElementById("spotify-container");
    if (spotifyContainer) {
        spotifyContainer.style.opacity = "1";
        spotifyContainer.classList.remove("hidden");
    }
}

// Add a delay before fading in (adjust the delay time in milliseconds as needed)
setTimeout(fadeInSpotify, 1000); // 1000 milliseconds = 1 second