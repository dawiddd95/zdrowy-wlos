function init() {
	let container = document.querySelector(".container");
	let offer = document.querySelector("a[href='#page-head__offer-menu']");
	let offerMenu = document.querySelector(".page-head__offer-menu");
	let acc = document.getElementsByClassName("overlay-content__offer-header");
	
	for ( let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", showContent);
	}

	function showContent() {
        this.nextElementSibling.classList.toggle("open-menu");
        this.classList.toggle("offer-background");
	}

	offer.addEventListener("mouseover", function() {
		offerMenu.style.display = "flex";
	})
	
	offerMenu.addEventListener("mouseover", function() {
		offerMenu.style.display = "flex";
	})
			
	offerMenu.addEventListener("mouseout", function() {
		offerMenu.style.display = "none";
	})
}

document.addEventListener("DOMContentLoaded", init);