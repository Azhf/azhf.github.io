	// Declaring variables:
	
$(document).ready(function(){
	$("#pugSelect").hide();
	$("#CheapMic").hide();
	$("#ImportantCallOuts").hide();
	$("#BetterMic").hide();
	$("#ClearMic").hide();
	$("#TypeFast").hide();
	$("#Macro").hide();
	$("#DankMacros").hide();
	$("#Contain").hide();
	$("#Snipe").hide();
	$("#Position").hide();
	$("#Regrab").hide();
	$("#NotGrab").hide();
	$("#Juke").hide();
	$("#MicroJuke").hide();
    $( "#log" ).draggable();
    $( "#upgrades" ).draggable();
    $( "#stats" ).draggable();
    $( "#settings" ).draggable();
	$("#achievements").draggable();
});

// Wins and losses
var wins = 0;
var losses = 0;
var games = 0;
var ties = 0;
var degrees = 0;
var degreeProgress = 0;
var winsNeeded = 1;
var winPercent = 0;
var tagCoins = 0;
var maxTagCoins = Math.floor(wins / 2);

// IRL Skills

var comms = 0;
var mech = 0;
var logic = 0;

// Map Skills

var ricochetSkill = 1;
var velocitySkill = 1;
var wormySkill = 1;
var commandCenterSkill = 1;
var cloudSkill = 1;				//
var smirkSkill = 1;
var boomboxSkill = 1;
var geoKoalaSkill = 1;
var constrictionSkill = 1;
var ironSkill = 1;				//
var hornswoggleSkill = 1;
var womboComboSkill = 1;
var draftSkill = 1;
var transilioSkill = 1;
var pilotSkill = 1;				//
var bulldogSkill = 1;
var ultraDriveSkill = 1;
var emeraldSkill = 1;
var platypusSkill = 1;
var dz4Skill = 1;				//
var renegadeSkill = 1;
var hubSkill = 1;

// Other

var leagueStats = 'none';
var streak = 0;

var upgrades = {
	hasNavigateSpikes: false,
	hasDefense: false,
	hasType: false,
	hasButton: false,
	hasGrab: false,
	hasContain: false,
	hasRegrab: false,
	hasTeamTiles: false,
	hasPups: false,
	hasDiagonalMovement: false,
	hasUseBombs: false,
	hasMemorizeMaps: false,
	hasTypeFast: false,
	hasNotGrab: false,
	hasMacro: false,
	hasKiss: false,
	hasSnipe: false,
	hasJuke: false,
	hasTimePups: false,
	hasTagproLead: false,
	hasPosition: false,
	hasMumble: false,
	hasDankMacros: false,
	hasImportantCallOuts: false,
	hasMicroJuke: false,
	hasCheapMic: false,
	hasBetterMic: false,
	hasClearMic: false
}

var flair = {
	bacon: false,
	moon: false,
	snowflake: false,
	dolphin: false,
	alien: false,
	roadSign: false,
	peaceSign: false,
	fluxCapacitor: false,
	microphone: false,
	boiling: false,
	dalmatians: false,
	abc: false,
	love: false,
	pokemon: false,
	phi: false,
	uturn: false,
	world: false,
	bowlingBall: false,
	pi: false
}

function showStats() {
	document.getElementById('wins').innerHTML = wins;
	document.getElementById('losses').innerHTML = losses;
	document.getElementById('ties').innerHTML = ties;
	document.getElementById('games').innerHTML = games;
	document.getElementById('streak').innerHTML = streak;
	document.getElementById('winpercent').innerHTML = winPercent;
	document.getElementById('tagcoins').innerHTML = tagCoins;
	document.getElementById('degrees').innerHTML = degrees;
}

var tcSpent = 0;

function maxTC() {
	var max = Math.floor(wins / 2);
	maxTagCoins = max;
	maxTagCoins = max - tcSpent;
}

var ach1 = false;
var ach2 = false;
var ach3 = false;
var ach4 = false;
var ach5 = false;
var ach6 = false;
var ach7 = false;
var ach8 = false;
var ach9 = false;
var ach10 = false;
var ach11 = false;
var ach12 = false;
var ach13 = false;

function degreeCheck() {
	if (wins > 0 && wins < 2) {
		degrees = 1;
	}
	if (wins > 1 && wins < 4) {
		degrees = 2;
	}
	if (wins > 3 && wins < 6) {
		degrees = 3;
	}
	if (wins > 5 && wins < 9) {
		degrees = 4;
	}
	if (wins > 8 && wins < 11){
		degrees = 5;
	}
	if (wins > 10 && wins < 14) {
		degrees = 6;
		flair.bacon = true;
	}
	if (wins > 13 && wins < 17) {
		degrees = 7;
	}
	if (wins > 16 && wins < 21) {
		degrees = 8;
	}
	if (wins > 20 && wins < 24) {
		degrees = 9;
	}
	if (wins > 23 && wins < 28) {
		degrees = 10;
	}
	if (wins > 27 && wins < 33) {
		degrees = 11;
		flair.moon = true;
	}
	if (wins > 32 && wins < 37) {
		degrees = 12;
	}
	if (wins > 36 && wins < 42) {
		degrees = 13;
	}
	if (wins > 41 && wins < 48) {
		degrees = 14;
	}
	if (wins > 47 && wins < 54) {
		degrees = 15;
	}
	if (wins > 53 && wins < 60) {
		degrees = 16;
	}
	if (wins > 59 && wins < 66) {
		degrees = 17;
	}
	if (wins > 65 && wins < 73) {
		degrees = 18;
	}
	if (wins > 72 && wins < 81) {
		degrees = 19;
	}
	if (wins > 80 && wins < 89) {
		degrees = 20;
	}
	if (wins > 88 && wins < 97) {
		degrees = 21;
	}
	if (wins > 96 && wins < 106) {
		degrees = 22;
	}
	if (wins > 105 && wins < 116) {
		degrees = 23;
	}
	if (wins > 115 && wins < 126) {
		degrees = 24;
	}
	if (wins > 125 && wins < 136) {
		degrees = 25;
	}
	if (wins > 135 && wins < 147) {
		degrees = 26;
	}
	if (wins > 146 && wins < 159) {
		degrees = 27;
	}
	if (wins > 158 && wins < 171) {
		degrees = 28;
	}
	if (wins > 170 && wins < 184) {
		degrees = 29;
	}
	if (wins > 183 && wins < 197) {
		degrees = 30;
	}
	if (wins > 196 && wins < 211) {
		degrees = 31;
	}
	if (wins > 210 && wins < 226) {
		degrees = 32;
		flair.snowflake = true;
	}
	if (wins > 225 && wins < 241) {
		degrees = 33;
	}
	if (wins > 240 && wins < 257) {
		degrees = 34;
	}
	if (wins > 256 && wins < 274) {
		degrees = 35;
	}
	if (wins > 273 && wins < 291) {
		degrees = 36;
	}
	if (wins > 290 && wins < 309) {
		degrees = 37;
	}
	if (wins > 308 && wins < 327) {
		degrees = 38;
	}
	if (wins > 326 && wins < 346) {
		degrees = 39;
	}
	if (wins > 345 && wins < 366) {
		degrees = 40;
	}
	if (wins > 365 && wins < 387) {
		degrees = 41;
	}
	if (wins > 386 && wins < 408) {
		degrees = 42;
		flair.dolphin = true;
	}
	if (wins > 407 && wins < 430) {
		degrees = 43;
	}
	if (wins > 429 && wins < 453) {
		degrees = 44;
	}
	if (wins > 452 && wins < 476) {
		degrees = 45;
	}
	if (wins > 475 && wins < 500) {
		degrees = 46;
	}
	if (wins > 499 && wins < 525) {
		degrees = 47;
	}
	if (wins > 524 && wins < 551) {
		degrees = 48;
	}
	if (wins > 550 && wins < 577) {
		degrees = 49;
	}
	if (wins > 576 && wins < 604) {
		degrees = 50;
	}
	if (wins > 603 && wins < 632) {
		degrees = 51;
		flair.alien = true;
	}
	if (wins > 631 && wins < 660) {
		degrees = 52;
	}
	if (wins > 659 && wins < 689) {
		degrees = 53;
	}
	if (wins > 688 && wins < 719) {
		degrees = 54;
	}
	if (wins > 718 && wins < 749) {
		degrees = 55;
	}
	if (wins > 748 && wins < 780) {
		degrees = 56;
	}
	if (wins > 779 && wins < 812) {
		degrees = 57;
	}
	if (wins > 811 && wins < 845) {
		degrees = 58;
	}
	if (wins > 844 && wins < 878) {
		degrees = 59;
	}
	if (wins > 877 && wins < 912) {
		degrees = 60;
	}
	if (wins > 911 && wins < 947) {
		degrees = 61;
	}
	if (wins > 946 && wins < 982) {
		degrees = 62;
	}
	if (wins > 981 && wins < 1018) {
		degrees = 63;
	}
	if (wins > 1017 && wins < 1054) {
		degrees = 64;
	}
	if (wins > 1053 && wins < 1091) {
		degrees = 65;
	}
	if (wins > 1090 && wins < 1129) {
		degrees = 66;
		flair.roadSign = true;
	}
	if (wins > 1128 && wins < 1168) {
		degrees = 67;
	}
	if (wins > 1167 && wins < 1207) {
		degrees = 68;
	}
	if (wins > 1206 && wins < 1247) {
		degrees = 69;
		flair.peaceSign = true;
	}
	if (wins > 1246 && wins < 1287) {
		degrees = 70;
	}
	if (wins > 1286 && wins < 1328) {
		degrees = 71;
	}
	if (wins > 1327 && wins < 1369) {
		degrees = 72;
	}
	if (wins > 1368 && wins < 1412) {
		degrees = 73;
	}
	if (wins > 1411 && wins < 1454) {
		degrees = 74;
	}
	if (wins > 1453 && wins < 1498) {
		degrees = 75;
	}
	if (wins > 1497 && wins < 1541) {
		degrees = 76;
	}
	if (wins > 1540 && wins < 1586) {
		degrees = 77;
	}
	if (wins > 1585 && wins < 1631) {
		degrees = 78;
	}
	if (wins > 1630 && wins < 1676) {
		degrees = 79;
	}
	if (wins > 1675 && wins < 1722) {
		degrees = 80;
	}
	if (wins > 1721 && wins < 1769) {
		degrees = 81;
	}
	if (wins > 1768 && wins < 1816) {
		degrees = 82;
	}
	if (wins > 1815 && wins < 1864) {
		degrees = 83;
	}
	if (wins > 1863 && wins < 1912) {
		degrees = 84;
	}
	if (wins > 1911 && wins < 1960) {
		degrees = 85;
	}
	if (wins > 1959 && wins < 2009) {
		degrees = 86;
	}
	if (wins > 2008 && wins < 2059) {
		degrees = 87;
	}
	if (wins > 2058 && wins < 2109) {
		degrees = 88;
		flair.fluxCapacitor = true;
	}
	if (wins > 2108 && wins < 2159) {
		degrees = 89;
	}
	if (wins > 2158 && wins < 2210) {
		degrees = 90;
	}
	if (wins > 2209 && wins < 2261) {
		degrees = 91;
	}
	if (wins > 2260 && wins < 2313) {
		degrees = 92;
	}
	if (wins > 2312 && wins < 2365) {
		degrees = 93;
	}
	if (wins > 2364 && wins < 2418) {
		degrees = 94;
	}
	if (wins > 2417 && wins < 2471) {
		degrees = 95;
	}
	if (wins > 2470 && wins < 2524) {
		degrees = 96;
	}
	if (wins > 2523 && wins < 2578) {
		degrees = 97;
	}
	if (wins > 2577 && wins < 2632) {
		degrees = 98;
		flair.microphone = true;
	}
	if (wins > 2631 && wins < 2687) {
		degrees = 99;
	}
	if (wins > 2686 && wins < 2741) {
		degrees = 100;
		flair.boiling = true;
	}
}

// Savegame

function save() {
	var saveGame = {
    wins: wins, 									// The basics
    losses: losses,
    ties: ties,
	games: games,
	degreeProgress: degreeProgress,
	winsNeeded: winsNeeded,
	degrees: degrees,
	winpercent: winpercent,
	comms: comms, 									//IRL Skills
	logic: logic,
	mech: mech,
	ricochetSkill: ricochetSkill,					//Map Skills
	velocitySkill: velocitySkill,
	wormySkill: wormySkill,
	commandCenterSkill: commandCenterSkill,
	cloudSkill: cloudSkill,
	smirkSkill: smirkSkill,
	boomboxSkill: boomboxSkill,
	geoKoalaSkill: geoKoalaSkill,
	constrictionSkill: constrictionSkill,
	ironSkill: ironSkill,
	hornswoggleSkill: hornswoggleSkill,
	womboComboSkill: womboComboSkill,
	draftSkill: draftSkill,
	transilioSkill: transilioSkill,
	pilotSkill: pilotSkill,
	bulldogSkill: bulldogSkill,
	ultraDriveSkill: ultraDriveSkill,
	emeraldSkill: emeraldSkill,
	platypusSkill: platypusSkill,
	dz4Skill: dz4Skill,
	renegadeSkill: renegadeSkill,
	hubSkill: hubSkill,
	tagCoins: tagCoins,								//Other
	upgrades: upgrades,
	maxTagCoins: maxTagCoins,
	tcSpent: tcSpent,
	flair: flair,
	};
	localStorage.setItem("TPsaveGame",JSON.stringify(saveGame));
	document.getElementById('log2').innerHTML = 'The game has been saved.';
}

function achievementCheck() {
	if(games >= 1 && ach1 !== true) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!';
		ach1 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(games >= 100 && ach2 !== true) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Pubster: Play 100 pubs!';
		ach2 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(games >= 1000 && ach3 !== true) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Pubmaster: Play 1000 pubs!';
		ach3 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(winPercent >= 55 && ach4 !== true && games >= 50) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Slasher: Obtain 55% Win Percentage!';
		ach4 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(winPercent >= 65 && ach5 !== true && games >= 50) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Working Class: Obtain 65% Win Percentage!';
		ach5 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(winPercent >= 75 && ach6 !== true && games >= 50) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Viking: Obtain 75% Win Percentage!';
		ach6 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(winPercent >= 90 && ach7 !== true && games >= 50) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Juke King: Obtain 90% Win Percentage!';
		ach7 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(streak >= 5 && ach8 !== true) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Good Streak: Obtain a 5 win streak!';
		ach8 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(streak >= 20 && ach9 !== true) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Great Streak: Obtain a 20 win streak!';
		ach9 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(streak >= 50 && ach10 !== true) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Insane Streak: Obtain a 50 win streak!';
		ach10 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(upgrades.hasDankMacros = true && ach11 !== true) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Memecros: Obtain dank macros!';
		ach11 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(upgrades.hasRegrab = true && ach12 !== true) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Learn to regrab: Self explanatory.!';
		ach12 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
	if(upgrades.hasClearMic = true && ach13 !== true) {
		document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: All mics: Self explanatory.!';
		ach13 = true;
		setTimeout(function() { document.getElementById('achievementLog').innerHTML = 'You have earned the achievement: Welcome to TagPro: Pub once!'; },10000);
	};
}

window.setInterval(function(){ // autosave
	
	save();
	document.getElementById('log2').innerHTML = 'The game has been saved.';
	
}, 60000);

window.setInterval(function(){ // updates stats every second, automagically.
	
	showStats();
	achievementCheck();
	
}, 1000);

/*
function deleteSave() {
	var userResponse = prompt("Are you sure?")  										// Making sure
	if(userResponse === 'yes') {
		//localStorage.remove("TPsaveGame");
		localStorage.clear();
		var wins = 0;																	// Resetting variables
		var losses = 0;												//Game Stats
		var games = 0;
		var ties = 0;
		var degrees = 0;
		var degreeProgress = 0;
		var winsNeeded = 1;
		var winPercent = 0;
		var tagCoins = 0;																				
		var comms = 0;												// IRL Skills
		var mech = 0;
		var logic = 0;
		var ricochetSkill = 1;										// Map Skills
		var velocitySkill = 1;
		var wormySkill = 1;
		var commandCenterSkill = 1;
		var cloudSkill = 1;				//
		var smirkSkill = 1;
		var boomboxSkill = 1;
		var geoKoalaSkill = 1;
		var constrictionSkill = 1;
		var ironSkill = 1;				//
		var hornswoggleSkill = 1;
		var womboComboSkill = 1;
		var draftSkill = 1;
		var transilioSkill = 1;
		var pilotSkill = 1;				//
		var bulldogSkill = 1;
		var ultraDriveSkill = 1;
		var emeraldSkill = 1;
		var platypusSkill = 1;
		var dz4Skill = 1;				//
		var renegadeSkill = 1;
		var hubSkill = 1;
		var leagueStats = 'none';									//Other
		var streak = 0;
		var maxTagCoins = 0;
		var upgrades = {
			hasNavigateSpikes: false,
			hasDefense: false,
			hasType: false,
			hasButton: false,
			hasGrab: false,
			hasContain: false,
			hasRegrab: false,
			hasTeamTiles: false,
			hasPups: false,
			hasDiagonalMovement: false,
			hasUseBombs: false,
			hasMemorizeMaps: false,
			hasTypeFast: false,
			hasNotGrab: false,
			hasMacro: false,
			hasKiss: false,
			hasSnipe: false,
			hasJuke: false,
			hasTimePups: false,
			hasTagproLead: false,
			hasPosition: false,
			hasMumble: false,
			hasDankMacros: false,
			hasImportantCallOuts: false,
			hasMicroJuke: false,
			hasCheapMic: false,
			hasBetterMic: false,
			hasClearMic: false
		};
		
		showStats();
		document.getElementById('log2').innerHTML = 'The save game has been deleted, please refresh to finish the process!';
	}; 
}  */

// ----------------------------------------------- //

	// Functions

	
// Upgrades (In order of when you get them)

function purchaseNavigateSpikes() {
	if (tagCoins >= 5) {
		mech = mech + 10;
		tagCoins = tagCoins - 5;
		document.getElementById('log2').innerHTML = 'You learned to navigate spikes!';
		$('#NavigateSpikes').remove();
		upgrades.hasNavigateSpikes = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 5;
		maxTC();
	};
}

function purchaseDefense() {
		if (tagCoins >= 5) {
		mech = mech + 10;
		tagCoins = tagCoins - 5;
		document.getElementById('log2').innerHTML = 'You learned how to defend!';
		$('#Defense').remove();
		upgrades.hasDefense = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 5;
		maxTC();
		$("#Contain").show();
	};
}

function purchaseType() {
		if (tagCoins >= 5) {
		comms = comms + 10;
		tagCoins = tagCoins - 5;
		document.getElementById('log2').innerHTML = 'You learned to type!';
		$('#Type').remove();
		upgrades.hasType = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 5;
		maxTC();
		$("#TypeFast").show();
	};
}

// DIFF 3

function purchaseButton() {
	if (tagCoins >= 10) {
		logic = logic + 10;
		tagCoins = tagCoins - 10;
		document.getElementById('log2').innerHTML = 'You learned to hold buttons at the right time!';
		$('#Button').remove();
		upgrades.hasButton = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 10;
		maxTC();
	};
}

function purchaseGrab() {
	if (tagCoins >= 10) {
		mech = mech + 10;
		logic = logic + 5;
		tagCoins = tagCoins - 10;
		document.getElementById('log2').innerHTML = 'You learned to grab the flag at the right time!';
		$('#Grab').remove();
		upgrades.hasGrab = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 10;
		maxTC();
		$("#Regrab").show();
	};
}

function purchaseContain() {
	if (tagCoins >= 10) {
		mech = mech + 10;
		tagCoins = tagCoins - 10;
		document.getElementById('log2').innerHTML = 'You learned to contain!';
		$('#Contain').remove();
		upgrades.hasContain = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 10;
		maxTC();
		$("#Snipe").show();
	};
}

function purchaseRegrab() {
	if (tagCoins >= 10) {
		logic = logic + 10;
		tagCoins = tagCoins - 10;
		document.getElementById('log2').innerHTML = 'You learned to get regrab!';
		$('#Regrab').remove();
		upgrades.hasRegrab = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 10;
		maxTC();
		$("#NotGrab").show();
	};
}

function purchaseTeamTiles() {
	if (tagCoins >= 10) {
		logic = logic + 10;
		tagCoins = tagCoins - 10;
		document.getElementById('log2').innerHTML = 'You learned what team tiles are!';
		$('#TeamTiles').remove();
		upgrades.hasTeamTiles = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 10;
		maxTC();
	};
}

function purchasePups() {
	if (tagCoins >= 10) {
		logic = logic + 10;
		tagCoins = tagCoins - 10;
		document.getElementById('log2').innerHTML = 'You learned to get pups!';
		$('#Pups').remove();
		upgrades.hasPups = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 10;
		maxTC();
	};
}

// DIFF 4

function purchaseDiagonalMovement() {
	if (tagCoins >= 15) {
		mech = mech + 10;
		logic = logic + 5;
		tagCoins = tagCoins - 15;
		document.getElementById('log2').innerHTML = 'You learned that diagonal movement is faster!';
		$('#DiagonalMovement').remove();
		upgrades.hasDiagonalMovement = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 15;
		maxTC();
	};
}

function purchaseUseBombs() {
	if (tagCoins >= 15) {
		logic = logic + 10;
		tagCoins = tagCoins - 15;
		document.getElementById('log2').innerHTML = 'You learned to use bombs effectively!';
		$('#UseBombs').remove();
		upgrades.hasUseBombs = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 15;
		maxTC();
	};
}

function purchaseMemorizeMaps() {
	if (tagCoins >= 15) {
		logic = logic + 10;
		tagCoins = tagCoins - 15;
		document.getElementById('log2').innerHTML = 'You memorized all of the maps!';
		$('#MemorizeMaps').remove();
		upgrades.hasMemorizeMaps = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 15;
		maxTC();
	};
}

function purchaseTypeFast() {
	if (tagCoins >= 15) {
		comms = comms + 10;
		tagCoins = tagCoins - 15;
		document.getElementById('log2').innerHTML = 'You learned to type faster!';
		$('#TypeFast').remove();
		upgrades.hasTypeFast = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 15;
		maxTC();
		$("#Macro").show();
	};
}

function purchaseNotGrab() {
	if (tagCoins >= 15) {
		logic = logic + 10;
		tagCoins = tagCoins - 15;
		document.getElementById('log2').innerHTML = "You learned when you shouldn't grab!";
		$('#NotGrab').remove();
		upgrades.hasNotGrab = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 15;
		maxTC();
		$("#Juke").show();
	};
}

// DIFF 5

function purchaseMacro() {
	if (tagCoins >= 20) {
		comms = comms + 10;
		tagCoins = tagCoins - 20;
		document.getElementById('log2').innerHTML = 'You learned to use macros!';
		$('#Macro').remove();
		upgrades.hasMacro = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 20;
		maxTC();
		$("#DankMacros").show();
	};
}

function purchaseKiss() {
	if (tagCoins >= 20) {
		logic = logic + 10;
		tagCoins = tagCoins - 20;
		document.getElementById('log2').innerHTML = 'You learned to kiss!';
		$('#Kiss').remove();
		upgrades.hasKiss = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 20;
		maxTC();
	};
}

function purchaseSnipe() {
	if (tagCoins >= 20) {
		mech = mech + 10;
		tagCoins = tagCoins - 20;
		document.getElementById('log2').innerHTML = 'You learned to snipe!';
		$('#Snipe').remove();
		upgrades.hasSnipe = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 20;
		maxTC();
		$("#Position").show();
	};
}

function purchaseJuke() {
	if (tagCoins >= 20) {
		mech = mech + 10;
		tagCoins = tagCoins - 20;
		document.getElementById('log2').innerHTML = 'You learned to juke!';
		$('#Juke').remove();
		upgrades.hasJuke = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 20;
		maxTC();
		$("#MicroJuke").show();
	};
}

function purchaseTimePups() {
	if (tagCoins >= 20) {
		comms = comms + 10;
		logic = logic + 5;
		tagCoins = tagCoins - 20;
		document.getElementById('log2').innerHTML = 'You learned to time pups!';
		$('#TimePups').remove();
		upgrades.hasTimePups = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 20;
		maxTC();
	};
}

function purchaseTagproLead() {
	if (tagCoins >= 20) {
		mech = mech + 10;
		tagCoins = tagCoins - 20;
		document.getElementById('log2').innerHTML = 'You learned to tagpro lead!';
		$('#TagproLead').remove();
		upgrades.hasTagproLead = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 20;
		maxTC();
	};
}

function purchasePosition() {
	if (tagCoins >= 20) {
		mech = mech + 10;
		logic = logic + 5;
		tagCoins = tagCoins - 20;
		document.getElementById('log2').innerHTML = 'You learned to position yourself!';
		$('#Position').remove();
		upgrades.hasPosition = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 20;
		maxTC();
	};
}

// DIFF 6

function purchaseMumble() {
	if (tagCoins >= 25) {
		comms = comms + 10;
		tagCoins = tagCoins - 25;
		document.getElementById('log2').innerHTML = 'You learned to use mumble!';
		$('#Mumble').remove();
		$("#pugSelect").show();
		$("#CheapMic").show();
		upgrades.hasMumble = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 25;
		maxTC();
	};
}

// DIFF 7

function purchaseDankMacros() {
	if (tagCoins >= 30) {
		comms = comms + 10;
		tagCoins = tagCoins - 30;
		document.getElementById('log2').innerHTML = 'You learned to use DANK macros!';
		$('#DankMacros').remove();
		upgrades.hasDankMacros = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 30;
		maxTC();
	};
}

function purchaseImportantCallOuts() {
	if (tagCoins >= 30) {
		comms = comms + 10;
		tagCoins = tagCoins - 30;
		document.getElementById('log2').innerHTML = 'You learned to call out important things!';
		$('#ImportantCallOuts').remove();
		upgrades.hasImportantCallOuts = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 30;
		maxTC();
	};
}

// DIFF 9

function purchaseMicroJuke() {
	if (tagCoins >= 40) {
		mech = mech + 10;
		tagCoins = tagCoins - 40;
		document.getElementById('log2').innerHTML = 'You learned to microjuke!';
		$('#MicroJuke').remove();
		upgrades.hasMicroJuke = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 40;
		maxTC();
	};
}

// PURCHASES

function purchaseCheapMic() {
	if (tagCoins >= 25) {
		comms = comms + 10;
		tagCoins = tagCoins - 25;
		document.getElementById('log2').innerHTML = 'You purchased a cheap mic!';
		$('#CheapMic').remove();
		$("#ImportantCallOuts").show();
		$("#BetterMic").show();
		upgrades.hasCheapMic = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 25;
		maxTC();
	};
}

function purchaseBetterMic() {  //Github pls actually update the code when you sync like wtf I shouldn't have to make a dummy comment
	if (tagCoins >= 30) {
		comms = comms + 10;
		tagCoins = tagCoins - 30;
		document.getElementById('log2').innerHTML = 'You purchased a better mic!';
		$('#BetterMic').remove();
		$("#ClearMic").show();
		upgrades.hasBetterMic = true;
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 30;
		maxTC();
	};
}

function purchaseClearMic() {
	if (tagCoins >= 35) {
		comms = comms + 10;
		tagCoins = tagCoins - 35;
		document.getElementById('log2').innerHTML = 'You purchased a clear mic!';
		$('#ClearMic').remove();
		upgrades.hasClearMic = true;
		$('#uphead').remove();
		$('#upgrades:empty').parent().remove();
		tcSpent = tcSpent + 35;
		maxTC();
	};
}

// Required	

/* function degreesCalc() {
	if (degreeProgress === winsNeeded) {
		degreeProgress = 0;
		degrees = degrees + 1;
		// winsNeeded = // PUT THE TAGPRO DEGREE WINS NEEDED CALCULATION ALGORITHM THINGY HERE
	}
} */

function winPercent2() {
	var winPercUnrounded = (wins / games) * 100;
	winPercent = Math.ceil(winPercUnrounded);
}

function collectTagCoins() {
	if (tagCoins >= maxTagCoins) {
		document.getElementById('log2').innerHTML = 'You must win more to collect another tagcoin.';
	} else {
		tagCoins = tagCoins + 1;
		document.getElementById('log2').innerHTML = 'You collected a TagCoin, used to purchase upgrades.';
		showStats();
		maxTC();
	};
}


function upgradeCheck() {
	if (upgrades.hasNavigateSpikes === true) {
		$('#NavigateSpikes').remove();
	};
	if (upgrades.hasDefense === true) {
		$('#Defense').remove();
	};
	if (upgrades.hasType === true) {
		$('#Type').remove();
	};
	if (upgrades.hasButton === true) {
		$('#Button').remove();
	};
	if (upgrades.hasGrab === true) {
		$('#Grab').remove();
	};
	if (upgrades.hasContain === true) {
		$('#Contain').remove();
	};
	if (upgrades.hasRegrab === true) {
		$('#Regrab').remove();
	};
	if (upgrades.hasTeamTiles === true) {
		$('#TeamTiles').remove();
	};
	if (upgrades.hasPups === true) {
		$('#Pups').remove();
	};
	if (upgrades.hasDiagonalMovement === true) {
		$('#DiagonalMovement').remove();
	};
	if (upgrades.hasUseBombs === true) {
		$('#UseBombs').remove();
	};
	if (upgrades.hasMemorizeMaps === true) {
		$('#MemorizeMaps').remove();
	};
	if (upgrades.hasTypeFast === true) {
		$('#TypeFast').remove();
	};
	if (upgrades.hasNotGrab === true) {
		$('#NotGrab').remove();
	};
	if (upgrades.hasMacro === true) {
		$('#Macro').remove();
	};
	if (upgrades.hasKiss === true) {
		$('#Kiss').remove();
	};
	if (upgrades.hasSnipe === true) {
		$('#Snipe').remove();
	};
	if (upgrades.hasJuke === true) {
		$('#Juke').remove();
	};
	if (upgrades.hasTimePups === true) {
		$('#TimePups').remove();
	};
	if (upgrades.hasTagproLead === true) {
		$('#TagproLead').remove();
	};
	if (upgrades.hasPosition === true) {
		$('#Position').remove();
	};
	if (upgrades.hasMumble === true) {
		$('#Mumble').remove();
		$("#pugSelect").show();
	};
	if (upgrades.hasDankMacros === true) {
		$('#DankMacros').remove();
	};
	if (upgrades.hasImportantCallOuts === true) {
		$('#ImportantCallOuts').remove();
	};
	if (upgrades.hasMicroJuke === true) {
		$('#MicroJuke').remove();
	};
	if (upgrades.hasCheapMic === true) {
		$('#CheapMic').remove();
	};
	if (upgrades.hasBetterMic === true) {
		$('#BetterMic').remove();
	};
	if (upgrades.hasClearMic === true) {
		$('#ClearMic').remove();
	};
	$('#upgrades:empty').parent().remove();
	if ( $.trim( $('#upgrades').text() ) == "")
    $('.parent').remove();
}

// LOADING

function load() {
	var savegame = JSON.parse(localStorage.getItem("TPsaveGame"));
	if (typeof savegame.wins !== "undefined") wins = savegame.wins;
	if (typeof savegame.losses !== "undefined") losses = savegame.losses;
	if (typeof savegame.ties !== "undefined") ties = savegame.ties;
	if (typeof savegame.games !== "undefined") games = savegame.games;
	if (typeof savegame.degreeProgress !== "undefined") degreeProgress = savegame.degreeProgress;
	if (typeof savegame.winsNeeded !== "undefined") winsNeeded = savegame.winsNeeded;
	if (typeof savegame.degrees !== "undefined") degrees = savegame.degrees;
	if (typeof savegame.winpercent !== "undefined") winpercent = savegame.winpercent;
	if (typeof savegame.comms !== "undefined") comms = savegame.comms;
	if (typeof savegame.logic !== "undefined") logic = savegame.logic;
	if (typeof savegame.mech !== "undefined") mech = savegame.mech;
	if (typeof savegame.ricochetSkill !== "undefined") ricochetSkill = savegame.ricochetSkill;
	if (typeof savegame.velocitySkill !== "undefined") velocitySkill = savegame.velocitySkill;
	if (typeof savegame.wormySkill !== "undefined") wormySkill = savegame.wormySkill;
	if (typeof savegame.commandCenterSkill !== "undefined") commandCenterSkill = savegame.commandCenterSkill;
	if (typeof savegame.cloudSkill !== "undefined") cloudSkill = savegame.cloudSkill;
	if (typeof savegame.smirkSkill !== "undefined") smirkSkill = savegame.smirkSkill;
	if (typeof savegame.boomboxSkill !== "undefined") boomboxSkill = savegame.boomboxSkill;
	if (typeof savegame.geoKoalaSkill !== "undefined") geoKoalaSkill = savegame.geoKoalaSkill;
	if (typeof savegame.constrictionSkill !== "undefined") constrictionSkill = savegame.constrictionSkill;
	if (typeof savegame.ironSkill !== "undefined") ironSkill = savegame.ironSkill;
	if (typeof savegame.hornswoggleSkill !== "undefined") hornswoggleSkill = savegame.hornswoggleSkill;
	if (typeof savegame.womboComboSkill !== "undefined") womboComboSkill = savegame.womboComboSkill;
	if (typeof savegame.draftSkill !== "undefined") draftSkill = savegame.draftSkill;
	if (typeof savegame.transilioSkill !== "undefined") transilioSkill = savegame.transilioSkill;
	if (typeof savegame.pilotSkill !== "undefined") pilotSkill = savegame.pilotSkill;
	if (typeof savegame.bulldogSkill !== "undefined") bulldogSkill = savegame.bulldogSkill;
	if (typeof savegame.ultraDriveSkill !== "undefined") ultraDriveSkill = savegame.ultraDriveSkill;
	if (typeof savegame.emeraldSkill !== "undefined") emeraldSkill = savegame.emeraldSkill;
	if (typeof savegame.platypusSkill !== "undefined") platypusSkill = savegame.platypusSkill;
	if (typeof savegame.dz4Skill !== "undefined") dz4Skill = savegame.dz4Skill;
	if (typeof savegame.renegadeSkill !== "undefined") renegadeSkill = savegame.renegadeSkill;
	if (typeof savegame.hubSkill !== "undefined") hubSkill = savegame.hubSkill;
	if (typeof savegame.tagCoins !== "undefined") tagCoins = savegame.tagCoins;
	if (typeof savegame.upgrades !== "undefined") upgrades = savegame.upgrades;
	if (typeof savegame.maxTagCoins !== "undefined") maxTagCoins = savegame.maxTagCoins;
	if (typeof savegame.tcSpent !== "undefined") tcSpent = savegame.tcSpent;
	if (typeof savegame.ach1 !== "undefined") ach1 = savegame.ach1;
	if (typeof savegame.ach2 !== "undefined") ach2 = savegame.ach2;
	if (typeof savegame.ach3 !== "undefined") ach3 = savegame.ach3;
	if (typeof savegame.ach4 !== "undefined") ach4 = savegame.ach4;
	if (typeof savegame.ach5 !== "undefined") ach5 = savegame.ach5;
	if (typeof savegame.ach6 !== "undefined") ach6 = savegame.ach6;
	if (typeof savegame.ach7 !== "undefined") ach7 = savegame.ach7;
	if (typeof savegame.ach8 !== "undefined") ach8 = savegame.ach8;
	if (typeof savegame.ach9 !== "undefined") ach9 = savegame.ach9;
	if (typeof savegame.ach10 !== "undefined") ach10 = savegame.ach10;
	if (typeof savegame.ach11 !== "undefined") ach11 = savegame.ach11;
	if (typeof savegame.ach12 !== "undefined") ach12 = savegame.ach12;
	if (typeof savegame.ach13 !== "undefined") ach13 = savegame.ach13;
	if (typeof savegame.flair !== "undefined") flair = savegame.flair;
	document.getElementById('log2').innerHTML = 'The game has been loaded.';
	showStats();
	upgradeCheck();
}

/* function rolling300() {
	???
} */
	
//Pubbing (This is messy)

function pubRicochet(ricochetSkill) {														// Ricochet
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(ricochetSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Ricochet and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Ricochet and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	
	if (ricochetSkill < 100){													// 50% chance of improving your skill
		if (ricochetSkill < 10) {
			ricochetSkill = ricochetSkill + 2;
		}
		
		if (ricochetSkill >= 10 && ricochetSkill < 50) {
			ricochetSkill = ricochetSkill + 1;
		}
		
		if (ricochetSkill >= 50 && ricochetSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				ricochetSkill = ricochetSkill + 1;
			}
		}
		
		if (ricochetSkill >= 80 && ricochetSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				ricochetSkill = ricochetSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

$( document ).ready(function() {
   load();
});

////////////////////////////////////////////////////////////////////

function pubVelocity(velocitySkill) {														// velocity
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(velocitySkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Velocity and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Velocity and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (velocitySkill < 100){													// 50% chance of improving your skill
		if (velocitySkill < 10) {
			velocitySkill = velocitySkill + 2;
		}
		
		if (velocitySkill >= 10 && velocitySkill < 50) {
			velocitySkill = velocitySkill + 1;
		}
		
		if (velocitySkill >= 50 && velocitySkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				velocitySkill = velocitySkill + 1;
			}
		}
		
		if (velocitySkill >= 80 && velocitySkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				velocitySkill = velocitySkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

////////////////////////////////////////////////////////////////////////

function pubWormy(wormySkill) {														// wormy
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(wormySkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Wormy and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Wormy and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (wormySkill < 100){													// 50% chance of improving your skill
		if (wormySkill < 10) {
			wormySkill = wormySkill + 2;
		}
		
		if (wormySkill >= 10 && wormySkill < 50) {
			wormySkill = wormySkill + 1;
		}
		
		if (wormySkill >= 50 && wormySkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				wormySkill = wormySkill + 1;
			}
		}
		
		if (wormySkill >= 80 && wormySkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				wormySkill = wormySkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

////////////////////////////////////////////////////////////

function pubCloud(cloudSkill) {														// cloud
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(cloudSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Cloud and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Cloud and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (cloudSkill < 100){													// 50% chance of improving your skill
		if (cloudSkill < 10) {
			cloudSkill = cloudSkill + 2;
		}
		
		if (cloudSkill >= 10 && cloudSkill < 50) {
			cloudSkill = cloudSkill + 1;
		}
		
		if (cloudSkill >= 50 && cloudSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				cloudSkill = cloudSkill + 1;
			}
		}
		
		if (cloudSkill >= 80 && cloudSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				cloudSkill = cloudSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

////////////////////////////////////////////////////////////

function pubCommandCenter(commandCenterSkill) {														// commandCenter
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(commandCenterSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Command Center and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Command Center and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (commandCenterSkill < 100){													// 50% chance of improving your skill
		if (commandCenterSkill < 10) {
			commandCenterSkill = commandCenterSkill + 2;
		}
		
		if (commandCenterSkill >= 10 && commandCenterSkill < 50) {
			commandCenterSkill = commandCenterSkill + 1;
		}
		
		if (commandCenterSkill >= 50 && commandCenterSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				commandCenterSkill = commandCenterSkill + 1;
			}
		}
		
		if (commandCenterSkill >= 80 && commandCenterSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				commandCenterSkill = commandCenterSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubSmirk(smirkSkill) {														// smirk
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(smirkSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Smirk and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Smirk and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (smirkSkill < 100){													// 50% chance of improving your skill
		if (smirkSkill < 10) {
			smirkSkill = smirkSkill + 2;
		}
		
		if (smirkSkill >= 10 && smirkSkill < 50) {
			smirkSkill = smirkSkill + 1;
		}
		
		if (smirkSkill >= 50 && smirkSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				smirkSkill = smirkSkill + 1;
			}
		}
		
		if (smirkSkill >= 80 && smirkSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				smirkSkill = smirkSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////

function pubBoombox(boomboxSkill) {														// boombox
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(boomboxSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Boombox and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Boombox and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (boomboxSkill < 100){													// 50% chance of improving your skill
		if (boomboxSkill < 10) {
			boomboxSkill = boomboxSkill + 2;
		}
		
		if (boomboxSkill >= 10 && boomboxSkill < 50) {
			boomboxSkill = boomboxSkill + 1;
		}
		
		if (boomboxSkill >= 50 && boomboxSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				boomboxSkill = boomboxSkill + 1;
			}
		}
		
		if (boomboxSkill >= 80 && boomboxSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				boomboxSkill = boomboxSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////

function pubIron(ironSkill) {														// iron
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(ironSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on IRON and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on IRON and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (ironSkill < 100){													// 50% chance of improving your skill
		if (ironSkill < 10) {
			ironSkill = ironSkill + 2;
		}
		
		if (ironSkill >= 10 && ironSkill < 50) {
			ironSkill = ironSkill + 1;
		}
		
		if (ironSkill >= 50 && ironSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				ironSkill = ironSkill + 1;
			}
		}
		
		if (ironSkill >= 80 && ironSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				ironSkill = ironSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

////////////////////////////////////////////////////////////////////////////////

function pubGeoKoala(geoKoalaSkill) {														// geoKoala
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(geoKoalaSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on GeoKoala and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on GeoKoala and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (geoKoalaSkill < 100){													// 50% chance of improving your skill
		if (geoKoalaSkill < 10) {
			geoKoalaSkill = geoKoalaSkill + 2;
		}
		
		if (geoKoalaSkill >= 10 && geoKoalaSkill < 50) {
			geoKoalaSkill = geoKoalaSkill + 1;
		}
		
		if (geoKoalaSkill >= 50 && geoKoalaSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				geoKoalaSkill = geoKoalaSkill + 1;
			}
		}
		
		if (geoKoalaSkill >= 80 && geoKoalaSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				geoKoalaSkill = geoKoalaSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

//////////////////////////////////////////////////////////////

function pubConstriction(constrictionSkill) {														// constriction
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(constrictionSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Constriction and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Constriction and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (constrictionSkill < 100){													// 50% chance of improving your skill
		if (constrictionSkill < 10) {
			constrictionSkill = constrictionSkill + 2;
		}
		
		if (constrictionSkill >= 10 && constrictionSkill < 50) {
			constrictionSkill = constrictionSkill + 1;
		}
		
		if (constrictionSkill >= 50 && constrictionSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				constrictionSkill = constrictionSkill + 1;
			}
		}
		
		if (constrictionSkill >= 80 && constrictionSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				constrictionSkill = constrictionSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubHornswoggle(hornswoggleSkill) {														// hornswoggle
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(hornswoggleSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Hornswoggle and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Hornswoggle and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (hornswoggleSkill < 100){													// 50% chance of improving your skill
		if (hornswoggleSkill < 10) {
			hornswoggleSkill = hornswoggleSkill + 2;
		}
		
		if (hornswoggleSkill >= 10 && hornswoggleSkill < 50) {
			hornswoggleSkill = hornswoggleSkill + 1;
		}
		
		if (hornswoggleSkill >= 50 && hornswoggleSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				hornswoggleSkill = hornswoggleSkill + 1;
			}
		}
		
		if (hornswoggleSkill >= 80 && hornswoggleSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				hornswoggleSkill = hornswoggleSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubWomboCombo(womboComboSkill) {														// womboCombo
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(womboComboSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Wombo Combo and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Wombo Combo and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (womboComboSkill < 100){													// 50% chance of improving your skill
		if (womboComboSkill < 10) {
			womboComboSkill = womboComboSkill + 2;
		}
		
		if (womboComboSkill >= 10 && womboComboSkill < 50) {
			womboComboSkill = womboComboSkill + 1;
		}
		
		if (womboComboSkill >= 50 && womboComboSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				womboComboSkill = womboComboSkill + 1;
			}
		}
		
		if (womboComboSkill >= 80 && womboComboSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				womboComboSkill = womboComboSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubDraft(draftSkill) {														// draft
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(draftSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Draft and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Draft and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (draftSkill < 100){													// 50% chance of improving your skill
		if (draftSkill < 10) {
			draftSkill = draftSkill + 2;
		}
		
		if (draftSkill >= 10 && draftSkill < 50) {
			draftSkill = draftSkill + 1;
		}
		
		if (draftSkill >= 50 && draftSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				draftSkill = draftSkill + 1;
			}
		}
		
		if (draftSkill >= 80 && draftSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				draftSkill = draftSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubTransilio(transilioSkill) {														// transilio
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(transilioSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Transilio and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Transilio and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (transilioSkill < 100){													// 50% chance of improving your skill
		if (transilioSkill < 10) {
			transilioSkill = transilioSkill + 2;
		}
		
		if (transilioSkill >= 10 && transilioSkill < 50) {
			transilioSkill = transilioSkill + 1;
		}
		
		if (transilioSkill >= 50 && transilioSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				transilioSkill = transilioSkill + 1;
			}
		}
		
		if (transilioSkill >= 80 && transilioSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				transilioSkill = transilioSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubPilot(pilotSkill) {														// pilot
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(pilotSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Pilot and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Pilot and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (pilotSkill < 100){													// 50% chance of improving your skill
		if (pilotSkill < 10) {
			pilotSkill = pilotSkill + 2;
		}
		
		if (pilotSkill >= 10 && pilotSkill < 50) {
			pilotSkill = pilotSkill + 1;
		}
		
		if (pilotSkill >= 50 && pilotSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				pilotSkill = pilotSkill + 1;
			}
		}
		
		if (pilotSkill >= 80 && pilotSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				pilotSkill = pilotSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubbulldog(bulldogSkill) {														// bulldog
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(bulldogSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Bulldog and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Bulldog and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (bulldogSkill < 100){													// 50% chance of improving your skill
		if (bulldogSkill < 10) {
			bulldogSkill = bulldogSkill + 2;
		}
		
		if (bulldogSkill >= 10 && bulldogSkill < 50) {
			bulldogSkill = bulldogSkill + 1;
		}
		
		if (bulldogSkill >= 50 && bulldogSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				bulldogSkill = bulldogSkill + 1;
			}
		}
		
		if (bulldogSkill >= 80 && bulldogSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				bulldogSkill = bulldogSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubUltraDrive(ultraDriveSkill) {														// ultraDrive
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(ultraDriveSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Ultradrive and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Ultradrive and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (ultraDriveSkill < 100){													// 50% chance of improving your skill
		if (ultraDriveSkill < 10) {
			ultraDriveSkill = ultraDriveSkill + 2;
		}
		
		if (ultraDriveSkill >= 10 && ultraDriveSkill < 50) {
			ultraDriveSkill = ultraDriveSkill + 1;
		}
		
		if (ultraDriveSkill >= 50 && ultraDriveSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				ultraDriveSkill = ultraDriveSkill + 1;
			}
		}
		
		if (ultraDriveSkill >= 80 && ultraDriveSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				ultraDriveSkill = ultraDriveSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubEmerald(emeraldSkill) {														// emerald
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(emeraldSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on EMERALD and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on EMERALD and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (emeraldSkill < 100){													// 50% chance of improving your skill
		if (emeraldSkill < 10) {
			emeraldSkill = emeraldSkill + 2;
		}
		
		if (emeraldSkill >= 10 && emeraldSkill < 50) {
			emeraldSkill = emeraldSkill + 1;
		}
		
		if (emeraldSkill >= 50 && emeraldSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				emeraldSkill = emeraldSkill + 1;
			}
		}
		
		if (emeraldSkill >= 80 && emeraldSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				emeraldSkill = emeraldSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubPlatypus(platypusSkill) {														// platypus
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(platypusSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Platypus and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Platypus and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (platypusSkill < 100){													// 50% chance of improving your skill
		if (platypusSkill < 10) {
			platypusSkill = platypusSkill + 2;
		}
		
		if (platypusSkill >= 10 && platypusSkill < 50) {
			platypusSkill = platypusSkill + 1;
		}
		
		if (platypusSkill >= 50 && platypusSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				platypusSkill = platypusSkill + 1;
			}
		}
		
		if (platypusSkill >= 80 && platypusSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				platypusSkill = platypusSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubDz4(dz4Skill) {														// dz4
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(dz4Skill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Danger Zone 4 and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Danger Zone 4 and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (dz4Skill < 100){													// 50% chance of improving your skill
		if (dz4Skill < 10) {
			dz4Skill = dz4Skill + 2;
		}
		
		if (dz4Skill >= 10 && dz4Skill < 50) {
			dz4Skill = dz4Skill + 1;
		}
		
		if (dz4Skill >= 50 && dz4Skill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				dz4Skill = dz4Skill + 1;
			}
		}
		
		if (dz4Skill >= 80 && dz4Skill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				dz4Skill = dz4Skill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubRenegade(renegadeSkill) {														// renegade
	
	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(renegadeSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Renegade and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Renegade and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (renegadeSkill < 100){													// 50% chance of improving your skill
		if (renegadeSkill < 10) {
			renegadeSkill = renegadeSkill + 2;
		}
		
		if (renegadeSkill >= 10 && renegadeSkill < 50) {
			renegadeSkill = renegadeSkill + 1;
		}
		
		if (renegadeSkill >= 50 && renegadeSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				renegadeSkill = renegadeSkill + 1;
			}
		}
		
		if (renegadeSkill >= 80 && renegadeSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				renegadeSkill = renegadeSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}

///////////////////////////////////////////////////////////////////////////

function pubHub(hubSkill) {														// hub

	var pubSkill = Math.round(logic * .35) + Math.round(mech * .35) + Math.round(comms * .20) + Math.round(hubSkill * .20);
	var allySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var allySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var enemySkill4 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	var teamSkill = pubSkill + allySkill1 + allySkill2 + allySkill3;
	var enemyTeamSkill = enemySkill1 + enemySkill2 + enemySkill3 + enemySkill4;
	if(teamSkill > enemyTeamSkill) { 											// If you win
		wins = wins + 1;
		games = games + 1;
		degreeProgress = degreeProgress + 1;
		streak = streak + 1;
		document.getElementById('log2').innerHTML = 'You pubbed on Hub and won!';
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		document.getElementById('log2').innerHTML = 'You pubbed on Hub and lost.';
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (hubSkill < 100){													// 50% chance of improving your skill
		if (hubSkill < 10) {
			hubSkill = hubSkill + 2;
		}
		
		if (hubSkill >= 10 && hubSkill < 50) {
			hubSkill = hubSkill + 1;
		}
		
		if (hubSkill >= 50 && hubSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				hubSkill = hubSkill + 1;
			}
		}
		
		if (hubSkill >= 80 && hubSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				hubSkill = hubSkill + 1;
			}
		}
	}
	degreeCheck();
	winPercent2();
}
function selectPub() {
	mapChosen = Math.floor(Math.random() * (22 - 1 + 1)) + 1;	
	/* 1-5 */	if (mapChosen > 0 && mapChosen < 6) {
					if (mapChosen === 1) {
						pubRicochet(ricochetSkill);
					}
					if (mapChosen === 2) {
						pubVelocity(velocitySkill);
					}
					if (mapChosen === 3) {
						pubWormy(wormySkill);
					}
					if (mapChosen === 4) {
						pubCloud(cloudSkill);
					}
					if (mapChosen === 5) {
						pubCommandCenter(commandCenterSkill);
					}
				};
				
	/* 6-10 */	if (mapChosen > 5 && mapChosen < 11) {
					if (mapChosen === 6) {
						pubSmirk(smirkSkill);
					}
					if (mapChosen === 7) {
						pubBoombox(boomboxSkill);
					}
					if (mapChosen === 8) {
						pubIron(ironSkill);
					}
					if (mapChosen === 9) {
						pubGeoKoala(geoKoalaSkill);
					}
					if (mapChosen === 10) {
						pubConstriction(constrictionSkill);
					}
				};
				
	/* 11-15 */	if (mapChosen > 10 && mapChosen < 16) {
					if (mapChosen === 11) {
						pubWomboCombo(womboComboSkill);
					}
					if (mapChosen === 12) {
						pubHornswoggle(hornswoggleSkill);
					}
					if (mapChosen === 13) {
						pubDraft(draftSkill);
					}
					if (mapChosen === 14) {
						pubTransilio(transilioSkill);
					}
					if (mapChosen === 15) {
						pubPilot(pilotSkill);
					}
				};
				
	/* 16-22 */	if (mapChosen > 15 && mapChosen < 23) {
					if (mapChosen === 16) {
						pubbulldog(bulldogSkill);
					}
					if (mapChosen === 17) {
						pubUltraDrive(ultraDriveSkill);
					}
					if (mapChosen === 18) {
						pubEmerald(emeraldSkill);
					}
					if (mapChosen === 19) {
						pubPlatypus(platypusSkill);
					}
					if (mapChosen === 20) {
						pubDz4(dz4Skill);
					}
					if (mapChosen === 21) {
						pubRenegade(renegadeSkill);
					}
					if (mapChosen === 22) {
						pubHub(hubSkill);
					}
				};
	showStats();
	maxTC();
	degreeCheck();
}

/*



PRACTICING



*/

function practiceRicochet() {														// Ricochet
	if (ricochetSkill < 100){													
		if (ricochetSkill < 10) {
			ricochetSkill = ricochetSkill + 5;
		}
		
		if (ricochetSkill >= 10 && ricochetSkill < 50) {
			ricochetSkill = ricochetSkill + 4;
		}
		
		if (ricochetSkill >= 50 && ricochetSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				ricochetSkill = ricochetSkill + 3;
			}
		}
		
		if (ricochetSkill >= 80 && ricochetSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				ricochetSkill = ricochetSkill + 2;
			}
		}
	}
}

function practiceVelocity() {														// Velocity
	if (velocitySkill < 100){													
		if (velocitySkill < 10) {
			velocitySkill = velocitySkill + 5;
		}
		
		if (velocitySkill >= 10 && velocitySkill < 50) {
			velocitySkill = velocitySkill + 4;
		}
		
		if (velocitySkill >= 50 && velocitySkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				velocitySkill = velocitySkill + 3;
			}
		}
		
		if (velocitySkill >= 80 && velocitySkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				velocitySkill = velocitySkill + 2;
			}
		}
	}
}

function practiceWormy() {														// Wormy
	if (wormySkill < 100){													
		if (wormySkill < 10) {
			wormySkill = wormySkill + 5;
		}
		
		if (wormySkill >= 10 && wormySkill < 50) {
			wormySkill = wormySkill + 4;
		}
		
		if (wormySkill >= 50 && wormySkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				wormySkill = wormySkill + 3;
			}
		}
		
		if (wormySkill >= 80 && wormySkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				wormySkill = wormySkill + 2;
			}
		}
	}
}

function practiceCloud() {														// Cloud
	if (cloudSkill < 100){													
		if (cloudSkill < 10) {
			cloudSkill = cloudSkill + 5;
		}
		
		if (cloudSkill >= 10 && cloudSkill < 50) {
			cloudSkill = cloudSkill + 4;
		}
		
		if (cloudSkill >= 50 && cloudSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				cloudSkill = cloudSkill + 3;
			}
		}
		
		if (cloudSkill >= 80 && cloudSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				cloudSkill = cloudSkill + 2;
			}
		}
	}
}

function practiceCommandCenter() {														// CommandCenter
	if (commandCenterSkill < 100){													
		if (commandCenterSkill < 10) {
			commandCenterSkill = commandCenterSkill + 5;
		}
		
		if (commandCenterSkill >= 10 && commandCenterSkill < 50) {
			commandCenterSkill = commandCenterSkill + 4;
		}
		
		if (commandCenterSkill >= 50 && commandCenterSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				commandCenterSkill = commandCenterSkill + 3;
			}
		}
		
		if (commandCenterSkill >= 80 && commandCenterSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				commandCenterSkill = commandCenterSkill + 2;
			}
		}
	}
}

function practiceSmirk() {														// Smirk
	if (smirkSkill < 100){													
		if (smirkSkill < 10) {
			smirkSkill = smirkSkill + 5;
		}
		
		if (smirkSkill >= 10 && smirkSkill < 50) {
			smirkSkill = smirkSkill + 4;
		}
		
		if (smirkSkill >= 50 && smirkSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				smirkSkill = smirkSkill + 3;
			}
		}
		
		if (smirkSkill >= 80 && smirkSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				smirkSkill = smirkSkill + 2;
			}
		}
	}
}

function practiceBoombox() {														// Boombox
	if (boomboxSkill < 100){													
		if (boomboxSkill < 10) {
			boomboxSkill = boomboxSkill + 5;
		}
		
		if (boomboxSkill >= 10 && boomboxSkill < 50) {
			boomboxSkill = boomboxSkill + 4;
		}
		
		if (boomboxSkill >= 50 && boomboxSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				boomboxSkill = boomboxSkill + 3;
			}
		}
		
		if (boomboxSkill >= 80 && boomboxSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				boomboxSkill = boomboxSkill + 2;
			}
		}
	}
}

function practiceIron() {														// Iron
	if (ironSkill < 100){													
		if (ironSkill < 10) {
			ironSkill = ironSkill + 5;
		}
		
		if (ironSkill >= 10 && ironSkill < 50) {
			ironSkill = ironSkill + 4;
		}
		
		if (ironSkill >= 50 && ironSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				ironSkill = ironSkill + 3;
			}
		}
		
		if (ironSkill >= 80 && ironSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				ironSkill = ironSkill + 2;
			}
		}
	}
}

function practiceGeoKoala() {														// GeoKoala
	if (geoKoalaSkill < 100){													
		if (geoKoalaSkill < 10) {
			geoKoalaSkill = geoKoalaSkill + 5;
		}
		
		if (geoKoalaSkill >= 10 && geoKoalaSkill < 50) {
			geoKoalaSkill = geoKoalaSkill + 4;
		}
		
		if (geoKoalaSkill >= 50 && geoKoalaSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				geoKoalaSkill = geoKoalaSkill + 3;
			}
		}
		
		if (geoKoalaSkill >= 80 && geoKoalaSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				geoKoalaSkill = geoKoalaSkill + 2;
			}
		}
	}
}

function practiceConstriction() {														// Constriction
	if (constrictionSkill < 100){													
		if (constrictionSkill < 10) {
			constrictionSkill = constrictionSkill + 5;
		}
		
		if (constrictionSkill >= 10 && constrictionSkill < 50) {
			constrictionSkill = constrictionSkill + 4;
		}
		
		if (constrictionSkill >= 50 && constrictionSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				constrictionSkill = constrictionSkill + 3;
			}
		}
		
		if (constrictionSkill >= 80 && constrictionSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				constrictionSkill = constrictionSkill + 2;
			}
		}
	}
}

function practiceWomboCombo() {														// WomboCombo
	if (womboComboSkill < 100){													
		if (womboComboSkill < 10) {
			womboComboSkill = womboComboSkill + 5;
		}
		
		if (womboComboSkill >= 10 && womboComboSkill < 50) {
			womboComboSkill = womboComboSkill + 4;
		}
		
		if (womboComboSkill >= 50 && womboComboSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				womboComboSkill = womboComboSkill + 3;
			}
		}
		
		if (womboComboSkill >= 80 && womboComboSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				womboComboSkill = womboComboSkill + 2;
			}
		}
	}
}

function practiceHornswoggle() {														// Hornswoggle
	if (hornswoggleSkill < 100){													
		if (hornswoggleSkill < 10) {
			hornswoggleSkill = hornswoggleSkill + 5;
		}
		
		if (hornswoggleSkill >= 10 && hornswoggleSkill < 50) {
			hornswoggleSkill = hornswoggleSkill + 4;
		}
		
		if (hornswoggleSkill >= 50 && hornswoggleSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				hornswoggleSkill = hornswoggleSkill + 3;
			}
		}
		
		if (hornswoggleSkill >= 80 && hornswoggleSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				hornswoggleSkill = hornswoggleSkill + 2;
			}
		}
	}
}

function practiceDraft() {														// Draft
	if (draftSkill < 100){													
		if (draftSkill < 10) {
			draftSkill = draftSkill + 5;
		}
		
		if (draftSkill >= 10 && draftSkill < 50) {
			draftSkill = draftSkill + 4;
		}
		
		if (draftSkill >= 50 && draftSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				draftSkill = draftSkill + 3;
			}
		}
		
		if (draftSkill >= 80 && draftSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				draftSkill = draftSkill + 2;
			}
		}
	}
}

function practiceTransilio() {														// Transilio
	if (transilioSkill < 100){													
		if (transilioSkill < 10) {
			transilioSkill = transilioSkill + 5;
		}
		
		if (transilioSkill >= 10 && transilioSkill < 50) {
			transilioSkill = transilioSkill + 4;
		}
		
		if (transilioSkill >= 50 && transilioSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				transilioSkill = transilioSkill + 3;
			}
		}
		
		if (transilioSkill >= 80 && transilioSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				transilioSkill = transilioSkill + 2;
			}
		}
	}
}

function practicePilot() {														// Pilot
	if (pilotSkill < 100){													
		if (pilotSkill < 10) {
			pilotSkill = pilotSkill + 5;
		}
		
		if (pilotSkill >= 10 && pilotSkill < 50) {
			pilotSkill = pilotSkill + 4;
		}
		
		if (pilotSkill >= 50 && pilotSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				pilotSkill = pilotSkill + 3;
			}
		}
		
		if (pilotSkill >= 80 && pilotSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				pilotSkill = pilotSkill + 2;
			}
		}
	}
}

function practicebulldog() {														// bulldog
	if (bulldogSkill < 100){													
		if (bulldogSkill < 10) {
			bulldogSkill = bulldogSkill + 5;
		}
		
		if (bulldogSkill >= 10 && bulldogSkill < 50) {
			bulldogSkill = bulldogSkill + 4;
		}
		
		if (bulldogSkill >= 50 && bulldogSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				bulldogSkill = bulldogSkill + 3;
			}
		}
		
		if (bulldogSkill >= 80 && bulldogSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				bulldogSkill = bulldogSkill + 2;
			}
		}
	}
}

function practiceUltraDrive() {														// UltraDrive
	if (ultraDriveSkill < 100){													
		if (ultraDriveSkill < 10) {
			ultraDriveSkill = ultraDriveSkill + 5;
		}
		
		if (ultraDriveSkill >= 10 && ultraDriveSkill < 50) {
			ultraDriveSkill = ultraDriveSkill + 4;
		}
		
		if (ultraDriveSkill >= 50 && ultraDriveSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				ultraDriveSkill = ultraDriveSkill + 3;
			}
		}
		
		if (ultraDriveSkill >= 80 && ultraDriveSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				ultraDriveSkill = ultraDriveSkill + 2;
			}
		}
	}
}

function practiceEmerald() {														// Emerald
	if (emeraldSkill < 100){													
		if (emeraldSkill < 10) {
			emeraldSkill = emeraldSkill + 5;
		}
		
		if (emeraldSkill >= 10 && emeraldSkill < 50) {
			emeraldSkill = emeraldSkill + 4;
		}
		
		if (emeraldSkill >= 50 && emeraldSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				emeraldSkill = emeraldSkill + 3;
			}
		}
		
		if (emeraldSkill >= 80 && emeraldSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				emeraldSkill = emeraldSkill + 2;
			}
		}
	}
}

function practicePlatypus() {														// Platypus
	if (platypusSkill < 100){													
		if (platypusSkill < 10) {
			platypusSkill = platypusSkill + 5;
		}
		
		if (platypusSkill >= 10 && platypusSkill < 50) {
			platypusSkill = platypusSkill + 4;
		}
		
		if (platypusSkill >= 50 && platypusSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				platypusSkill = platypusSkill + 3;
			}
		}
		
		if (platypusSkill >= 80 && platypusSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				platypusSkill = platypusSkill + 2;
			}
		}
	}
}

function practiceDz4() {														// Dz4
	if (dz4Skill < 100){													
		if (dz4Skill < 10) {
			dz4Skill = dz4Skill + 5;
		}
		
		if (dz4Skill >= 10 && dz4Skill < 50) {
			dz4Skill = dz4Skill + 4;
		}
		
		if (dz4Skill >= 50 && dz4Skill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				dz4Skill = dz4Skill + 3;
			}
		}
		
		if (dz4Skill >= 80 && dz4Skill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				dz4Skill = dz4Skill + 2;
			}
		}
	}
}

function practiceRenegade() {														// Renegade
	if (renegadeSkill < 100){													
		if (renegadeSkill < 10) {
			renegadeSkill = renegadeSkill + 5;
		}
		
		if (renegadeSkill >= 10 && renegadeSkill < 50) {
			renegadeSkill = renegadeSkill + 4;
		}
		
		if (renegadeSkill >= 50 && renegadeSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				renegadeSkill = renegadeSkill + 3;
			}
		}
		
		if (renegadeSkill >= 80 && renegadeSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				renegadeSkill = renegadeSkill + 2;
			}
		}
	}
}

function practiceHub() {														// Hub
	if (hubSkill < 100){													
		if (hubSkill < 10) {
			hubSkill = hubSkill + 5;
		}
		
		if (hubSkill >= 10 && hubSkill < 50) {
			hubSkill = hubSkill + 4;
		}
		
		if (hubSkill >= 50 && hubSkill < 80) {
			skillChance = Math.round(Math.random());
			if (skillChance === 1) {
				hubSkill = hubSkill + 3;
			}
		}
		
		if (hubSkill >= 80 && hubSkill < 100) {
			skillChance = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			if (skillChance > 75) {
				hubSkill = hubSkill + 2;
			}
		}
	}
}

function selectPractice() {
	mapChosen = Math.floor(Math.random() * (22 - 1 + 1)) + 1;	
	/* 1-5 */	if (mapChosen > 0 && mapChosen < 6) {
					if (mapChosen === 1) {
						practiceRicochet();
					}
					if (mapChosen === 2) {
						practiceVelocity();
					}
					if (mapChosen === 3) {
						practiceWormy();
					}
					if (mapChosen === 4) {
						practiceCloud();
					}
					if (mapChosen === 5) {
						practiceCommandCenter();
					}
				};
				
	/* 6-10 */	if (mapChosen > 5 && mapChosen < 11) {
					if (mapChosen === 6) {
						practiceSmirk();
					}
					if (mapChosen === 7) {
						practiceBoombox();
					}
					if (mapChosen === 8) {
						practiceIron();
					}
					if (mapChosen === 9) {
						practiceGeoKoala();
					}
					if (mapChosen === 10) {
						practiceConstriction();
					}
				};
				
	/* 11-15 */	if (mapChosen > 10 && mapChosen < 16) {
					if (mapChosen === 11) {
						practiceWomboCombo();
					}
					if (mapChosen === 12) {
						practiceHornswoggle();
					}
					if (mapChosen === 13) {
						practiceDraft();
					}
					if (mapChosen === 14) {
						practiceTransilio();
					}
					if (mapChosen === 15) {
						practicePilot();
					}
				};
				
	/* 16-22 */	if (mapChosen > 15 && mapChosen < 23) {
					if (mapChosen === 16) {
						practicebulldog();
					}
					if (mapChosen === 17) {
						practiceUltraDrive();
					}
					if (mapChosen === 18) {
						practiceEmerald();
					}
					if (mapChosen === 19) {
						practicePlatypus();
					}
					if (mapChosen === 20) {
						practiceDz4();
					}
					if (mapChosen === 21) {
						practiceRenegade();
					}
					if (mapChosen === 22) {
						practiceHub();
					}
				};
				
		document.getElementById('log2').innerHTML = 'You practiced!';
}