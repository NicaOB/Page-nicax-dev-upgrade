(function loadContact(){
    const contact = document.createElement("section");
    contact.classList.add("section-contact");
    contact.innerHTML = `<div class="section-contact__content">
    <h2 class="section-contact__title">Escribime</h2>
    <form class="form-contact">
        <div class="form-contact__content">
            <div class="form-contact__name">
                <label class="label-form" for="name">Nombre</label>
                <input class="input-form" id="name"type="text">
            </div>
            <div class="form-contact__email">
                <label class="label-form" for="email">Email</label>
                <input class="input-form" id="email" type="text">
            </div>
            <div class="form-contact__message">
                 <label class="label-form" for="message">Mensaje</label>
                 <textarea class="textarea-form" id="message"></textarea>
            </div>
            <button class="form-contact__send-form">Enviar</button>
        </div>
    </form>
    </div>`;
    const body = document.body;
    const footer = document.querySelector(".footer");
    body.insertBefore(contact, footer)
})();