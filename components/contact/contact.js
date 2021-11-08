(function loadContact(){
    const contact = document.createElement("section");
    contact.classList.add("section-contact");
    contact.innerHTML = `<div class="section-contact__content">
    <h2 class="section-contact__title">Escribime</h2>
    <form class="form-contact">
        <div class="form-contact__content">
            <div class="form-contact__name">
                <label class="label-form" for="name">Nombre</label>
                <input class="input-form" id="name" name="name" type="text">
            </div>
            <div class="form-contact__email">
                <label class="label-form" for="email">Email</label>
                <input class="input-form" id="email" name="to" type="text">
            </div>
            <div class="form-contact__message">
                 <label class="label-form" for="message">Mensaje</label>
                 <textarea class="textarea-form" name="message" id="message"></textarea>
            </div>
            <button type="submit" class="form-contact__send-form">Enviar</button>
        </div>
    </form>
    </div>`;
    const body = document.body;
    const footer = document.querySelector(".footer");
    body.insertBefore(contact, footer)
    sendForm();
})();

function sendForm(){
    const form = document.querySelector(".form-contact");
    form.addEventListener("submit", (ev) =>{
        ev.preventDefault();
        const data = new FormData(ev.target)
        const value = Object.fromEntries(data.entries());
        fetch("https://apx-api.vercel.app/api/utils/dwf",{
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(value),
        })
    })
}