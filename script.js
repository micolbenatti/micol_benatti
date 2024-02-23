var nome = "Micol";
var eta = 23;
console.log (nome + " " + eta);

const menu = document.querySelector('#menu')
const toggle = document.querySelector('#toggle')

const toggleMenu = () => {
    toggle.classList.toggle('is-active')
    menu.classList.toggle('active')
}
document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('click', toggleMenu)
});


//window load
window.onload = () => {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

    const hideLoading = () =>{
        loading.style.display = "none";
        content.style.opacity = 1;
        console.log("loaded");
    };
    setTimeout(hideLoading, 2000); //la funzione hideLoading viene eseguita dopo 2s
};


//read more con aggiunta di classe in css
const readMoreBtn = document.getElementById('read-more-btn');
const addText = document.getElementsByClassName('add-text')[0]; //seleziona il primo elemento con classe add-text

readMoreBtn.addEventListener('click', () => {
    addText.classList.toggle('show-add-text'); // Aggiungi o rimuovi la classe per mostrare o nascondere il testo aggiuntivo
    if (readMoreBtn.textContent === 'Read more') { // operatore di uguaglianza, uguali per valore e per tipo
        readMoreBtn.textContent = 'Read less';
    } else {
        readMoreBtn.textContent = 'Read more';
    }
});
