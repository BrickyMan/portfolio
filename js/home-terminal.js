let	logoOutput = document.querySelector('#logo'),
	lsbrkmnOutput = document.querySelector('#homeLsbrkmn'),
	homeInput = document.querySelector('#homeInput'),
	homeAnswer = document.querySelector('#homeAnswer'),
	homeLaunched = false;

// texts
let	lsbrkmnTxtEng = '---------------------------\nname:     Kotenko Alexey\nlocation: Russia, Moscow region, Shchyolkovo\nage:      23\nvocation: frontend-developer\nspeech:   ru, ua, eng\ndream:    to develop self-driving cars\n\nDo you like my portfolio? [y/n]';
let	lsbrkmnTxtRus = '---------------------------\nимя:         Котенко Алексей\nрегион:      Московская область, Щёлково\nвозраст:     23\nнаправление: фронтенд-разработка\nязыки:       рус, укр, англ\nмечта:       разрабатывать беспилотные автомобили\n\nВам нравится моё портфолио? [д/н]';
let	logoFull = " ____                       __       __                                            \n/\\  _`\\          __        /\\ \\     /\\ \\               /'\\_/`\\                     \n\\ \\ \\L\\ \\  _ __ /\\_\\    ___\\ \\ \\/'\\ \\ \\/      ____    /\\      \\     __      ___    \n \\ \\  _ <'/\\`'__\\/\\ \\  /'___\\ \\ , <  \\/      /',__\\   \\ \\ \\__\\ \\  /'__`\\  /' _ `\\  \n  \\ \\ \\L\\ \\ \\ \\/ \\ \\ \\/\\ \\__/\\ \\ \\\\`\\       /\\__, `\\   \\ \\ \\_/\\ \\/\\ \\L\\.\\_/\\ \\/\\ \\ \n   \\ \\____/\\ \\_\\  \\ \\_\\ \\____\\\\ \\_\\ \\_\\     \\/\\____/    \\ \\_\\\\ \\_\\ \\__/.\\_\\ \\_\\ \\_\\ \n    \\/___/  \\/_/   \\/_/\\/____/ \\/_/\\/_/      \\/___/      \\/_/ \\/_/\\/__/\\/_/\\/_/\\/_/";
let logoShorted = "  ____                       __       __             \n /\\  _`\\          __        /\\ \\     /\\ \\            \n \\ \\ \\L\\ \\  _ __ /\\_\\    ___\\ \\ \\/'\\ \\ \\/      ____  \n  \\ \\  _ <'/\\`'__\\/\\ \\  /'___\\ \\ , <  \\/      /',__\\ \n   \\ \\ \\L\\ \\ \\ \\/ \\ \\ \\/\\ \\__/\\ \\ \\\\`\\       /\\__, `\\\n    \\ \\____/\\ \\_\\  \\ \\_\\ \\____\\\\ \\_\\ \\_\\     \\/\\____/\n     \\/___/  \\/_/   \\/_/\\/____/ \\/_/\\/_/      \\/___/ \n                                                     \n  /'\\_/`\\                                            \n /\\      \\     __      ___                           \n \\ \\ \\__\\ \\  /'__`\\  /' _ `\\                         \n  \\ \\ \\_/\\ \\/\\ \\L\\.\\_/\\ \\/\\ \\                        \n   \\ \\_\\\\ \\_\\ \\__/.\\_\\ \\_\\ \\_\\                       \n    \\/_/ \\/_/\\/__/\\/_/\\/_/\\/_/                       ";

function homeInputFocus() {
	homeInput.removeAttribute('readonly');
	homeInput.focus();
}

homeInput.addEventListener('keydown', (event) => {
	if (event.code == 'Enter' && !homeInput.hasAttribute('readonly')) {
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
				terminalType(homeAnswer, 'I\'ll try better next time! :(', 10, nothingToDo);
			}
			else {
				terminalType(homeAnswer, 'Буду стараться лучше! :(', 10, nothingToDo);
			}
			return;
		}
		else {
			homeInput.value = '';
		}
		
	}
})

function homeLaunch() {
	homeLaunched = true;
	lsbrkmnOutput.innerHTML = '';
	homeAnswer.innerHTML = '';
	homeInput.setAttribute('readonly', '');
	homeInput.value = '';
	logoOutput.innerHTML = logoFull;
	if (language == 'eng') {
		terminalType(lsbrkmnOutput, lsbrkmnTxtEng, 10, homeInputFocus);
	}
	else {
		terminalType(lsbrkmnOutput, lsbrkmnTxtRus, 10, homeInputFocus);
	}
}

homeLaunch();