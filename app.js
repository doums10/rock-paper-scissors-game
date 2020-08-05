let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


//fonction qui va définir la randomisation des choix de l'ordi
function getComputerChoice()
{
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);//crée un chiffre random décimal(sans les virgules par ex 2 au lieu de 2.5676)
	return choices[randomNumber];//retourne un chiffre random mais en changeant chaque chiffre par les lettres du jeu
}

function convertToWord(letter)
{
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

//fonction qui va définir ce qu'il se passe quand l'user gagne.
function win(userChoice, computerChoice)
{
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)}(🎮)  beats  ${convertToWord(computerChoice)}(💻)  . You win! 🔥`;
	userChoice = userChoice_div.classList.add('green-glow');//ajout de la bordure verte en cas de victoire sur le choix de l'user
	setTimeout(() => userChoice_div.classList.remove('green-glow') , 300);
}

//fonction qui va définir ce qu'il se passe quand l'user perd.
function lose(userChoice, computerChoice)
{
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const userChoice_div = document.getElementById(userChoice);//création de cette variable pour éviter le doublon plus bas
	result_p.innerHTML = `${convertToWord(userChoice)}(🎮)  loses to ${convertToWord(computerChoice)}(💻)  . You lost... 💩`;
	userChoice = userChoice_div.classList.add('red-glow');//ajout de la bordure verte en cas de victoire sur le choix de l'user
	setTimeout(() => userChoice_div.classList.remove('red-glow') , 300);
}

//fonction qui va définir ce qu'il se passe quand l'user et l'ordi sont à égalité.
function draw(userChoice, computerChoice)
{
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)}(🎮)  equals  ${convertToWord(computerChoice)}(💻)  . It's a draw! 👎`;
	userChoice = userChoice_div.classList.add('gray-glow');//ajout de la bordure verte en cas de victoire sur le choix de l'user
	setTimeout(() => userChoice_div.classList.remove('gray-glow') , 300);
}

function game(userChoice)
{
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice)
	{//instruction switch pour définir les cas gagnants et perdant de la partie
		case "rs":
		case "pr":
		case "sp":
			//console.log("USER WINS.");exemple de condition si l'user fait rock et l'ordi paper,l'user gagne
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			//console.log("USER LOSES.");exemple de condition si l'user fait paper et l'ordi scissors,l'user perd
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			//console.log("Its a draw.");
			draw(userChoice, computerChoice);
			break;
	}
}

function main()
{
	rock_div.addEventListener('click', () => game("r"));//fonction qui va écouter le click sur chaque bouton 
	paper_div.addEventListener('click', () => game("p"));
	scissors_div.addEventListener('click', () => game("s"));
}
main();

