window.addEventListener('DOMContentLoaded', function() {
    var cookie = document.cookie;
    if (cookie !== "") {
        var level = cookie.split("=")[1];
        callLevel(level);
    }
});

function startTrail() {
    // Set trail title:
    // var trailTitle = document.getElementsByClassName("trail-title-container")[0];
    // trailTitle.innerHTML = "<h1 class=\"trail-title\">Spräggele-Challenge</h1><p class=\"trail-title\" id=\"trailProgress\"></p>";
    // Set initial cookie:
    // document.cookie = "level=0";
    // Update to initial content:
    callLevel(0);
}

function submitResult() {
    var result = document.getElementById("fname").value;
    fetch("resultcheck.php?result=" + result).then(x => x.text()).then(level => {
        level = parseInt(level);
        if (level > 0) {
            callLevel(level);
        } else {
            document.getElementById("fname").style.backgroundColor = "red";
        }
    });
}

function callLevel(level) {
    document.cookie = "level="+level+"; SameSite=Strict";
    if (document.getElementById("trailProgress")) {
        document.getElementById("trailProgress").innerText = level + "/10";
    } else {
        var trailTitle = document.getElementsByClassName("trail-title-container")[0];
        trailTitle.innerHTML = "<h1 class=\"trail-title\">Spräggele-Challenge</h1><p class=\"trail-title\" id=\"trailProgress\">" + level + "/10</p>";
    }
    fetch("servlet.php?level=" + level).then(x => x.text()).then(y => document.getElementById("mainBody").innerHTML = y);
}