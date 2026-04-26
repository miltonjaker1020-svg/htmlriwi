// MENU HAMBURGUESA
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// ANIMACIONES AL SCROLL
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (top < trigger) {
            sec.classList.add("show");
        }
    });
});