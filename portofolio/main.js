// Beispiel: Navigation Highlight (optional)
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#fff";
        link.style.fontWeight = "bold";
    }
});



