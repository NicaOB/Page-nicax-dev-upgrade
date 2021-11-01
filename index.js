function main(){
    const body = document.body;
    const buttonOpenMenu = document.querySelector(".nav__button-open-window");
    buttonOpenMenu.addEventListener("click", ()=>{
        menuHamburgerOpen();
    })
    const buttonCloseMenu = document.querySelector(".nav-mobile__button-close-window");
    buttonCloseMenu.addEventListener("click", ()=>{
        menuHamburgerClose();
    })
    loadFooter(body);
}

main();
