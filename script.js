// array containing all the possible symbols
var symbols = [
	'<i class="fas fa-atom"></i>',
	'<i class="fas fa-brain"></i>',
	'<i class="fas fa-code"></i>',
	'<i class="fas fa-cookie"></i>',
	'<i class="fas fa-poo"></i>'
];

var cardNbs = [
	'I',
	'II',
	'III',
	'IV',
	'V',
	'VI',
	'VII',
	'VIII',
	'IX',
	'X',
	'Jack',
	'Knight',
	'Queen',
	'King',
	'Joker'
];

var card = document.querySelector('.card');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function drawCard() {
	var i = getRndInteger(0,symbols.length-1);
	var j = getRndInteger(0,cardNbs.length-1);
	card.innerHTML = '<div class="cardNb">'+cardNbs[j]+'</div>';
	if ((j>0)&&(j<10)) {
		for (var n = 0; n <= j; n++) {
		card.innerHTML += symbols[i];
		}
	}
	else {
		card.innerHTML += symbols[i];
	}
}

card.addEventListener('click', drawCard);