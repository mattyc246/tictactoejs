// First set up the gameboard & game to be clear
// Set up accessing the individual board spaces on click
// Pick what board piece you want to play as
// Pick the difficulty level of the AI

// Function to determine who is the current players turn
// Have a game board of empty spaces to place each turn in
// Have an array of all the possible win scenarios

// Take in the current players choice of board space
// Check that the current space does not have a board piece
// If the board space is empty, place the current players piece in the space
// Then change the player to the other player
// Otherwise do nothing until the current player picks an empty space
// Once the player has picked and empty space and the piece has been placed
// Check whether the combination is a winning combiation or not


// const gameBoard = document.getElementById('game-board')

const boardSpaces = document.getElementsByClassName('board-square');

const choosePlayer = document.getElementsByClassName('choose-player');

const chooseDifficulty = document.getElementsByClassName('choose-ai');

const winPosibilities = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

let aiDifficulty = "-"

let playingBoard = ['-','-','-','-','-','-','-','-','-']

let playerXBoard = ['-','-','-','-','-','-','-','-','-']

let playerOBoard = ['-','-','-','-','-','-','-','-','-']

let currentPlayer = "-"



// Function to set the current player to X or O

function setPlayer(playerChoice) {

	if (playerChoice == "X"){
		return currentPlayer = playerChoice
	} else if (playerChoice == "O") {
		return currentPlayer = playerChoice
	};

};

// Function to change the current player in game

function changePlayer(){

	if (currentPlayer == "X"){
		return currentPlayer = "O"
	} else if (currentPlayer = "O"){
		return currentPlayer = "X"
	};

};

// Function to set the difficulty of the game

function setDifficulty(difficulty) {

	if (difficulty == "easy"){
		return aiDifficulty = "easy"
	} else if (difficulty == "hard"){
		return aiDifficulty = "hard"
	};

};

// Function to listen to the input of the squares and apply styles to it based on the click or mouseover

function listenToSquares(squares){

	for (i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', function(){
			this.classList.add('scale-down');
		});
		squares[i].addEventListener('mouseover', function(){
			this.classList.add('bg-faint');
		});
		squares[i].addEventListener('mouseout', function(){
			this.classList.remove('bg-faint');
		})
	};

};

// Function to listen to the players choice of X or O

function chooseYourPlayer(buttons){

	for (i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function(){
			let choice = this.value.toString();
			setPlayer(choice);
		})
	}

};

// Function to listen to the players choice of easy or hard

function chooseYourDifficulty(buttons){
	for (i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function(){
			let choice = this.value.toString();
			setDifficulty(choice);
		})
	}
};

// Function to listen to players choice to place in

function pickAPlace(squares){

	for (i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', function(){
			let choice = this.id
			let available = checkSpace(choice - 1)
			if (available == true){
				setOnBoard(choice, boardSpaces);
				checkForWin();
				changePlayer();
			} else {
				console.log('Move Not Possible!');
			};
		})

	}

};

// Function to check if the current space has already been taken or empty

function checkSpace(currentChoice){

	if (playingBoard[currentChoice] == "-"){
		return true
	} else {
		return false
	};

}

// Function to set the visual board piece to the current user piece

function setOnBoard(choice, squares){

	squares[choice - 1].innerHTML = currentPlayer
	playingBoard[choice - 1] = currentPlayer
	if (currentPlayer == "X"){
		playerXBoard[choice - 1] = parseInt(choice)
	} else if (currentPlayer == "O") {
		playerOBoard[choice - 1] = parseInt(choice)
	}

};

// Function to check for a win

function checkForWin(){
	if (currentPlayer == "X"){
		let checkArray = playerXBoard.filter(space => space != "-");
		winPosibilities.forEach(function(win){
			if (win.every(elem => checkArray.indexOf(elem) > -1)){
				alert("Player X Won!")
			};
		})
	} else if (currentPlayer == "O"){
		let checkArray = playerOBoard.filter(space => space != "-");
		winPosibilities.forEach(function(win){
			if (win.every(elem => checkArray.indexOf(elem) > -1)){
				alert("Player O Won!s")
			}
		})
	};
};

listenToSquares(boardSpaces);

chooseYourPlayer(choosePlayer);

chooseYourDifficulty(chooseDifficulty);

pickAPlace(boardSpaces);


