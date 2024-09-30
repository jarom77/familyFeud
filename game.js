/*
Code file for gameplay and setup functionality for Family Feud.

By Jarom Christensen <coder@jaromc.com>
Uses questions from various public spreadsheets scattered throughout the web.

Copyright (C) 2024 Jarom Christensen

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
const family = ['Fam1'];

var index = -1;
const c = 0;
const l = 1;
const h = 2;
const w = 3;
const o = 4;

const database = [
	["Name a state located in the Western United States",["California",25],["Arizona",20],["Texas",15],["Utah",12],["Colorado",10],["Washington",10],["Oklahoma",6],["South Dakota",2]],
	["What do college students do that annoys their professors the most?",["Talk",32],["Fall Asleep",18],["Skip Class",17],["Cheat",13],["Use Phone",9],["Arrive Late",8],["Eat",3]],
	["Name a type of dance people do in a dance competition",["Tango",36],["Salsa",24],["Waltz",14],["Tap",8],["Break Dance",4],["Swing Dance",3]],
	["Which class do students take in college thinking it would be an easy 'A'?",["Art",33],["English",26],["Gym",24],["Music",5],["Cooking",4],["Drama",3],["Psychology",3]],
	["After a cop pulls you over, what you might try to avoid getting a ticket",["Cry",28],["Flirt",26],["Lie",18],["Smile",8],["Be Nice",8],["Beg",6],["Apologize",3]],
	["Name a professional football team that’s named for an animal",["Bears",39],["Dolphins",13],["Lions",12],["Eagles",11],["Panthers",7],["Colts",6],["Rams",5]],
	["Name something you’d expect to find on a pirate’s ship",["Pirates",36],["Treasure",26],["Parrot",16],["Pirate Flag",7],["Sword",5],["Plank",4],["Rum",3]],
	["Name something kids say they’d do if they were an adult, but that adults rarely do",["Stay Up Late",34],["Party",20],["Become Rich",13],["Sleep In",10],["No House Rules",8],["Eat Junk Food",6],["Travel",5]],
	["Name a food that some people prefer to eat burnt",["Toast",39],["Marshmallows",18],["Popcorn",13],["Steak",11],["Bacon",10],["Hot Dogs",6]],
	["Name something you can only hear in your house when everyone’s sleeping",["Snoring",32],["Ticking Clock",28],["Furnace/AC",14],["Crickets/Mice",8],["Creaks",7],["Leaky Faucet",4],["Refrigerator",4]],
	["What do parents most like to receive from their children?",["Hugs",37],["Love",23],["Kisses",11],["Good Grades",8],["Artwork",6],["Cards",6],["Respect",5]],
	["Name something you do at least twice during a long car ride with family",["Sing",27],["Fall Asleep",26],["Make a Pit Stop",22],["Get Food",14],["Fight",5],["Hear 'Are we there yet'",3]],
	["Name something that might be lying on a teenager’s floor",["Clothes",39],["Shoes",18],["Books",15],["Food",12],["Video Games",4],["Electronics",4],["Trash",4]],
	["Name something kids love to eat that adults like too",["Ice Cream",30],["Candy",18],["Pizza",16],["Cookies",9],["Hot Dogs",8],["French Fries",7],["Popsicles",7]],
	["Name something teens may be afraid of when moving away to college",["Expenses",41],["Being Alone",25],["Leaving Home",12],["Making New Friends",5],["Difficult Classes",4],["New Roommates",3]],
	["It is hard to keep your face clean while eating ____",["Ice Cream",26],["Ribs",25],["Spaghetti",25],["Sloppy Joes",10],["Pizza",5],["Watermelon",4]],
	["Tell me the number of people who can ride comfortably in a van (numeric only)",["6",47],["7",23],["8",17],["5",5],["10",3],["9",2],["2",2]],
	["Name something in your kitchen that you’d use as a musical instrument",["Pots and Pans",44],["Spoons",25],["Glasses",11],["Wire Whisk",6],["Broom",4],["Blender",3]],
	["Name a character from The Lord Of The Rings",["Frodo",37],["Gandalf",16],["Gollum",13],["Legolas",12],["Aragorn",9],["Sam",7],["Gimli",3]],
	["Name a school subject that people often become bad at in adulthood",["Math",35],["English/Spelling",21],["History",20],["Science",12],["Geography",5],["Physical Fitness",3],["Foreign Language",3]],
	["Name something you’d find in a scientist’s lab",["Test Tubes",26],["Beakers",23],["Microscope",18],["Chemicals",12],["Bunsen Burners",8],["Lab Coat",6],["Goggles",4]],
	["What does a child do more of once they become a teenager?",["Argue",30],["Eat",14],["Party",11],["Sleep",10],["Date",10],["Text",8],["Shop",5]],
	["Name something kids do over their summer vacation",["Swim",32],["Play",24],["Go to Camp",17],["Sleep In",12],["Travel",5],["Watch TV",3],["Read",3]],
	["Name a popular pick-up line",["Do I know You",33],["Hey Baby",28],["What’s Your Sign",12],["Fall From Heaven",9],["Come Here Often",6],["How You Doing",4]],
	["What do you need to check to ensure that your car runs properly?",["Oil",44],["Gas",20],["Engine",15],["Brakes",6],["Tires",6],["Battery",4]],
	["Which orchestra instrument would be most effective if you wanted to wake someone up?",["Trumpet",40],["Tuba",23],["French Horn",17],["Drums",7],["Cymbals",5],["Xylophone",3],["Trombone",3]],
	["Name a kitchen item that might be used to make lava on a volcano model",["Baking Soda",32],["Ketchup",32],["Jello",8],["Water",7],["Soda",5],["Tomato Sauce",5],["Pudding",4]],
	["Name something a teenager couldn’t live without",["Phone",49],["Computer",13],["Car",12],["Music",9],["TV",7],["Money",6],["Clothes",3]],
	["Name something college roommates might argue about",["Cleaning",47],["Food",10],["Money",10],["Space",10],["Music",7],["Bedtime",7]],
	["After a week of camping, what luxury at home are you most excited to have again?",["Bed",35],["Shower",25],["Internet",13],["Toilet",11],["Electricity",4],["Air Conditioner",4],["Computer",3]],
	["Instead of get a job, name something a person might do after college",["Travel",35],["Get Married",33],["Go Back to School",12],["Move Back Home",8],["Party",5],["Join the Military",3]],
	["If American Idol had an animal competition, which animal would have the best chances?",["Dog",30],["Bird",24],["Monkey",23],["Cat",11],["Lion",5],["Cow",4]],
	["Name something you might need to buy before starting a new school year",["Backpack",27],["Clothes",20],["Pencils",12],["Pens",12],["Binder",9],["Books",7],["Notebook",5]],
	["Name something you keep in your car glove compartment",["Registration",35],["Insurance Card",23],["Charging Cable",13],["Flashlight",12],["Gloves",8],["Tissues",4],["Car Manual",3]],
	["Name the worst thing to have to share with a sibling",["Clothes",33],["Bedroom",25],["Bed",20],["Toys",10],["Food",4],["Bathroom",3],["Car",3]],
	["Name a legendary/mythical creature that would be a huge hit if featured at the zoo",["Big Foot",34],["King Kong",17],["Godzilla",14],["Dragon",14],["Unicorn",11],["Loch Ness Monster",8]],
	["Name a type of service person who you never know how much to tip",["Server",58],["Valet",13],["Hairdresser",12],["Taxi Driver",7],["Bartender",5],["Bellhop",4]],
	["Name a movie that wasn’t nearly as good as the book",["Harry Potter",47],["Twilight",12],["Percy Jackson",11],["Lord Of The Rings",10],["Divergent",9],["Eragon",7],["Dune",4]],
	["What time is the earliest you’re willing to get up on a Saturday? (by hour)",["10",34],["8",32],["9",13],["11",6],["Noon",5],["7",4]],
	["Name a musical instrument that’s difficult to play",["Violin",34],["Harp",14],["Piano",14],["Guitar",11],["Flute",9],["Trumpet",9],["Oboe",5]],
	["Name something a person with extra long arms would be good at",["Sports",51],["Reaching",26],["Hugging",6],["Rock Climbing",6],["Paint Ceilings",5],["Change Lightbulbs",3]],
	["Name something specific that piles up before you can get to it",["Laundry",28],["Bills",23],["Dishes",22],["Trash",11],["Mail",8],["Leaves",4],["Snow",3]],
	["What should a spy avoid wearing, if he doesn’t want to be identified by his profession?",["Sunglasses",39],["Hat",19],["Trench Coat",18],["Wig",9],["Badge",5],["Weapon",4]],
	["Name a complaint people have about their cell phones",["No Service",21],["Dropped Calls",19],["Reception",16],["Expensive",14],["Battery",12],["Break Easily",4],["Can’t Hear Well",3]],
	["Name a place where you don’t want front row seats",["Movie Theater",34],["Place of Worship",23],["Concert",12],["Funeral",10],["Seaworld",7],["Circus",4],["School",3]],
	["Name a club a high school student might belong to",["Glee",23],["Chess",16],["Debate",14],["Drama",13],["Art",6],["Foreign Language",5]],
	["Name something that both men and women use to get ready for a date",["Shower",34],["Fragrance",26],["Comb",15],["Toothpaste/Brush",9],["Deodorant",5],["Mirror",4],["Razor",4]],
	["Name something a drive-thru worker might forget to give you that would be annoying",["Straw",26],["Change",20],["Napkins",19],["Ketchup",13],["Food",11],["Drink",7],["Receipt",3]],
	["Finish the sentence: hold your _____",["Breath",40],["Horses",30],["Tongue",9],["Hand",8],["Nose",3],["Own",3]],
	["Name a public place you want to wash your hands immediately after leaving",["Hospital",30],["Restaurant",25],["Zoo",13],["Shopping Center",11],["Bus/Subway",8],["Gas Station",4]],
	["Name something a teen wouldn’t be able to go without for a day",["Phone",50],["TV",16],["Snacks/Food",11],["Video Games",8],["Computer",5],["Music",3],["A Loan",3]],
];

const ANSWER_COUNT = 8;
const QUESTION_ELEM = 'qtext';
const NUM_PREFIX = 'num';
const ANS_PREFIX = 'text';
const POINT_PREFIX = 'points';
const ANSBOX_PREFIX = 'ans';
const FAMILY_PRE = 'fam';
const SCORE_PRE = 'score';
const SCORE_BLOCKS = 5;

const FAMILY_COUNT = family.length;
var score = [];
var order = [];
var turnMark = -1;
var buzzGuess = false;
var famTile = -1;

// fill score array
for (let i = 0; i < FAMILY_COUNT; i++)
	score[i] = 0;

function populate() {
	document.getElementById('qtext').textContent = database[index][0];
	var ansList = '';
	for (let i = 1; i <= ANSWER_COUNT; i++) {
		if (i >= database[index].length) {
			document.getElementById(NUM_PREFIX+i).textContent = '';
			document.getElementById(ANS_PREFIX+i).textContent = '';
			document.getElementById(POINT_PREFIX+i).textContent = '';
		} else {
			ansList += (i)+': '+database[index][i][0]+'\n';
			document.getElementById(NUM_PREFIX+i).textContent = i;
			document.getElementById(ANS_PREFIX+i).textContent = database[index][i][0];
			document.getElementById(POINT_PREFIX+i).textContent = database[index][i][1];
		}
	}
	console.log("** Question",index,"***");
	console.log(ansList);
}

function showAnswers() {
	var ansList = '';
	for (let i = 1; i <= ANSWER_COUNT; i++) {
		unused = document.getElementById(ANSBOX_PREFIX + i).style.display == 'none';
		if (i < database[index].length && unused) {
			ansList += (i)+': '+database[index][i][0]+'\n';
		}
	}
	console.log(ansList);
}

function show(answer,isVisible=true) {
	if (!isVisible || answer < database[index].length) {
		document.getElementById(ANSBOX_PREFIX + answer).style.display = isVisible ? 'table' : 'none';
		document.getElementById(NUM_PREFIX + answer).style.display = isVisible ? 'none' : 'inline';
	}
}

function showAll(isVisible = true) {
	for (let i = 1; i <= ANSWER_COUNT; i++) {
		show(i,isVisible);
	}
}

function updateOrder() {
	setTiles(false);
	var visited = [];
	for (var i = 1; i <= FAMILY_COUNT; i++) {
		var max = -1;
		var fam = -1;
		for (var j = 0; j < FAMILY_COUNT; j++) {
			if (!visited[j] && score[j] > max) {
				max = score[j];
				fam = j;
			}
		}
		visited[fam] = true;
		order[i-1] = fam;
		//console.log(i,fam,family[fam],score[fam]);
		document.getElementById(FAMILY_PRE+i).textContent = family[fam];
		document.getElementById(SCORE_PRE+i).textContent = score[fam];
	}
}

function updateScores() {
	for (var i = 0; i < FAMILY_COUNT; i++) {
		//console.log(i,family[order[i]],score[order[i]]);
		document.getElementById(SCORE_PRE+(i+1)).textContent = score[order[i]];
	}
}

// advance to next question
function next() {
	showAll(false);
	updateOrder();
	if (index == 0) {
		for (let i = 0; i < FAMILY_COUNT; i++)
			score[i] = 0;
		updateScores();
	}
	index++;
	populate();
}

// function to choose who buzzed first
function buzz(team) {
	var buzzTeam = -1;
	if (team >= FAMILY_COUNT) {
		console.log('Invalid team!');
		return;
	}
	buzzTeam = team;
	buzzGuess = true;
	turnMark = FAMILY_COUNT;
	order[FAMILY_COUNT] = buzzTeam;
	console.log(family[buzzTeam]+ "'s turn!");
	
	for (let i = 0; i < FAMILY_COUNT; i++)
		if (order[i] == order[FAMILY_COUNT]) {
			famTile = i+1;
			break;
		}
	setTiles(famTile);
}

// advance turn
function advanceTurn() {
	--turnMark;
	if (turnMark < 0) turnMark = FAMILY_COUNT;
	
	if (FAMILY_COUNT != turnMark && order[turnMark] == order[FAMILY_COUNT]) {
		advanceTurn();
		return;
	}
	
	console.log(family[order[turnMark]]+ "'s turn!");
	setTiles(turnMark+1);
}

function setTiles(tile) {
	for (let i = 1; i <= FAMILY_COUNT; i++) {
		document.getElementById(FAMILY_PRE+i).parentElement.parentElement.parentElement.classList.remove('highlight');
		document.getElementById(FAMILY_PRE+i).style.backgroundColor = '';
	}

	if (tile) {
		if (tile > FAMILY_COUNT) tile = famTile;
		document.getElementById(FAMILY_PRE+tile).parentElement.parentElement.parentElement.classList.add('highlight');
		document.getElementById(FAMILY_PRE+tile).style.backgroundColor = 'unset';
	}
}

function turn(answer) {
	if (answer == 0) {
		console.log("Incorrect.");
		document.getElementById('x').style.display = 'block';
		if (buzzGuess) buzzGuess = false;
		advanceTurn();

		setTimeout(function() {
			document.getElementById('x').style.display = 'none';
		}, 2000);
	} else {
		console.log("CORRECT!!");
		show(answer);
		score[order[turnMark]] += database[index][answer][1];
		updateScores();

		// advance if general guessing started
		if (!buzzGuess) advanceTurn();
	}

	showAnswers();
}

function final(){
	document.getElementById('lights').style.display = "none";
	document.getElementById('scoreboard').classList.remove('scoreboard');
	document.getElementById('scoreboard').classList.add('final_scoreboard');
	document.getElementById('blackboard').classList.remove('blackboard');
	document.getElementById('blackboard').classList.add('final_blackboard');
	document.getElementById('scores').textContent="Final Scores";

	updateOrder();
	setTiles(1);

}

for (let i = FAMILY_COUNT + 1; i <= SCORE_BLOCKS; i++)
	document.getElementById(FAMILY_PRE+i).parentElement.parentElement.parentElement.remove();

updateOrder();

// load larger background
setTimeout(function() {
	document.body.style.backgroundImage = "url('gameshow.jpeg')";
}, 100);
