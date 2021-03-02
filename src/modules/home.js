//RENDER HOME PAGE
import css from "../styles/home.css";
import { $content } from "../index";
import { createHtmlElement, createCarousel } from "../functions/tools";

const imgsCarrousel = [
	"https://github.com/Silinde87/top-restaurant/blob/main/src/assets/imgs/cartel.jpg?raw=true",
	"https://github.com/Silinde87/top-restaurant/blob/main/src/assets/imgs/letrero.jpg?raw=true",
];

function renderHome() {
	const homeElem = createHtmlElement("section", "main-elem", ["home"], null);
	const homeContainer = createHtmlElement("div", "home-container", null, null);

  const carouselElem = createCarousel(imgsCarrousel, "home-photos-carr");
  const infoElemContainer = createHtmlElement("div", "info-container", null, null);
  const locationElem = createHtmlElement("div", null, ["info-elem"], null);
  const scheduleElem = createHtmlElement("div", null, ["info-elem"], null);
  
  const locationLogo = createHtmlElement("i", null, ["fas", "fa-map-marker-alt", "info-icon"], null);
  const locationText = createHtmlElement("p", null, ["info-text"],"Carrer de Muntaner, 55, 08011 Barcelona");
  const scheduleLogo = createHtmlElement("i", null, ["far", "fa-clock", "info-icon"], null);
  const scheduleText = createHtmlElement("p", null, ["info-text"], "Mon-Thurs:8am-11pm Fri-Sun:8am-11pm");

  
  locationElem.appendChild(locationLogo);
  locationElem.appendChild(locationText);
  scheduleElem.appendChild(scheduleLogo);
  scheduleElem.appendChild(scheduleText);

  infoElemContainer.appendChild(locationElem);
  infoElemContainer.appendChild(scheduleElem);

	homeContainer.appendChild(carouselElem);
  homeContainer.appendChild(infoElemContainer);

	homeElem.appendChild(homeContainer);
	$content.appendChild(homeElem);
}

export { renderHome };