const icon = document.querySelector(".berger_icon")
const body = document.querySelector("body")

icon.onclick = function() {
    body.classList.add("overlay_screen_active")
}