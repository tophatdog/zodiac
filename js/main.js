// array of objects to store zodiac data
var aquariumfish = [
	{
		yourFishName: "angel",
		yourFishinfo: " Gouramis, Giant Danios, Rainbows, a group of Bala Sharks, and a group of Clown Loaches.",
		image: "img/angelfish.jpg",
		badfish: "dont mix with sharks",
	},
	{
		yourFishName: "oscer",
		yourFishinfo: "Managuense cichlid, Green terror, jack dempsey cichlid and other cichlids, large salfin pleco",
		image: "img/oscerfish.jpg",
		badfish: "Dont not group with Goiramis and other aggerive fish",
	},
	{
		yourFishName: "glofish",
		yourFishinfo: "danios, barbs, tetra, angelfish and other freshwater fish species not big enough to eat them.",
		image: "img/glo.jpg",
		badfish: "Dont group with anything bigger then the size of the Glofish its sure to be fish food",
	},
	{
		yourFishName: "goldfish",
		yourFishinfo: "Loaches, Rubbernose and Bristlenose Plecos, White Cloud Mountain Minnows, Zebra Danios, Rosy Barbs.",
		image: "img/goldfish.jpg",
		badfish: "Dont group with anything bigger then the size of the goldfish will eat it. ",
	},
	{
		yourFishName: "pleco",
		yourFishinfo: "Bigger Tetras, Angelfish, Silver Dollars, White Tip Sharks, Pacus, and Emerald Green Catfish",
		image: "img/pleco.jpg",
		badfish: "unsure",
	},
	{
		yourFishName: "guppy",
		yourFishinfo: "African Dwarf Frogs, African Dwarf frogs, angelfish, ghost shrimp",
		image: "img/fish1.jpg",
		badfish: "Dont group with anything bigger then the size of the guppy its sure to be fish food ",
	},
	{
		yourFishName: "clowinfish",
		yourFishinfo: "Damselfish, Tankgs, Wrasses, Blennies, AngelFish, Dartfish, Puffers, Gobies.",
		image: "img/clowinfish.jpg",
		badfish: "Just dont mix in other clowin fish after your school has been established in your tank.",
	},
	{
		yourFishName: "neontettrras",
		yourFishinfo: "some Giant Gouramis, Bettas, gold fish, glofish, other tetras.",
		image: "img/neontettrras.jpg",
		badfish: "Bigger fishes can pose threat to the tiny peace loving neon tetras. Any other bigger carnivorous species of animals under water can as well prey upon the neon tetras.",
	},
	{
		yourFishName: "coyfish",
		yourFishinfo: "anything it will make it fish food ",
		image: "img/coyfish.jpg",
		badfish: "none it eats other fish",
	},

];

const btn = document.getElementById('userdata');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		fishlist();
	};
}, false);


function fishlist() {
	var userdata = document.getElementById("userdata");
	for(var i = 0; i < aquariumfish.length; i = i + 1) {
		if(userdata.value.toLowerCase() === aquariumfish[i].yourFishName) {
			document.getElementById("yourFishName").textContent = userdata.value;
			document.getElementById("icon").src = aquariumfish[i].image;
			document.getElementById("yourFishinfo").textContent = "Your best Picks are: " + aquariumfish[i].yourFishinfo;
			document.getElementById("badfish").textContent = aquariumfish[i].badfish;

			return;
		};
		document.getElementById("yourFishName").textContent = "Not on the fish list. Try again!";
		document.getElementById("yourFishinfo").textContent = "Forgive me";
		document.getElementById("icon").src = "img/sorry.jpg";
	};
};
