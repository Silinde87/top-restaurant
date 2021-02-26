//RENDER HEADER

import { $content } from "../index";
import { createHtmlElement } from "../functions/tools";

function renderHeader() {
    const headerElem = ["Home", "Menu", "About"];
    const ulElem = document.createElement("ul");

    headerElem.forEach((elem) => {
        ulElem.appendChild(createHtmlElement("li", null, null, elem));
    });

    const navElem = document.createElement("nav");
    navElem.appendChild(ulElem);

    $content.appendChild(navElem);
}

export { renderHeader as renderHeader};
