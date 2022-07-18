let header = document.querySelector(".header");
let main = document.querySelector(".main");
let footer = document.querySelector(".footer");
let body = document.querySelector(".body");
let modal = document.querySelector(".modal");
let headerMenu = document.querySelector(".header-menu");
let headerList = document.querySelector(".modal-list");

let hederListTranslater = document.querySelector(".header-group-translate");
let modalTranslate = document.querySelector(".modal-translate");

let menu = document.querySelector(".treeLine");
let closeMenu = document.querySelector(".cloaseMenu")
let FAQ = document.querySelectorAll(".FAQ-vopros")

let btnTransRus = document.querySelector(".rus");
let btnTransUcr = document.querySelector(".ucr");
let btnTransEng = document.querySelector(".eng");

menu.addEventListener("click", ()=>{
    header.style.display = "none";
    main.style.display = "none";
    footer.style.display = "none";
    modal.style.display = "flex";
});

closeMenu.addEventListener("click", ()=>{
    header.style.display = "";
    main.style.display = "";
    footer.style.display = "";
    modal.style.display = "none";
});

FAQ.forEach(element => {
    element.addEventListener("click",()=>{
        let p = document.createElement("p");
        p.textContent = "Payment options we currently have: PayPal, Bitcoin.";
        p.classList.add("answer")
        if(element.style.height != "151px"){
            element.style.height = "151px";
            p.style.margin = "19px 0 0 0"
            element.querySelector("img").src = "image/Icon-upFAQ.svg"
            element.appendChild(p);
        }else{
            element.style.height = "104px";
            element.querySelector(".answer").remove();
            element.querySelector("img").src = "image/Icon-downFAQ.svg"
        }

    });
});

headerMenu.addEventListener("click", ()=>{
    if(headerList.style.display == "none"){
        headerList.style.display = "";
    }
    else
    {
        headerList.style.display = "none";
    }
});

hederListTranslater.addEventListener("click", ()=>{
    if(modalTranslate.style.display == "none"){
        modalTranslate.style.display = "";
    }
    else{
        modalTranslate.style.display = "none";
    }
});

btnTransRus.addEventListener("click", ()=>{
    let p = document.querySelector(".header-group-translate p");
    p.textContent = "RU";
    p = document.querySelector(".footer-translate p");
    p.textContent = "RU";
});

btnTransUcr.addEventListener("click", ()=>{
    let p = document.querySelector(".header-group-translate p");
    p.textContent = "UC";
    p = document.querySelector(".footer-translate p");
    p.textContent = "UC";
});

btnTransEng.addEventListener("click", ()=>{
    let p = document.querySelector(".header-group-translate p");
    p.textContent = "EN";
    p = document.querySelector(".footer-translate p");
    p.textContent = "EN";
    
});
