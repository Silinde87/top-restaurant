//RENDER MAIN MENU PAGE
import { $content } from "../index";
import { createHtmlElement } from "../functions/tools";

//Menu Items Array.
const $MenuItemList = [
    [
        "american omelette",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "https://github.com/Silinde87/top-restaurant/blob/main/src/assets/imgs/plato01.png?raw=true",
    ],
    [
        "american beef",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "https://github.com/Silinde87/top-restaurant/blob/main/src/assets/imgs/plato02.png?raw=true",
    ],
    [
        "Hamburguer xxxxl",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "https://github.com/Silinde87/top-restaurant/blob/main/src/assets/imgs/plato03.png?raw=true",
    ],
    [
        "the big ship",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "https://github.com/Silinde87/top-restaurant/blob/main/src/assets/imgs/plato04.png?raw=true",
    ],
    [
        "la fajita",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "https://github.com/Silinde87/top-restaurant/blob/main/src/assets/imgs/plato05.png?raw=true",
    ],
    [
        "chicken wings",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "https://github.com/Silinde87/top-restaurant/blob/main/src/assets/imgs/plato06.png?raw=true",
    ],
];

//This renders the page calling Menu Item factory for each element on items list.
function renderMenu() {
    const menuElem = createHtmlElement("section", "main-elem", ["menu"], null);
    const menuContainer = createHtmlElement("div", "menu-container", null, null);

    $MenuItemList.forEach((menuItem) => {
        menuContainer.appendChild(MenuItem(menuItem[0], menuItem[1], menuItem[2]));
    });
    menuElem.appendChild(menuContainer);

    $content.appendChild(menuElem);
}

//Menu Item Object (factory). Create a menu item element
const MenuItem = (nameItem, descriptionItem, imgUrlItem) => {
    let name = nameItem;
    let description = descriptionItem;
    let imgUrl = imgUrlItem;

    const menuItemContainer = createHtmlElement("article", null, ["menu-item"], null);

    const nameElem = createHtmlElement("span", null, ["name-menu-item"], name.toUpperCase());
    const imgElem = createHtmlElement("img", null, ["img-menu-item"], null);
    imgElem.setAttribute("src", imgUrl);
    const descriptionElem = createHtmlElement("span", null, ["description-menu-item"], description);

    menuItemContainer.appendChild(nameElem);
    menuItemContainer.appendChild(imgElem);
    menuItemContainer.appendChild(descriptionElem);

    return menuItemContainer;
};

export { renderMenu };
