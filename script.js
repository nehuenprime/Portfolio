const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menuMobile = document.getElementById("menuMobile");
const overlay = document.getElementById("overlay");

function abrirMenu(){
    menuMobile.classList.add("active");
    overlay.classList.add("active");
}

function cerrarMenu(){
    menuMobile.classList.remove("active");
    overlay.classList.remove("active");
}

menuBtn.addEventListener("click", abrirMenu);
closeBtn.addEventListener("click", cerrarMenu);
overlay.addEventListener("click", cerrarMenu);

const linksMobile = document.querySelectorAll("#menuMobile a");

linksMobile.forEach(link => {
    link.addEventListener("click", cerrarMenu);
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") cerrarMenu();
});

/*aparicion de las cosas al ir bajando*/

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add("visible"));
}, { threshold: .15 });

document.querySelectorAll(".box, .project-card").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
}); 


/*fondo oscuro*/

const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");
const root = document.documentElement;

function aplicarTema(tema){
    root.setAttribute("data-theme", tema);
    localStorage.setItem("tema", tema);

    themeIcon.className = tema === "light" ? "bi bi-moon-stars-fill" : "bi bi-sun-fill";
    themeBtn.setAttribute("aria-label", tema === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro");
}

aplicarTema(localStorage.getItem("tema") || "dark");

themeBtn.addEventListener("click", () => {
    aplicarTema(root.getAttribute("data-theme") === "light" ? "dark" : "light");
});