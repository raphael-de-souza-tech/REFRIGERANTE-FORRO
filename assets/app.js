
document.addEventListener("DOMContentLoaded", function() {
    let botao = document.querySelector(".botao-pesquisa button");

    if (botao) {
        botao.addEventListener("click", function() {
            window.open("https://www.google.com/search?q=forro+refrigerante&ie=UTF-8", "_blank");
        });
    }
});