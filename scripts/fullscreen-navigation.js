
function init() {
	let acc = document.getElementsByClassName("open-button");
	let toggle = false;
	for ( let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", showContent);
	}
	function showContent() {
	if (toggle == true) {
		document.querySelector('.menu').src = 'images/menu-options.png';
	} else {
		document.querySelector('.menu').src = 'images/close.png';
	}
	toggle != toggle;	
		
        this.nextElementSibling.classList.toggle("open-overlay");
	}
}
document.addEventListener("DOMContentLoaded", init);
