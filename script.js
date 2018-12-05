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
	
	if ((j>=0)&&(j<10)) {
		card.innerHTML = '<div class="cardNbTopLeft">'+cardNbs[j]+'<br>'+symbols[i]+'</div>'+'<div class="cardNbBottomRight">'+cardNbs[j]+'<br>'+symbols[i]+'</div>';
		for (var n = 0; n <= j; n++) {
		card.innerHTML += '<p class="symbol">'+symbols[i]+'</p>';
		}
	}
	else if (j == cardNbs.length-1) {
		card.innerHTML = '<div class="cardNbTopLeft"><i class="fas fa-star-of-life"></i></div>'+'<div class="cardNbBottomRight"><i class="fas fa-star-of-life"></i></div>';
		card.innerHTML += '<i class="fas fa-user-secret"></i>';
	}
	else {
		card.innerHTML = '<div class="cardNb">'+cardNbs[j]+'</div>';
		card.innerHTML += '<p class="symbol">'+symbols[i]+'</p>';
	}
}

function onEnterOrSpace(event) {
	if(event.keyCode == 32 || event.keyCode == 13) {
        drawCard();
 	}
}

card.addEventListener('click', drawCard);
document.addEventListener('keyup', onEnterOrSpace);