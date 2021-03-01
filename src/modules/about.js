//RENDER ABOUT PAGE
import { $content } from "../index";
import { createHtmlElement } from "../functions/tools";

function renderAbout() {
    const aboutElem = createHtmlElement("section", "main-elem", ["about"], null);

    $content.appendChild(aboutElem); 
        
}

export { renderAbout };