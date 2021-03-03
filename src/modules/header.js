//RENDER HEADER
import css from "../styles/header.css";
import { $content } from "../index";
import { createHtmlElement } from "../functions/tools";

//Renders the header menu list
function renderHeader() {
    const headerElem = ["Home", "Menu", "About"];
    const ulElem = createHtmlElement("ul", null, ["links"], null);
    const logoHeaderElem = createHtmlElement("img", "logo-header", null, null);
    const logoImgUrl = "https://github.com/Silinde87/top-restaurant/blob/main/src/assets/imgs/logo.png?raw=true";
    const headBtn = createHtmlElement("a", null, ["hamburger"], null);
    headBtn.addEventListener("click", () => {
        document.querySelector("ul").classList.toggle("active");
        headBtn.classList.toggle("toggle");
    })
    
    logoHeaderElem.setAttribute("src", logoImgUrl);

    for(let i=1; i<=3 ; i++){
        let spanElem = createHtmlElement("span", null, ["line", `line${i}`],null);
        headBtn.appendChild(spanElem);
    }

    headerElem.forEach((elem) => {
        let liElem = createHtmlElement("li", null, ["nav-items"], elem);
        liElem.addEventListener("click", (e) => {
            highlightNavElemActive(e);
            document.querySelector("ul").classList.remove("active");
            headBtn.classList.remove("toggle");
        });
        ulElem.appendChild(liElem);
    });

    const navElem = createHtmlElement("nav", "nav-menu", ["chess"], null);
    
    navElem.appendChild(logoHeaderElem);
    navElem.appendChild(headBtn);
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
