(function loadFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = `<div class="footer__content">
    <img class="logo" src="./images/image-logo.png" alt="">
    <div class="footer__social-networks">
         <div class="footer__instagram">
             <a class="link-social-network" href="https://www.instagram.com/nucax9/?hl=es">
                 <span class="span-social-network">Instagram</span>
                 <img class="image-social-network" src="./components/footer/images/instagram.svg" alt="">
             </a>
         </div>   
         <div class="footer__linkedin">
             <a class="link-social-network" href="">
             <span class="span-social-network">Linkedin</span>
             <img class="image-social-network" src="./components/footer/images/linkedin.svg" alt="">
             </a>
         </div>
         <div class="footer__github">
             <a class="link-social-network"href="https://github.com/NicaOB">
                 <span class="span-social-network">Github</span>
                 <img class="image-social-network" src="./components/footer/images/github.svg" alt="">
             </a>
         </div>
    </div>
    </div>`;
    const body = document.body;
    body.appendChild(footer);
})();
