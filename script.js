let menuOpen = false;

function toggleMenu() {
    const menu = document.getElementById("sideMenu");

    if(menuOpen) {
        menu.style.right = "-250px";
        menuOpen = false;
    } else {
        menu.style.right = "0";
        menuOpen = true;
    }
}