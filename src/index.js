import css from "./styles/root.css";
import { renderHeader } from "./modules/header";
import { renderHome } from "./modules/home";
import { renderFooter } from "./modules/footer";


const $content = document.querySelector("#content");

renderHeader();
renderHome();
renderFooter();

export { $content };
