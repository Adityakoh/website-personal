<script src="script.js" defer></script>
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#nav-links li a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});