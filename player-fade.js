function fadeInSpotify() {
    var spotifyContainer = document.getElementById("spotify-container");
    if (spotifyContainer) {
        spotifyContainer.style.opacity = "1";
        spotifyContainer.classList.remove("hidden");
    }
}

setTimeout(fadeInSpotify, 1000); // 1000 milliseconds = 1 second
