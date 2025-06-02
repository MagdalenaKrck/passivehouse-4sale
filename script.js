document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".icon");

    icons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.2)";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });
});
