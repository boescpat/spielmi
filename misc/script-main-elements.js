/* Fetch header and footer */
fetch("https://spielmi.ch/misc/header-main.html").then(x => x.text()).then(y => document.getElementById("header-main").innerHTML = y);
fetch("https://spielmi.ch/misc/footer-main.html").then(x => x.text()).then(y => document.getElementById("footer-main").innerHTML = y);

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleBurgerMenu() {
    var burgerMenu = document.getElementById("burgerMenu");
    var overlay = document.getElementById("overlay");
    if (burgerMenu.style.display === "block") {
        burgerMenu.style.display = "none";
        overlay.style.display = "none";
    } else {
        burgerMenu.style.display = "block";
        overlay.style.display = "block";
    }
} 