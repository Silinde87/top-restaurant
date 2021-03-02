//COMMON ASSIST FUNCTIONS

//When called, create an html element with id, and/or classes and/or content.
function createHtmlElement(type, id, arrayClasses, content) {
	const element = document.createElement(type);
	if (id) element.id = id;
	if (arrayClasses) {
		arrayClasses.forEach((myClass) => element.classList.add(myClass));
	}
	if (content) element.innerText = content;

	return element;
}

//When called, create a bootstrap Carrousel including every items at the array pased as parameter
function createCarousel(carouselItems, carouselId) {
	const carouselContainer = createHtmlElement(
		"div",
		carouselId,
		["carousel", "slide", "carousel-fade"],
		null
	);
	carouselContainer.setAttribute("data-bs-ride", "carousel");
	const carouselInner = createHtmlElement("div", null, ["carousel-inner"], null);

	for (let i = 0; i < carouselItems.length; i++) {
		const carouselItem = createHtmlElement("div", null, ["carousel-item"], null);
		if (i === 0) carouselItem.classList.add("active");
		const imgCarouselItem = createHtmlElement("img", null, ["d-block", "w-100"], null);
		imgCarouselItem.setAttribute("src", carouselItems[i]);
		carouselItem.appendChild(imgCarouselItem);
		carouselInner.appendChild(carouselItem);
	}
	carouselContainer.appendChild(carouselInner);

	return carouselContainer;
}

export { createHtmlElement, createCarousel };
