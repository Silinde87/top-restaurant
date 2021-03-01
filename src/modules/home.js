//RENDER HOME PAGE
import css from "../styles/home.css";
import { $content } from "../index";
import { createHtmlElement } from "../functions/tools";

function renderHome() {
    const homeElem = createHtmlElement("section", "main-elem", ["home"], null);

    $content.appendChild(homeElem); 
        
}

export { renderHome };