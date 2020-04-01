/* JS, Splash Page */

// BODY: Randomly Generated Stuff
function generateStuff() {
	var randomNumber = Math.ceil(Math.random() * 3);
	const header = document.getElementById("splash-header");
	const subheader = document.getElementById("splash-body");
	const splashLink = document.getElementById("slider-splash-link");
	const sliderSplash = document.getElementById("slider-splash-header");
	const footerDetails = document.getElementById("minor-details");
	
	if (randomNumber == 1) {
		header.innerHTML = "Getting started as a website designer?";
		subheader.innerHTML = "We got you! Hold tight, and enjoy the flight.";
		splashLink.href = "https://css-tricks.com/";
		splashLink.className = "slider-button css-tricks";
		sliderSplash.className = "slider-header css-tricks";
		footerDetails.innerHTML = "Removed dragging for convenience."
	}
	
	else if (randomNumber == 2) {
		header.innerHTML = "Need some help in designing your site?";
		subheader.innerHTML = "We got you covered! Find your answers here.";
		splashLink.href = "https://www.w3schools.com/";
		splashLink.className = "slider-button w3schools";
		sliderSplash.className = "slider-header w3schools";
		footerDetails.innerHTML = "Take care of yourself. Stay healthy!"
	}
	
	else {
		header.innerHTML = "Went here to see the website out of curiosity?";
		subheader.innerHTML = "Welcome! You may just find wonders here.";
		splashLink.href = "https://cssreference.io/";
		splashLink.className = "slider-button cssref";
		sliderSplash.className = "slider-header cssref";
		footerDetails.innerHTML = "Some easter egg is nearby. Watch out. ;)"
	}
}

// MAIN: Automatic Function
var cycleOfAutomation;

function automaticMovement() {
	setTimeout(moveImg, 120000, 1);
	cycleOfAutomation = setTimeout(automaticMovement, 120000);
}

// A continuous function in case of "inertia."
automaticMovement();

// HEADER: Navigation Animations
const link = document.getElementsByClassName("link");	// Divide link.length by 2 to target first set.

function animateLine(certainAnchor) {
	const line = document.getElementById("hoverline");
	
	line.className = "animated";
	
	for (var i = 0; link[i - 1] != certainAnchor; i++) {
		line.style.left = (i * 25) + "%";
	}
}

function turnActive(certainAnchor) {
	if (window.matchMedia("(orientation: landscape)").matches) {
		for (var i = 0; i < (link.length/2); i++) {
			if (link[i] != certainAnchor) {
				link[i].className = "link";
			}
			
			else {
				link[i].className = "link current";
			}
		}
	}
	// For clicking navigation links.
	resetLine();
}

function makeActive(certainNavAnchor) {
	if (window.matchMedia("(orientation: landscape)").matches) {
		for (var i = 0; i < (link.length/2); i++) {
			if (link[i] != link[certainNavAnchor]) {
				link[i].className = "link";
			}
			
			else {
				link[i].className = "link current";
			}
		}
		// For clicking arrows or carousel.
		resetLine();
	}
}

function resetLine() {
	const line = document.getElementById("hoverline");
	var defaultValue = 0;
	const defaultCurrent = document.getElementsByClassName("link current")[0];
	
	while (link[defaultValue] != defaultCurrent) {
		defaultValue++;
	}
	
	line.className = "static";
	line.style.left = (defaultValue * 25) + "%";
}

// HEADER: Navigation Animations [Mobile-Responsive]			
function slideNav() {
	body.style.top = "100vh";
	body.style.overflow = "hidden";
}
function closeNav() {
	body.style.top = "0";
	body.style.overflow = "visible";
}

// HEADER: Menu Bar Function
const body = document.getElementById("body");

function showOrHide() {
	const footer = document.getElementById("footer");
	const menuBar = document.getElementById("menu-bar");
	
	if (body.className == "minimized") {
		body.className = "expanded";
		body.style.top = "0";
		footer.style.bottom = "-5vw";
		menuBar.className = "on large-scale";
	}
	
	else {
		body.className = "minimized";
		body.style.top = "-4.76vw";
		footer.style.bottom = "0";
		menuBar.className = "off large-scale";
	}
}



// MAIN: Slider Functions
const slider = document.getElementById("slider");
const round = document.getElementsByClassName("round");
var transitionValue = 1;

function moveImg(direction) {
	transitionValue += direction;
	
	if (transitionValue == 0) {
		transitionValue = 4;
	}
	
	else if (transitionValue == 5) {;
		transitionValue = 1;
	}
	
	slider.style.left = ((transitionValue - 1) * -100) + "%";
	goToImg(transitionValue);
}

function goToImg(imageRef) {
	transitionValue = imageRef;
	
	if (transitionValue == 0) {
		transitionValue = 4;
	}
	
	else if (transitionValue == 5) {
		transitionValue = 1;
	}
	
	slider.style.left = ((transitionValue - 1) * -100) + "%";
	imageRef--;
	
	for (var i = 0; i < round.length; i++) {
		if (round[i] == round[imageRef]) {
			round[i].className = "active round";
		}
		
		else {
			round[i].className = "round";
		}
	}
	
	makeActive(imageRef);
	smoothAnimation(imageRef);
	clearTimeout(cycleOfAutomation);
}

// MAIN: Splash Title Effects
const sliderHeader = document.getElementsByClassName("slider-header")[0];

function titleEffect() {
	sliderHeader.style.color = "#FFD300";
}
function titleExit() {
	sliderHeader.style.color = "white";
}

// MAIN: Smooth Animation of Slider Text
const sliderText = document.getElementById("slider-text");
const sliderSubheader = document.getElementsByClassName("slider-subheader")[0];
const sliderButton = document.getElementsByClassName("slider-button")[0];

function smoothAnimation(someNum) {
	sliderText.style.top = "130%";
	setTimeout(showText, 2250, someNum);
}

function showText(whatToShow) {
	if (whatToShow == 0) {
		sliderHeader.innerHTML = "Website Splash";
		sliderHeader.id = "slider-splash-header";
		sliderSubheader.innerHTML = "You know, this is where you are, right now!";
		sliderSubheader.id = "slider-splash-subheader";
		sliderButton.innerHTML = "Get Started!";
		sliderButton.id = "slider-splash-link";
		generateStuff();	// Easter Egg
		sliderButton.removeAttribute("onclick");
		
		if (window.matchMedia("(orientation: portrait)").matches) {
			sliderText.style.marginTop = "-15vw";
		}
	}
	
	else if (whatToShow == 1) {
		sliderHeader.innerHTML = "Repostsitory";
		sliderHeader.id = "slider-posts-header";
		sliderSubheader.innerHTML = "Where all the useful bits of this site reside.";
		sliderSubheader.id = "slider-posts-subheader";
		sliderButton.innerHTML = "Read More";
		sliderButton.id = "slider-normal-link";
		sliderButton.href = "Sites/Posts.html";
		sliderButton.removeAttribute("onclick");
		
		if (window.matchMedia("(orientation: portrait)").matches) {
			sliderText.style.marginTop = "-15vw";
		}
	}
	
	else if (whatToShow == 2) {
		sliderHeader.innerHTML = "About the Site";
		sliderHeader.id = "slider-about-header";
		sliderSubheader.innerHTML = "Only if you are curious about this website.";
		sliderSubheader.id = "slider-about-subheader";
		sliderButton.innerHTML = "Read More";
		sliderButton.id = "slider-normal-link";
		sliderButton.href = "Sites/About.html";
		sliderButton.removeAttribute("onclick");
		
		if (window.matchMedia("(orientation: portrait)").matches) {
			sliderText.style.marginTop = "-10vw";
		}
	}
	
	else {
		sliderHeader.innerHTML = "Contact Us";
		sliderHeader.id = "slider-contact-header";
		sliderSubheader.innerHTML = "For the purpose of answering your queries.";
		sliderSubheader.id = "slider-contact-subheader";
		sliderButton.innerHTML = "Ask a Question";
		sliderButton.id = "slider-contact-link";
		sliderButton.removeAttribute("href");
		sliderButton.setAttribute("onclick", "summonContact(true)");
		
		if (window.matchMedia("(orientation: portrait)").matches) {
			sliderText.style.marginTop = "-10vw";
		}
	}
	
	sliderText.style.top = "50%";
}

// MAIN: Contact Section Functions
const contactSection = document.getElementById("contact-container");
const closeContactButton = document.getElementById("contactCloseButton");

function summonContact(cameFromSlider) {
	if (window.matchMedia("(orientation: portrait)").matches) {
		closeNav();
	}
	
	document.title = "Contact | Coding Conundrum";
	closeContactButton.className = cameFromSlider;
	contactSection.style.bottom = "0";
	body.style.overflow = "hidden";
}
function summonAlert() {
	const alertMedium = document.getElementById("contact-container");
	var alertHeader = document.createElement("span");
	var alertBody = document.createElement("span");
	var alertBar = document.createElement("div");
	var closeAlert = document.createElement("div");
	
	alertHeader.innerHTML = "Info!";
	alertHeader.id = "alert-header";
	
	alertBody.innerHTML = "Query not sent.";
	alertBody.id = "alert-body";
	
	closeAlert.innerHTML = "&times;";
	closeAlert.id = "alertCloseButton";
	closeAlert.setAttribute("onclick", "closeAlert(this)");
	
	alertBar.id = "contact-alert";
	alertBar.append(alertHeader);
	alertBar.append(alertBody);
	alertBar.append(closeAlert);
	
	alertMedium.append(alertBar);
}

function closeAlert(respectiveAlert) {
	respectiveAlert.closest("div#contact-alert").remove();
}

function closeContact() {
	if (window.matchMedia("(orientation: portrait)").matches && closeContactButton.className == "false") {
		slideNav();
	}
	
	document.title = "Home | Coding Conundrum";
	contactSection.style.bottom = "-100%";
	body.style.overflow = "visible";
}

// MAIN: Reset Automatic Function
function resetAutomation() {
	cycleOfAutomation = setTimeout(automaticMovement, 60000);
}