

// menuknop: het menu open- en dichtklappen
// bron: FED 25/26 JS 3-stap recap

// querySelector: de menuknop en het menu opzoeken
const menuKnop = document.querySelector("header button");
const menu = document.querySelector("header nav");

// onclick: als er op de menuknop geklikt wordt, voer de functie uit
menuKnop.onclick = toggleMenu;

// classList: de class "open" aan het menu toevoegen of weghalen
function toggleMenu() {
	menu.classList.toggle("open");

	// screenreader laten weten of het menu open (true) of dicht (false) is
	const isOpen = menu.classList.contains("open");
	menuKnop.setAttribute("aria-expanded", isOpen);
}

// menu sluiten met de Escape-toets
// bron: FED 25/26 JS 3-stap recap, slide 3/5 (onkeydown)
document.onkeydown = sluitMenuMetEscape;

function sluitMenuMetEscape(event) {
	// alleen als de toets Escape is én het menu open staat
	if (event.key === "Escape" && menu.classList.contains("open")) {
		menu.classList.remove("open");
		menuKnop.setAttribute("aria-expanded", "false");

		// de focus terug op de menuknop, zodat je met het toetsenbord verder kunt
		menuKnop.focus();
	}
}