import css from "./styles/root.css";
import { renderHeader } from "./modules/header";
import { renderHome } from "./modules/home";
import { renderMenu } from "./modules/menu";
import { renderAbout } from "./modules/about";
import { renderFooter } from "./modules/footer";

const $content = document.querySelector("#content");

//First load render.
renderHeader();
renderHome();
renderFooter();

//Adds events to nav items.
const navItemsList = [...document.getElementsByClassName("nav-items")];
navItemsList.forEach((navItem) => {
    navItem.dataset.page = navItem.innerText;
    navItem.addEventListener("click", render);
});

//Render whole page based on parameter.
function render(e) {
    $content.removeChild(document.getElementById("main-elem"));
    $content.removeChild(document.querySelector(".footer"));
    switch (e.target.dataset.page) {
        case "Home":
            renderHome();
            break;
        case "Menu":
            renderMenu();
            break;
        case "About":
            renderAbout();
            break;
    }
    renderFooter();
}

export { $content };
