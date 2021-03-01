//RENDER HEADER
import css from "../styles/header.css";
import { $content } from "../index";
import { createHtmlElement } from "../functions/tools";

function renderHeader() {
    const headerElem = ["Home", "Menu", "About"];
    const ulElem = document.createElement("ul");

    headerElem.forEach((elem) => {
        ulElem.appendChild(createHtmlElement("li", null, ["nav-items"], elem));
    });

    const navElem = createHtmlElement("nav", "nav-menu", ["chess"], null);
    navElem.appendChild(ulElem);

    $content.appendChild(navElem);
}

export { renderHeader };
