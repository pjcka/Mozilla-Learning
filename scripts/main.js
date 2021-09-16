let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/cats-paw-high-five.png') {
		myImage.setAttribute('src', 'images/cats-paw-claws-out.png');
	} else {
		myImage.setAttribute('src', 'images/cats-paw-high-five.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter you name.');
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Slap for Some Sugar, ' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'You must really like me, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}