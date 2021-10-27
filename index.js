function main(){
    var navMenu = document.querySelector(".header")
    var buttonOpen = document.querySelector(".nav__button-open-window");
    buttonOpen.addEventListener("click", ()=>{
        openMenu(navMenu);
        var buttonClose = document.querySelector(".nav__button-close-window");
        buttonClose.addEventListener("click", () =>{
        closeMenu();
    })
    })
    
}

main();
