/* Fetch header and footer */
fetch("http://localhost/spielmi/res/header.html").then(x => x.text()).then(y => document.getElementsByClassName("header-container")[0].innerHTML = y);
fetch("http://localhost/spielmi/res/footer.html").then(x => x.text()).then(y => document.getElementsByClassName("footer-container")[0].innerHTML = y);

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