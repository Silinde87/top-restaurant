//RENDER FOOTER
import css from "../styles/footer.css";
import { $content } from "../index";
import { createHtmlElement } from "../functions/tools";

function renderFooter() {

    const footerElem = createHtmlElement("section", null, ["footer"], null);
    
    const textFooter = createHtmlElement("span", null, null, "Built & designed by Silinde87 | ");
    const githubLogo = createHtmlElement("i", null, ["fab", "fa-github", "fa-2x"], null);
    
    
    const link = document.createElement("a");
    link.setAttribute("href", "https://github.com/Silinde87/top-restaurant");
    link.setAttribute("target", "_blank");
    link.appendChild(githubLogo);

    footerElem.appendChild(textFooter);
    footerElem.appendChild(link);

    $content.appendChild(footerElem);    
}

export { renderFooter };
