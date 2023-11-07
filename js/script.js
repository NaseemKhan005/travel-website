const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
	navLinks.style.right = "0px";
});
closeIcon.addEventListener("click", () => {
	navLinks.style.right = "-100%";
});
