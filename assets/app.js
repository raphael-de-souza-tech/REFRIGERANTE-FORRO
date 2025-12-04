
///////////////////////////
// conjunto de cerveja 01, efeito vibrar 
const containerEl = document.querySelector(".banner");
const patoEl = document.querySelector(".conj");

patoEl.addEventListener("mouseenter", () => {
    containerEl.classList.add("active-conj");
});

patoEl.addEventListener("mouseleave", () => {
    containerEl.classList.remove("active-conj");
});