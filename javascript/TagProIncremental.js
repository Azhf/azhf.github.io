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

// ----------------------------------------------- //

	// Functions
	
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
	winPerCent = Math.ceil(winPercUnrounded);
	console.log(winPerCent + " %");
}
	
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
		console.log('you pubbed on Ricochet and won!')
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Ricochet and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (ricochetSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			ricochetSkill = ricochetSkill + 1;
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
		console.log('you pubbed on Velocity and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Velocity and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (velocitySkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			velocitySkill = velocitySkill + 1;
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
		console.log('you pubbed on Wormy and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Wormy and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (wormySkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			wormySkill = wormySkill + 1;
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
		console.log('you pubbed on Cloud and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Cloud and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (cloudSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			cloudSkill = cloudSkill + 1;
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
		console.log('you pubbed on Command Center and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Command Center and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (commandCenterSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			commandCenterSkill = commandCenterSkill + 1;
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
		console.log('you pubbed on Smirk and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Smirk and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (smirkSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			smirkSkill = smirkSkill + 1;
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
		console.log('you pubbed on Boombox and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Boombox and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (boomboxSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			boomboxSkill = boomboxSkill + 1;
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
		console.log('you pubbed on IRON and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on IRON and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (ironSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			ironSkill = ironSkill + 1;
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
		console.log('you pubbed on GeoKoala and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on GeoKoala and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (geoKoalaSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			geoKoalaSkill = geoKoalaSkill + 1;
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
		console.log('you pubbed on Constriction and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Constriction and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (constrictionSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			constrictionSkill = constrictionSkill + 1;
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
		console.log('you pubbed on Hornswoggle and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Hornswoggle and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (hornswoggleSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			hornswoggleSkill = hornswoggleSkill + 1;
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
		console.log('you pubbed on Wombo Combo and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Wombo Combo and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (womboComboSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			womboComboSkill = womboComboSkill + 1;
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
		console.log('you pubbed on Draft and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Draft and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (draftSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			draftSkill = draftSkill + 1;
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
		console.log('you pubbed on Transilio and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Transilio and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (transilioSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			transilioSkill = transilioSkill + 1;
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
		console.log('you pubbed on Pilot and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Pilot and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (pilotSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			pilotSkill = pilotSkill + 1;
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
		console.log('you pubbed on Bulldog and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Bulldog and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (bulldogSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			bulldogSkill = bulldogSkill + 1;
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
		console.log('you pubbed on Ultradrive and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Ultradrive and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (ultraDriveSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			ultraDriveSkill = ultraDriveSkill + 1;
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
		console.log('you pubbed on EMERALD and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on EMERALD and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (emeraldSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			emeraldSkill = emeraldSkill + 1;
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
		console.log('you pubbed on Platypus and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Platypus and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (platypusSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			platypusSkill = platypusSkill + 1;
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
		console.log('you pubbed on Danger Zone 4 and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Danger Zone 4 and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (dz4Skill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			dz4Skill = dz4Skill + 1;
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
		console.log('you pubbed on Renegade and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Renegade and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (renegadeSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			renegadeSkill = renegadeSkill + 1;
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
		console.log('you pubbed on Hub and won!');
	} else if (teamSkill < enemyTeamSkill) {									// If you lose
		losses = losses + 1;
		games = games + 1;
		streak = 0;
		console.log('you pubbed on Hub and lost.');
	} else if (teamSkill === enemyTeamSkill) {									// If you tie
		streak = 0;
		losses = losses + 1;
		games = games +1;
	}
	if (hubSkill < 100){													// 50% chance of improving your skill
		skillChance = Math.round(Math.random());
		if (skillChance === 1) {
			hubSkill = hubSkill + 1;
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
}

selectPub();
console.log('Wins: ' + wins);
console.log('Losses: ' + losses);
console.log('Games: ' + games);
console.log('Streak: ' + streak);
console.log('Win Percent: ' + winPercent);
console.log('---BREAK---');

selectPub();
console.log('Wins: ' + wins);
console.log('Losses: ' + losses);
console.log('Games: ' + games);
console.log('Streak: ' + streak);
console.log('Win Percent: ' + winPercent);
console.log('---BREAK---');

selectPub();
console.log('Wins: ' + wins);
console.log('Losses: ' + losses);
console.log('Games: ' + games);
console.log('Streak: ' + streak);
console.log('Win Percent: ' + winPercent);
console.log('---BREAK---');

selectPub();
console.log('Wins: ' + wins);
console.log('Losses: ' + losses);
console.log('Games: ' + games);
console.log('Streak: ' + streak);
console.log('Win Percent: ' + winPercent);
console.log('---BREAK---');

selectPub();
console.log('Wins: ' + wins);
console.log('Losses: ' + losses);
console.log('Games: ' + games);
console.log('Streak: ' + streak);
console.log('Win Percent: ' + winPercent);
console.log('---BREAK---');