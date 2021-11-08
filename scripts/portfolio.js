function getImage(object, positionItem){
    for(let i = 0; i < object.includes.Asset.length; i++){
        if(object.includes.Asset[i].sys.id == object.items[positionItem].fields.proyectImage.sys.id){
            return object.includes.Asset[i].fields.file.url
        }
    }
}

function putProyects(object){
    var template = document.querySelector(".template");
    var tempContent = template.content.querySelector(".portfolio-content__proyect");
    var port = document.querySelector(".portfolio-content");
    for(let i = 0; i < object.items.length; i++){
        if(object.items[i].sys.contentType.sys.id == "portfolio"){
            tempContent.querySelector(".portfolio-content__image").setAttribute("src", getImage(object, i));
            tempContent.querySelector(".portfolio-content__title-job").innerText = object.items[i].fields.proyectTitle;
            tempContent.querySelector(".portfolio-content__text-job").innerText = object.items[i].fields.proyectDescription;
            tempContent.querySelector(".portfolio-content__link-proyect").setAttribute("href", object.items[i].fields.proyectUrl);
            var clone = document.importNode(template.content, true);
            port.appendChild(clone);
        }
    }
}

function getProyects(){
    fetch(
        "https://cdn.contentful.com/spaces/y738tbpa37ch/environments/master/entries?access_token=Lxz1vntmiaGRlPtpIfLGtL3Fv-ioO1c-vmAbAIlDC2U"
    )
        .then((obj) => {
            return obj.json();
        })
        .then((objJSON) => {
            putProyects(objJSON);
        });
}

function main(){
    getProyects();
}

main();