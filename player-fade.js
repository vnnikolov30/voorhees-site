function fadeInSpotify() {
    let spotifyContainer = document.getElementById("spotify-container");
    if (spotifyContainer) {
        spotifyContainer.style.opacity = "1";
        spotifyContainer.classList.remove("hidden");
    }
}


setTimeout(fadeInSpotify, 500); // 1000 milliseconds = 1 second