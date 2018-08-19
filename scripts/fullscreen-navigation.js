/*let openButton = document.querySelector(".open-button");
let closeButton = document.querySelector(".close-button");
let overlay = document.querySelector(".overlay");
let body = document.querySelector(".body");

openButton.addEventListener("click", openNav);
closeButton.addEventListener("click", closeNav);

function openNav() {
    overlay.style.width = "90%";
    body.style.overflowY = "hidden";
}

function closeNav() {
    overlay.style.width = "0%";
    body.style.overflowY = "scroll";
}
*/


function init() {
	let acc = document.getElementsByClassName("open-button");
	for ( let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", showContent);
	}
	function showContent() {
        this.nextElementSibling.classList.toggle("open-overlay");
	}
}
document.addEventListener("DOMContentLoaded", init);
