//RENDER HEADER
import css from "../styles/header.css";
import { $content } from "../index";
import { createHtmlElement } from "../functions/tools";

//Renders the header menu list
function renderHeader() {
    const headerElem = ["Home", "Menu", "About"];
    const ulElem = document.createElement("ul");
    const logoHeaderElem = createHtmlElement("img", "logo-header", null, null);
    const logoImgUrl = "https://github.com/Silinde87/top-restaurant/blob/main/src/assets/imgs/logo.png?raw=true";
    
    logoHeaderElem.setAttribute("src", logoImgUrl);

    headerElem.forEach((elem) => {
        let liElem = createHtmlElement("li", null, ["nav-items"], elem);
        liElem.addEventListener("click", highlightNavElemActive);
        ulElem.appendChild(liElem);
    });

    const navElem = createHtmlElement("nav", "nav-menu", ["chess"], null);
    
    navElem.appendChild(logoHeaderElem);
    navElem.appendChild(ulElem);


    $content.appendChild(navElem);
}

//Change classList nav element when active
function highlightNavElemActive(e) {
    [...document.getElementsByClassName("nav-items")].forEach((navItem) =>
        navItem.classList.remove("nav-items-active")
    );
    e.target.classList.add("nav-items-active");
}

export { renderHeader };
