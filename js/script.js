// dropdown in NAV

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

// dropdown in contact

function myFunction2() {
	document.getElementById("myDropdown2").classList.toggle("show");
}
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

/*function myFunction3() {
	document.getElementById("myDropdown3").classList.toggle("show");
}
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn3')) {

		var dropdowns = document.getElementsByClassName("dropdown-content3");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
} */

// code in NAV

$(document).ready(function () {
	$(".menu-trigger").click(function () {
		$('nav').slideToggle();
	});
});