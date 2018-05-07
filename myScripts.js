// dropdown nav item is clicked
function dropdownClicked() {
    var drop = document.getElementById("dropdown");

    // display dropdown items and rotate dropdown icon
    if (drop.className === "dropdown-content") {
        drop.className = "dropdown-content clicked";
        document.getElementById("dropdown-icon").style.transform = "rotate(180deg)";
        document.getElementById("dropdown-btn").className = "dropdown-btn active";
    } else {
        drop.className = "dropdown-content";
        document.getElementById("dropdown-icon").style.transform = "none";
        document.getElementById("dropdown-btn").className = "dropdown-btn";
    }

    return false;
}