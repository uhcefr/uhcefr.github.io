function toggle_button_menu() {
    toggle_button("menu-main-card", true);
}

function toggle_button(name, inline) {
    var a = document.getElementById(name);
    var b = document.getElementById("button_menu");

    if (a.style.display === "none") {
        if (inline) {
            a.style.display = "inline-block";
        }
        else {
            a.style.display = "block";
        }
        b.textContent = "Close";
    } else {
        a.style.display = "none";
        b.textContent = "Menu";
    }
}