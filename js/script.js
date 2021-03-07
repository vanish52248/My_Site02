// ハンバーガーメニュー
function hamburger() {
	document.getElementById("line1").classList.toggle("linea");
	document.getElementById("line2").classList.toggle("lineb");
	document.getElementById("line3").classList.toggle("linec");
	document.getElementById("target").classList.toggle("slidex");
	document.getElementById("nav_f").classList.toggle("fadein");
}

document.getElementById("target").addEventListener("click", function () {
	hamburger();
});

let list = document.getElementsByClassName("nav__list-text--dropdown-menu");

for (let i = 0; i < list.length; i++) {
	list[i].addEventListener("click", function () {
		hamburger();
	});
}

// マウスオーバーのサブメニュードロップダウン表示・非表示
var parent = document.querySelectorAll(".nav__list-text");

var node = Array.prototype.slice.call(parent, 0);

node.forEach(function (element) {
	element.addEventListener(
		"mouseover",
		function () {
			element.querySelector(".sub").classList.add("active");
		},
		false
	);
	element.addEventListener(
		"mouseout",
		function () {
			element.querySelector(".sub").classList.remove("active");
		},
		false
	);
});
