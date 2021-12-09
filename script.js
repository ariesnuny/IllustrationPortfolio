Campana = document.getElementById("campa");
Inbox = document.getElementById("inb");
Person = document.getElementById("pfp");
Menu = document.getElementById("desplegar");
Insta = document.getElementById("ig");
Formula = document.getElementById("Contacto");
LinkTr = document.getElementById("linkea");
Ilus = document.getElementById("Grid");
Botones = document.getElementById("Lista")

function CampanaAbajo() {
    if (Insta.classList.contains("camp")) {
        LinkTr.classList.remove("yesLink");
        LinkTr.classList.add("noLink");
        
        Formula.classList.remove("contactForm");
        Formula.classList.add("talk");

        Insta.classList.remove("camp");
        Insta.classList.add("campanada");
    } else {
        Insta.classList.remove("campanada");
        Insta.classList.add("camp");
    }
};
function FormuAbajo() {
    if (Formula.classList.contains("talk")) {
        LinkTr.classList.remove("yesLink");
        LinkTr.classList.add("noLink");

        Insta.classList.remove("campanada");
        Insta.classList.add("camp");

        Formula.classList.remove("talk");
        Formula.classList.add("contactForm")
    } else {
        Formula.classList.remove("contactForm");
        Formula.classList.add("talk");
    }
};

function LinkaAbajo() {
    if (LinkTr.classList.contains("noLink")) {
        Insta.classList.remove("campanada");
        Insta.classList.add("camp");

        Formula.classList.remove("contactForm");
        Formula.classList.add("talk");

        LinkTr.classList.remove("noLink");
        LinkTr.classList.add("yesLink")
    } else {
        LinkTr.classList.remove("yesLink");
        LinkTr.classList.add("noLink");
    }
};