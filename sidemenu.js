let sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.left = "0";
}

function closeMenu() {
    sideMenu.style.left = "-200px";
}

function closeMenuLinks(){
    if(window.innerWidth < 739) {
        closeMenu();
    }
}


