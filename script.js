const menu = document.querySelector('#menu')
const toggle = document.querySelector('#toggle')

const toggleMenu = () => {
    toggle.classList.toggle('is-active')
    menu.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', () => {
    toggle.addEventListener('click', toggleMenu)
})

//window load
window.onload = () => {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

    const hideLoading = () =>{
        loading.style.display = "none";
        content.style.opacity = 1;
        console.log("loaded");
    };
    setTimeout(hideLoading, 2000);

};

    



//aggiungi testo che appare con bottone, accordion