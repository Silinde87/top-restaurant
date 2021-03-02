//RENDER ABOUT PAGE
import css from "../styles/about.css";
import { $content } from "../index";
import { createHtmlElement } from "../functions/tools";

function renderAbout() {
	const aboutElem = createHtmlElement("section", "main-elem", ["about"], null);
	const aboutContainer = createHtmlElement("div", "about-container", null, null);

	const formContainer = createHtmlElement("div", "form-container", null, null);
	const mapContainer = createHtmlElement("div", "map-container", null, null);

	const formBookTableElem = createFormBookTableElem();
	const scheduleElem = createScheduleElem();
	const gmapsElem = createGmapsElem();    

	formContainer.appendChild(formBookTableElem);
	formContainer.appendChild(scheduleElem);
	mapContainer.appendChild(gmapsElem);

	//Add outer containers to main container
	aboutContainer.appendChild(formContainer);
	aboutContainer.appendChild(mapContainer);

	aboutElem.appendChild(aboutContainer);
	$content.appendChild(aboutElem);
}

//Creates the form for booking table using boostrap template
function createFormBookTableElem() {
	const formBook = createHtmlElement("form", "form-book-table", null, null);

	//-->FIRST ROW from form creation.
	const firstRowForm = createHtmlElement("div", null, ["row"], null);
	// ----> First input
	const firstColFirstRowForm = createHtmlElement("div", null, ["col"], null);
	const inputDate = createHtmlElement("input", null, ["form-control"], null);
	inputDate.setAttribute("type", "Date");
	inputDate.setAttribute("aria-label", "Date");
	inputDate.required = true;
	firstColFirstRowForm.appendChild(createHtmlElement("p", null, ["label-form"], "Date"));
	firstColFirstRowForm.appendChild(inputDate);
	// ----> Second input
	const secondColFirstRowForm = createHtmlElement("div", null, ["col"], null);
	const inputTime = createHtmlElement("input", null, ["form-control"], null);
	inputTime.setAttribute("type", "time");
	inputTime.setAttribute("aria-label", "Time");
	inputTime.setAttribute("min", "08:00");
	inputTime.setAttribute("max", "23:00");
	inputTime.required = true;
	secondColFirstRowForm.appendChild(createHtmlElement("p", null, ["label-form"], "Time"));
	secondColFirstRowForm.appendChild(inputTime);
	// ----> Third input
	const thirdColFirstRowForm = createHtmlElement("div", null, ["col"], null);
	const inputGuests = createHtmlElement("input", null, ["form-control"], null);
	inputGuests.setAttribute("type", "number");
	inputGuests.setAttribute("min", "1");
	inputGuests.setAttribute("max", "10");
	inputGuests.required = true;
	thirdColFirstRowForm.appendChild(createHtmlElement("p", null, ["label-form"], "Guests"));
	thirdColFirstRowForm.appendChild(inputGuests);
	firstRowForm.appendChild(firstColFirstRowForm);
	firstRowForm.appendChild(secondColFirstRowForm);
	firstRowForm.appendChild(thirdColFirstRowForm);
	formBook.appendChild(firstRowForm);

	//--> SECOND ROW from form creation.
	// ----> First input
	const secondRowForm = createHtmlElement("div", null, ["row"], null);
	const firstColSecondRowForm = createHtmlElement("div", null, ["col"], null);
	const inputEmail = createHtmlElement("input", null, ["form-control"], null);
	inputEmail.setAttribute("type", "email");
	inputEmail.setAttribute("placeholder", "Enter your e-mail");
	inputEmail.required = true;
	firstColSecondRowForm.appendChild(inputEmail);
	secondRowForm.appendChild(firstColSecondRowForm);
	formBook.appendChild(secondRowForm);

	// --> BUTTON from form.
	const buttonFormBookTable = createHtmlElement("button", "form-book-btn", null, "Order Now");
	formBook.appendChild(buttonFormBookTable);

	return formBook;
}

function createScheduleElem() {
	const scheduleContainer = createHtmlElement("div", null, ["info-element"], null);
	const scheduleLogo = createHtmlElement("i", null, ["far", "fa-clock", "info-icon-elem"], null);
	const scheduleText = createHtmlElement(
		"p",
		null,
		["info-text-elem"],
		"Mon-Thurs:8am-11pm Fri-Sun:8am-11pm"
	);
	scheduleContainer.appendChild(scheduleLogo);
	scheduleContainer.appendChild(scheduleText);
	return scheduleContainer;
}

function createGmapsElem() {
	const gmap = createHtmlElement("iframe", "gmap", null, null);
	gmap.setAttribute(
		"src",
		`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4460166704926!2d2.1575612156520494!3d41.
        38611930403634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a28eaa9e58a1%3A0x6f21662aed09
        cb45!2sCarrer%20de%20Muntaner%2C%2055%2C%2008011%20Barcelona!5e0!3m2!1ses!2ses!4v1614696113555!5m2!1
        ses!2ses`
	);
	gmap.setAttribute("loading", "lazy");
	gmap.allowFullscreen = true;

	return gmap;
}

export { renderAbout };
