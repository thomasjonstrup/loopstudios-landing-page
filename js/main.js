var burger = document.getElementsByClassName("nav__hamburger");
var close = document.getElementsByClassName("header__close");
var menu = document.getElementsByClassName("mobile-menu");

burger[0].addEventListener("click", () => {
	if (menu[0]) {
		menu[0].classList.toggle("is-open");
	}
});

close[0].addEventListener("click", () => {
	if (menu[0]) {
		menu[0].classList.toggle("is-open");
	}
});
