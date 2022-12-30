function toggle_button_menu() {
    toggle_button("menu-main-card", true);
}

function toggle_button(name, inline) {
    var a = document.getElementById(name);
    if (a.style.display === "none") {
        if (inline) {
            a.style.display = "inline-block";
        }
        else {
            a.style.display = "block";
        }
    } else {
        a.style.display = "none";
    }
}