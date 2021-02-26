//import css from "./styles/footer.css"

import { renderHeader } from "./modules/header";
import { renderFooter } from "./modules/footer";


const $content = document.querySelector("#content");

renderHeader();
renderFooter();

export { $content };
