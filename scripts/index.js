function putServices(object) {
    const services = document.querySelectorAll(".section-services__info");
    for (let i = 0; i < object.items.length; i++) {
        var ID = object.items[i].sys.contentType.sys.id;
        if(ID == "serviceMainPage"){
            var position = object.items[i].fields.position;
            services[position].querySelector(".information-services").innerText = object.items[i].fields.descriptionService;
            services[position].querySelector(".subtitle-services").innerText = object.items[i].fields.titleService;
        }
    }
    
}

function getServices() {
    fetch(
        "https://cdn.contentful.com/spaces/y738tbpa37ch/environments/master/entries?access_token=Lxz1vntmiaGRlPtpIfLGtL3Fv-ioO1c-vmAbAIlDC2U"
    )
        .then((obj) => {
            return obj.json();
        })
        .then((objJSON) => {
            putServices(objJSON);
        });
}

function main() {
    getServices();
}

main();
