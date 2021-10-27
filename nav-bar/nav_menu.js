function openMenu(header){
    const component = document.createElement("nav")
    component.classList.add("nav")
    const menu = `
     <div class="nav__content">
         <button class="nav__button-close-window">
             <img src="./images/close-icon.svg" alt="">
         </button>
         <div class="nav__link-content">
             <a href="" class="nav__link">Portfolio</a>
             <a href="" class="nav__link">Servicios</a>
             <a href="" class="nav__link">Contacto</a>
         </div>
     </div>`;
    component.innerHTML = menu;
    header.appendChild(component)
    const etiq = document.querySelector(".nav");
    etiq.setAttribute("style", "display: inherit");
    const hideIcon = document.querySelector(".header__nav");
    hideIcon.setAttribute("style", "display: none");
}

function closeMenu(){
    const showIconMenu = document.querySelector(".header__nav");
    showIconMenu.setAttribute("style", "display: inherit")
    const navMenu = document.querySelector(".nav");
    if(navMenu){
        navMenu.remove()
    }
}