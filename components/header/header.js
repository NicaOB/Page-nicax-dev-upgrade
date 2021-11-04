(function loadHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    header.innerHTML = `<div class="header__content">
    <img class="logo" src="./images/image-logo.png" alt="">
    <div class="header__nav">
        <button class="nav__button-open-window">
            <img src="./components/header/images/icon-open-nav.svg" alt="">
        </button>
    </div>
    <nav class="nav-desktop">
        <div class="nav-desktop__content">
            <a href="./portfolio.html" class="nav-desktop__link">Portfolio</a>
            <a href="./servicios.html" class="nav-desktop__link">Servicios</a>
            <a href="./contacto.html" class="nav-desktop__link">Contacto</a>
        </div>
    </nav>
    </div>
    <nav class="nav-mobile">
        <div class="nav-mobile__content">
        <button class="nav-mobile__button-close-window">
            <img src="./components/header/images/icon-close-nav.svg" alt="">
        </button>
        <div class="nav-mobile__link-content">
            <a href="./portfolio.html" class="nav-mobile__link">Portfolio</a>
            <a href="./servicios.html" class="nav-mobile__link">Servicios</a>
            <a href="./contacto.html" class="nav-mobile__link">Contacto</a>
        </div>
        </div>
    </nav>
    `;
    const body = document.body;
    body.prepend(header)
})();

function menuHamburgerOpen() {
    document.querySelector(".nav-mobile").setAttribute("style", "display: inherit");
    document.querySelector(".nav__button-open-window").setAttribute("style", "display: none")
    document.querySelector(".header__content").setAttribute("style", "justify-content: center")
}

function menuHamburgerClose(){
    document.querySelector(".nav-mobile").setAttribute("style", "display: none");
    document.querySelector(".nav__button-open-window").removeAttribute("style");
    document.querySelector(".header__content").removeAttribute("style");
}