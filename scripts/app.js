let pointer = document.getElementById("pointer");
let isMobile = window.innerWidth <= 768; // Check if mobile device

window.addEventListener("mousemove", function (e) {
    if (!isMobile) {
        // Move the pointer based on mouse position only on desktop
        pointer.style.left = (e.clientX - (pointer.offsetWidth / 2)) + "px";
        pointer.style.top = (e.clientY - (pointer.offsetHeight / 2)) + "px";

        // Pause animation when mouse is moved
        pointer.classList.add("no-animation");
    }
});

window.addEventListener("mouseleave", function () {
    // Re-enable animation when the mouse leaves the window
    pointer.classList.remove("no-animation");
});

window.addEventListener("resize", function () {
    isMobile = window.innerWidth <= 768;
});
