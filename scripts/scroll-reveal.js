function init() {
	var mobileViewport = window.matchMedia("screen and (max-width: 1023px)");
      
	if(mobileViewport.matches) {
	   	window.sr = ScrollReveal();   //deklaracja biblioteki
	    sr.reveal('.section__gabinet,contact-container',{duration: 0});  //co chcemy animowac
	} else {
	    window.sr = ScrollReveal();   //deklaracja biblioteki
	    sr.reveal('.section__gabinet,.contact-container',{duration: 1000, delay: 300});  //co chcemy animowac
	}
}

document.addEventListener("DOMContentLoaded", init);
