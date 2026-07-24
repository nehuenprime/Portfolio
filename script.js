const temaCache = localStorage.getItem("tema");

if (temaCache === "claro") {
    document.body.classList.add("modo-claro");
}

const button = document.getElementById("btn-modo");

if (button) {
    button.addEventListener("click", function () {
        document.body.classList.toggle("modo-claro");
        if (document.body.classList.contains("modo-claro")) {
            localStorage.setItem("tema", "oscuro");
        } else {
            localStorage.setItem("tema", "claro");
        }
    })
}
