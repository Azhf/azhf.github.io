	// Declaring variables:


// Wins and losses
var wins = 0;
var losses = 0;
var games = 0;
var ties = 0;
var degrees = 0;
var degreeProgress = 0;
var winsNeeded = 1;
var winPercent = 0;

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

// Savegame

function save() {
	var save = {
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
	hubSkill: hubSkill
	};
	localStorage.setItem("save",JSON.stringify(save));
	document.getElementById('log2').innerHTML = 'The game has been saved.';
}

function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
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
	document.getElementById('log2').innerHTML = 'The game has been loaded.';
	showStats();
}

window.setInterval(function(){ // autosave
	
	save();
	document.getElementById('log2').innerHTML = 'The game has been saved.';
	
}, 60000);

function deleteSave() {
	var userResponse = prompt("Are you sure?")
	if(userResponse === 'yes') {
		localStorage.removeItem("save");
		document.getElementById('log2').innerHTML = 'The save game has been deleted.';
	};	
}

// ----------------------------------------------- //

	// Functions
	
// Upgrades

function purchaseNavigateSpikes() {
	mech = mech + 10;
	// DONT FORGET TO TAKE CURRENCY USED TO BUY UPGRADES :)
}

function purchaseDefense() {
	mech = mech + 10;
}

function purchaseType() {
	comms = comms + 10;
}

function purchaseButton() {
	logic = logic + 10;
}

function purchaseGrab() {
	mech = mech + 10;
	logic = logic + 5;
}

function purchaseContain() {
	mech = mech + 10;
}

function purchaseRegrab() {
	logic = logic + 10;
}

function purchaseTeamTiles() {
	logic = logic + 10;
}

function purchasePups() {
	logic = logic + 10;
}

function purchaseDiagonalMovement() {
	mech = mech + 10;
	logic = logic + 5;
}

function purchaseUseBombs() {
	logic = logic + 10;
}

function purchase() {
	= + 10;
}

function purchase() {
	= + 10;
}

function purchase() {
	= + 10;
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

function showStats() {
	document.getElementById('wins').innerHTML = wins;
	document.getElementById('losses').innerHTML = losses;
	document.getElementById('ties').innerHTML = ties;
	document.getElementById('games').innerHTML = games;
	document.getElementById('streak').innerHTML = streak;
	document.getElementById('winpercent').innerHTML = winPercent;
}

/* function rolling300() {
	???
} */
	
//Pubbing (This is messy)

function pubRicochet(ricochetSkill) {														// Ricochet
	
	var pubSkill = ricochetSkill;
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

////////////////////////////////////////////////////////////////////

function pubVelocity(velocitySkill) {														// velocity
	
	var pubSkill = velocitySkill;
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
	
	var pubSkill = wormySkill;
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
	
	var pubSkill = cloudSkill;
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
	
	var pubSkill = commandCenterSkill;
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
	
	var pubSkill = smirkSkill;
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
	
	var pubSkill = boomboxSkill;
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
	
	var pubSkill = ironSkill;
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
	
	var pubSkill = geoKoalaSkill;
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
	
	var pubSkill = constrictionSkill;
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
	
	var pubSkill = hornswoggleSkill;
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
	
	var pubSkill = womboComboSkill;
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
	
	var pubSkill = draftSkill;
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
	
	var pubSkill = transilioSkill;
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
	
	var pubSkill = pilotSkill;
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
	
	var pubSkill = bulldogSkill;
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
	
	var pubSkill = ultraDriveSkill;
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
	
	var pubSkill = emeraldSkill;
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
	
	var pubSkill = platypusSkill;
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
	
	var pubSkill = dz4Skill;
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
	
	var pubSkill = renegadeSkill;
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
	var pubSkill = hubSkill;
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
}