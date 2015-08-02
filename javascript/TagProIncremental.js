	// Declaring variables:

	
$(document).ready(function(){
	$("#pugSelect").hide();
}); // I fixed it. One parentheses. Yet github didn't sync it right or something. So, I added this comment so I can do another commit and sync it again in the hopes that Github fixes it. Github. Pls.

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
var maxTagCoins = 0;

function maxTC() {
	var max = wins * .5;
	maxTagCoins = max;
}

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

function showStats() {
	document.getElementById('wins').innerHTML = wins;
	document.getElementById('losses').innerHTML = losses;
	document.getElementById('ties').innerHTML = ties;
	document.getElementById('games').innerHTML = games;
	document.getElementById('streak').innerHTML = streak;
	document.getElementById('winpercent').innerHTML = winPercent;
	document.getElementById('tagcoins').innerHTML = tagCoins;
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
	tagCoins: tagCoins,
	upgrades: upgrades,
	maxTagCoins: maxTagCoins
	};
	localStorage.setItem("TPsaveGame",JSON.stringify(saveGame));
	document.getElementById('log2').innerHTML = 'The game has been saved.';
}

window.setInterval(function(){ // autosave
	
	save();
	document.getElementById('log2').innerHTML = 'The game has been saved.';
	
}, 60000);

function deleteSave() {
	var userResponse = prompt("Are you sure?")  										// Making sure
	if(userResponse === 'yes') {
		//localStorage.remove("TPsaveGame");
		localStorage.clear();
		/* var wins = 0;																	// Resetting variables
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
		*/
		showStats();
		document.getElementById('log2').innerHTML = 'The save game has been deleted, please refresh to finish the process!';
	}; 
}

// ----------------------------------------------- //

	// Functions

	
// Upgrades (In order of when you get them)
s
function purchaseNavigateSpikes() {
	if (tagCoins >= 5) {
		mech = mech + 10;
		tagCoins = tagCoins - 5;
		document.getElementById('log2').innerHTML = 'You learned to navigate spikes!';
		$('#NavigateSpikes').remove();
		upgrades.hasNavigateSpikes = true;
		$('#upgrades:empty').parent().remove();
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
		upgrades.hasMumble = true;
		$('#upgrades:empty').parent().remove();
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
	};
}

// PURCHASES

function purchaseCheapMic() {
	if (tagCoins >= 25) {
		comms = comms + 10;
		tagCoins = tagCoins - 25;
		document.getElementById('log2').innerHTML = 'You purchased a cheap mic!';
		$('#CheapMic').remove();
		upgrades.hasCheapMic = true;
		$('#upgrades:empty').parent().remove();
	};
}

function purchaseBetterMic() {  //Github pls actually update the code when you sync like wtf I shouldn't have to make a dummy comment
	if (tagCoins >= 30) {
		comms = comms + 10;
		tagCoins = tagCoins - 30;
		document.getElementById('log2').innerHTML = 'You purchased a better mic!';
		$('#BetterMic').remove();
		upgrades.hasBetterMic = true;
		$('#upgrades:empty').parent().remove();
	};
}

function purchaseClearMic() {
	if (tagCoins >= 35) {
		comms = comms + 10;
		tagCoins = tagCoins - 35;
		document.getElementById('log2').innerHTML = 'You purchased a clear mic!';
		$('#ClearMic').remove();
		upgrades.hasClearMic = true;
		$('#upgrades:empty').parent().remove();
		$('#uphead').remove();
	};
}

// Required	

function degreesCalc() {
	if (degreeProgress === winsNeeded) {
		degreeProgress = 0;
		degrees = degrees + 1;
		// winsNeeded = // PUT THE TAGPRO DEGREE WINS NEEDED CALCULATION ALGORITHM THINGY HERE
	}
}

function winPercent2() {
	var winPercUnrounded = (wins / games) * 100;
	winPercent = Math.ceil(winPercUnrounded);
	console.log(winPercent + " % - Win Percentage!");
}

function collectTagCoins() {
	if (tagCoins === maxTagCoins) {
		document.getElementById('log2').innerHTML = 'You must win more to collect another tagcoin.';
	} else {
		tagCoins = tagCoins + 1;
		document.getElementById('log2').innerHTML = 'You collected a TagCoin, used to purchase upgrades.';
		showStats();
	};
	maxTC();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
	degreesCalc();
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
}