document.addEventListener("DOMContentLoaded", function () {
    let hamburger = document.getElementById("hamburger");
    let sidebar = document.getElementById("sidebar");
    let hamburgerIcon = document.getElementById("hamburger-icon");

    hamburger.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        hamburgerIcon.classList.toggle("active");
        if (sidebar.classList.contains("active")) {
            hamburgerIcon.textContent = "close";
        } else {
            hamburgerIcon.textContent = "menu";
        }
    });
});
