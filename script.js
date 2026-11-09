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


/*aparicion de las cosas al ir bajando*/

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add("visible"));
}, { threshold: .15 });

document.querySelectorAll(".box, .project-card").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
});