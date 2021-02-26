//import { debug } from "webpack";
import {renderHeader} from "./modules/header";

const $content = document.querySelector("#content");

renderHeader();

export { $content };