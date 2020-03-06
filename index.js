var database = {

}
function generateGame() {
	var numOfPlayers = document.getElementById("game-id-input").value	
	var gameId = Math.floor(Math.random()*90000) + 10000;
	var gamePlayers = fillArray(numOfPlayers);
	database[gameId] = gamePlayers
	if (numOfPlayers === "") {
		document.getElementById("game-id-result").innerHTML = "بلا تخويت حطلك رقم فوق"
	}else{
		document.getElementById("game-id-result").innerHTML = "خد هالرقم و ابعتو لصحابك: " + gameId
	}
	// return gameId
}

function fillArray(numOfPlayers) {
	playersArray = [];
	numberOfMafia = Math.floor(numOfPlayers/3);
	numberOfCitizens = numOfPlayers - numberOfMafia;
	for (var i = 0; i < numOfPlayers; i++) {
		if(numberOfMafia){
			var isMafia = Math.round(Math.random());
			if(isMafia){
				playersArray.push("Mafia")
				numberOfMafia = numberOfMafia - 1;
			}else{
				playersArray.push("Citizen")
			}

		}else{
			playersArray.push("Citizen")
		}
	}
	return playersArray
}
// generateGame(9)


function getRole() {
	var gameId = document.getElementById("player-id-input").value	
	var role = database[gameId].splice(0,1);
	if (gameId === "") {
		document.getElementById("player-id-result").innerHTML = "لازم تحط رقم اللعبه فوق غير هيك بقدرش اساعدك"
	}else{
		document.getElementById("player-id-result").innerHTML = "دورك باللعبه هو: " + role
	}
	// return database[gameId].splice(0,1)
}
