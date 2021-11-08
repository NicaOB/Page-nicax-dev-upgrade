function getImage(object, positionItem){
    for(let i = 0; i < object.includes.Asset.length; i++){
        if(object.includes.Asset[i].sys.id == object.items[positionItem].fields.imageTitleService.sys.id){
            return object.includes.Asset[i].fields.file.url
        }
    }
}

function putServices(object){
    var template = document.querySelector(".template");
    var tempContent = template.content.querySelector(".service-content__service-info");
    var serv = document.querySelector(".service-content");
    for (let i = 0; i < object.items.length; i++) {
        if(object.items[i].sys.contentType.sys.id == "servicesPage"){
            tempContent.querySelector(".service-content__image").setAttribute("src", getImage(object, i));
            tempContent.querySelector(".service-content__title-job").innerText = object.items[i].fields.titleServicePage;
            tempContent.querySelector(".service-content__text-job").innerText = object.items[i].fields.textServicePage;
            var clone = document.importNode(template.content, true);
            serv.appendChild(clone);
        }
    }
}

function getServices(){
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

function main(){
    getServices();
}

main();