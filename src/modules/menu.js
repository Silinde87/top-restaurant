//RENDER MAIN MENU PAGE
import { $content } from "../index";
import { createHtmlElement } from "../functions/tools";

function renderMenu() {
    const menuElem = createHtmlElement("section", "main-elem", ["menu"], null);

    $content.appendChild(menuElem); 
        
}

export { renderMenu };