// botão
function contato(){
    window.open("https://www.google.com/search?q=forro+refrigerante");
}


// animação scroll
const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));