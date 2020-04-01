/* JS, About Page */

// BODY: Randomly Generated Stuff
function generateStuff() {
	var randomNumber = Math.ceil(Math.random() * 3);
	const footerDetails = document.getElementById("minor-details");
	
	if (randomNumber == 1) {
		footerDetails.innerHTML = "Removed dragging for convenience."
	}
	
	else if (randomNumber == 2) {
		footerDetails.innerHTML = "Take care of yourself. Stay healthy!"
	}
	
	else {
		footerDetails.innerHTML = "Some easter egg is nearby. Watch out. ;)"
	}
}

// HEADER: Menubar Function
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

// HEADER: Navigation Animation	[Mobile-Responsive]		
function slideNav() {
	body.style.top = "100vh";
	body.style.overflow = "hidden";
}

function closeNav() {
	body.style.top = "0";
	body.style.overflow = "visible";
}

// HEADER: Navigation Animations
const link = document.getElementsByClassName("link");

function animateLine(certainAnchor) {
	const line = document.getElementById("hoverline");
	
	line.className = "animated";
	
	for (var i = 0; link[i - 1] != certainAnchor; i++) {
		line.style.left = (i * 25) + "%";
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

// Contact Section Functions
const contactSection = document.getElementById("contact-container");
const closeContactButton = document.getElementById("contactCloseButton");

function summonContact() {
	if (window.matchMedia("(orientation: portrait)").matches) {
		closeNav();
	}
	
	document.title = "Contact | Coding Conundrum";
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
	if (window.matchMedia("(orientation: portrait)").matches) {
		slideNav();
	}
	
	document.title = "About | Coding Conundrum";
	contactSection.style.bottom = "-100%";
	body.style.overflow = "visible";
}

// MAIN: Change Picture
var authorPic = document.getElementById("author-picture");

function changePicture() {
	authorPic.style.opacity = "0";
	authorPic.style.cursor = "default";
	
	setTimeout(function() {
		if (authorPic.getAttribute("src") == "../Images/Author-Picture-A.jpg") {
			authorPic.setAttribute("src", "../Images/Author-Picture-B.HEIC");
		}
		
		else {
			authorPic.setAttribute("src", "../Images/Author-Picture-A.jpg");
		}
		
		authorPic.style.opacity = "1";
		authorPic.style.cursor = "pointer";
	}, 3000);
}