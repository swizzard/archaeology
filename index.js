let G;
const g = {
	today: ["#todayPreface# #descriptor.a# #structure#"],
	before: ["#beforePreface# #descriptor.a# #structure#"],
	todayPreface: [
		"Today, it is",
		"Today stands",
		"Before you stands",
		"You see before you",
		"It currently is",
		"Here stands",
		"Nowadays, this is",
		"The uppermost archaeological stratum reveals the ruins of",
		"These ruins most recently were",
	],
	beforePreface: [
		"Before that, it was",
		"It used to be",
		"You can tell that it was",
		"It seems that it used to be",
		"They say that it was",
		"It previously was",
		"Faint traces reveal that it previously was",
		"Prior to that, it was",
		"Part of it used to be",
		"Before that, it was part of",
	],
	descriptor: [
		"remote",
		"central",
		"popular",
		"isolated",
		"contested",
		"respected",
		"communal",
		"restricted",
		"important",
		"ceremonial",
		"abandoned",
		"private",
		"local",
		"holy",
		"large",
		"small",
		"simple",
		"complex",
		"lavish",
		"austere",
	],
	structure: [
		"temple",
		"tomb",
		"workshop",
		"house",
		"storehouse",
		"palace",
		"fortress",
		"barracks",
		"workshop",
		"cemetery",
		"school",
		"farm",
		"cloisters",
		"marketplace",
		"prison",
		"courthouse",
		"hospital",
		"shrine",
		"monument",
	],
};

const $inner = $("#inner");

window.addEventListener("load", () => {
	G = tracery.createGrammar(g);
	const txt = `${G.flatten("#today#")}. ${G.flatten("#before#")}.`;
	$inner.text(txt);
});
