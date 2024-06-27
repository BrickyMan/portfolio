let	logoOutput = document.querySelector('#logo'),
	lsbrkmnOutput = document.querySelector('#homeLsbrkmn'),
	homeInput = document.querySelector('#homeInput'),
	homeBtns = document.querySelector('#homeBtns'),
	homeBtnY = document.querySelector('#homeBtnY'),
	homeBtnN = document.querySelector('#homeBtnN'),
	homeAnswer = document.querySelector('#homeAnswer'),
	homeLaunched = false;

// texts
let	lsbrkmnTxtEng = '---------------------------\nname:     Kotenko Alexey\nlocation: Kazakhstan, Almaty\nage:      25\nspeciality: frontend-developer\nspeech:   ru, en, es\ndream:    to develop self-driving cars\n\nDo you like my portfolio? [y/n]';
let	lsbrkmnTxtRus = '---------------------------\nимя:         Котенко Алексей\nрегион:      Казахстан, Алматы\nвозраст:     25\nнаправление: фронтенд-разработка\nязыки:       рус, анг, исп\nмечта:       разрабатывать беспилотные автомобили\n\nВам нравится моё портфолио? [д/н]';
let	logoFull = " ____                       __       __                                            \n/\\  _`\\          __        /\\ \\     /\\ \\               /'\\_/`\\                     \n\\ \\ \\L\\ \\  _ __ /\\_\\    ___\\ \\ \\/'\\ \\ \\/      ____    /\\      \\     __      ___    \n \\ \\  _ <'/\\`'__\\/\\ \\  /'___\\ \\ , <  \\/      /',__\\   \\ \\ \\__\\ \\  /'__`\\  /' _ `\\  \n  \\ \\ \\L\\ \\ \\ \\/ \\ \\ \\/\\ \\__/\\ \\ \\\\`\\       /\\__, `\\   \\ \\ \\_/\\ \\/\\ \\L\\.\\_/\\ \\/\\ \\ \n   \\ \\____/\\ \\_\\  \\ \\_\\ \\____\\\\ \\_\\ \\_\\     \\/\\____/    \\ \\_\\\\ \\_\\ \\__/.\\_\\ \\_\\ \\_\\ \n    \\/___/  \\/_/   \\/_/\\/____/ \\/_/\\/_/      \\/___/      \\/_/ \\/_/\\/__/\\/_/\\/_/\\/_/";
let logoShorted = "  ____                       __       __             \n /\\  _`\\          __        /\\ \\     /\\ \\            \n \\ \\ \\L\\ \\  _ __ /\\_\\    ___\\ \\ \\/'\\ \\ \\/      ____  \n  \\ \\  _ <'/\\`'__\\/\\ \\  /'___\\ \\ , <  \\/      /',__\\ \n   \\ \\ \\L\\ \\ \\ \\/ \\ \\ \\/\\ \\__/\\ \\ \\\\`\\       /\\__, `\\\n    \\ \\____/\\ \\_\\  \\ \\_\\ \\____\\\\ \\_\\ \\_\\     \\/\\____/\n     \\/___/  \\/_/   \\/_/\\/____/ \\/_/\\/_/      \\/___/ \n                                                     \n  /'\\_/`\\                                            \n /\\      \\     __      ___                           \n \\ \\ \\__\\ \\  /'__`\\  /' _ `\\                         \n  \\ \\ \\_/\\ \\/\\ \\L\\.\\_/\\ \\/\\ \\                        \n   \\ \\_\\\\ \\_\\ \\__/.\\_\\ \\_\\ \\_\\                       \n    \\/_/ \\/_/\\/__/\\/_/\\/_/\\/_/                       ";
let isFullLogo = NaN;

if (window.innerWidth > 560) {
	logoOutput.innerHTML = logoFull;
	isFullLogo = true;
}
else {
	logoOutput.innerHTML = logoShorted;
	isFullLogo = false;
}

window.onresize = () => {
	if (window.innerWidth > 560 && !isFullLogo) {
		logoOutput.innerHTML = logoFull;
		isFullLogo = true;
	}
	else if (window.innerWidth <= 560 && isFullLogo) {
		logoOutput.innerHTML = logoShorted;
		isFullLogo = false;
	}
}

// Проверка на то, показывать кнопки или поле ввода
if (isMobile) {
	homeInput.style.display = 'none';
}

function homeInputFocus() {
	if (!isMobile) {
		homeInput.removeAttribute('readonly');
		homeInput.focus();
	}
	else {
		homeBtns.style.display = 'block';
		if (language == 'eng') {
			homeBtnY.innerHTML = 'y';
			homeBtnN.innerHTML = 'n';
		}
		else {
			homeBtnY.innerHTML = 'д';
			homeBtnN.innerHTML = 'н';
		}
	}
}

homeInput.addEventListener('keydown', (event) => {
	if (event.code == 'Enter' && !homeInput.hasAttribute('readonly') && !isMobile) {
		if ((homeInput.value == 'y' && language == 'eng') || (homeInput.value == 'д' && language == 'rus')) {
			homeInput.setAttribute('readonly', '');
			if (language == 'eng') {
				terminalType(homeAnswer, 'Thank you! I like you too! ;)', 10, nothingToDo);
			}
			else {
				terminalType(homeAnswer, 'Спасибо! Ты тоже мне нравишься! ;)', 10, nothingToDo);
			}
			return;
		}
		else if ((homeInput.value == 'n' && language == 'eng') || (homeInput.value == 'н' && language == 'rus'))
		{
			homeInput.setAttribute('readonly', '');
			if (language == 'eng') {
				terminalType(homeAnswer, 'Unknown command "n". Try "y" next time!', 10, nothingToDo);
			}
			else {
				terminalType(homeAnswer, 'Неизвестная команда "н". Попробуйте ответить "д" в следующий раз!', 10, nothingToDo);
			}
			return;
		}
		else if (homeInput.value == '420') {
			terminal.setAttribute('style', 'background-image: url("img/elon.gif")');
			homeInput.value = '';
		}
		else {
			homeInput.value = '';
		}
		
	}
})

homeBtnY.onclick = () => {
	if (!isTyping) {
		homeAnswer.innerHTML = '';
		if (language == 'eng') {
			terminalType(homeAnswer, 'Thank you! I like you too! ;)', 10, nothingToDo);
		}
		else {
			terminalType(homeAnswer, 'Спасибо! Ты тоже мне нравишься! ;)', 10, nothingToDo);
		}
	}
}

homeBtnN.onclick = () => {
	if (!isTyping) {
		homeAnswer.innerHTML = '';
		if (language == 'eng') {
			terminalType(homeAnswer, 'Unknown command "n". Try "y" next time!', 10, nothingToDo);
		}
		else {
			terminalType(homeAnswer, 'Неизвестная команда "н". Попробуйте ответить "д" в следующий раз!', 10, nothingToDo);
		}
	}
}

function homeLaunch() {
	homeLaunched = true;
	lsbrkmnOutput.innerHTML = '';
	homeAnswer.innerHTML = '';
	homeInput.setAttribute('readonly', '');
	homeInput.value = '';
	homeBtns.style.display = 'none';
	if (language == 'eng') {
		terminalType(lsbrkmnOutput, lsbrkmnTxtEng, 10, homeInputFocus);
	}
	else {
		terminalType(lsbrkmnOutput, lsbrkmnTxtRus, 10, homeInputFocus);
	}
}

homeLaunch();