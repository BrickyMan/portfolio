let	worksLaunched = false,
	landingBtn = document.querySelector('#listBtnLanding'),
	caBtn = document.querySelector('#listBtnCa'),
	chatBtn = document.querySelector('#listBtnChat'),
	fdfBtn = document.querySelector('#listBtnFdf'),
	stopAnimation = false,
	activeWork = '0',
	worksPreText = document.querySelector('#worksPreText'),
	workIsTyping = false,
	workDescription = document.querySelector('#workDescription'),
	landingImg = document.querySelector('#landingImg'),
	caImg = document.querySelector('#caImg'),
	chatImg = document.querySelector('#chatImg'),
	fdfImg = document.querySelector('#fdfImg'),
	workBtns = document.querySelector('#workBtns'),
	workDemo = document.querySelector('#workDemo'),
	workLink = document.querySelector('#workLink');
	
let	caTextEng = 'Name: 	Cellular automaton\nTools:  HTML, CSS, JS.\nAbout:  Cellular automaton sandbox that allows to experiment with different parameters and combinations. By default it simulates Game of Life by John Convey.',
	caTextRus = 'Название:    Клеточный автомат\nИнструменты: HTML, CSS, JS.\nОписание:    Песочница клеточных автоматов, позволяющая эксперементировать с различными параметрами и комбинациями. По умолчанию происходит симуляция автомата "Игра Жизнь" Джона Конвея.';

let ca1 = '\n            []\n      []    []\n         [] []\n',
	ca2 = '\n      []\n         [] []\n      [] []\n',
	ca3 = '\n         []\n            []\n      [] [] []\n';

let	fdfTextEng = 'Name:  FDF\nTools: C, Makefile, .h-files.\nAbout: A 21-School project. Isometric visualisation of landscape parsed from any file with height map. Demo version is an JS-adaptation of this project with additional functionality.',
	fdfTextRus = 'Название:    FDF\nИнструменты: C, Makefile, .h-files.\nОписание:    Проект Школы 21. Визуализация изометрической проекции ландшафта получаемого из любого файла с картой высот путём парсинга. Демонстрационная версия является JS-адаптацией данного проекта с дополнительным функционалом.';

let	fdf1 = '    _/\\/\\/\\/\\/\\/\\__/\\/\\/\\/\\/\\____/\\/\\/\\/\\/\\/\\_\n   _/\\/\\__________/\\/\\____/\\/\\__/\\/\\_________ \n  _/\\/\\/\\/\\/\\____/\\/\\____/\\/\\__/\\/\\/\\/\\/\\___  \n _/\\/\\__________/\\/\\____/\\/\\__/\\/\\_________   \n_/\\/\\__________/\\/\\/\\/\\/\\____/\\/\\_________    ',
	fdf2 = '    _/\\/\\/\\/\\/\\/\\__/\\/\\/\\/\\/\\____/\\/\\/\\/\\/\\/\\_\n   _/\\/\\____________/\\____/\\/\\__/\\/\\_________ \n  _/\\/\\/\\/\\/\\____/\\/\\____/\\/\\__/\\/\\/\\/\\/\\___  \n _/\\/\\__________/\\/\\____/\\/\\__/\\/\\_________   \n___/\\__________/\\/\\/\\/\\/\\____/\\/\\______/\\_    ',
	fdf3 = '    _/\\/\\/\\/\\/\\/\\__/\\/\\/\\/\\/\\__/\\__/\\/\\/\\/\\/\\_\n   ___/\\__________/\\/\\____/\\/\\__/\\/\\_________ \n  _/\\/\\/\\/\\/\\____/\\/\\____/\\/\\__/\\/\\/\\/\\/\\___  \n _/\\/\\__________/\\/\\____/\\/\\__/\\/\\_________   \n_/\\/\\__________/\\/\\/\\/\\/\\____/\\/\\_________    ';

let state = 0;
timer = setInterval(() => {
	if (state == 0) {
		state = 1;
		// landingImg.innerHTML = landing1;
		caImg.innerHTML = ca1;
		// chatImg.innerHTML = chat1;
		fdfImg.innerHTML = fdf1;
	}
	else if (state == 1) {
		state = 2;
		// landingImg.innerHTML = landing2;
		caImg.innerHTML = ca2;
		// chatImg.innerHTML = chat2;
		fdfImg.innerHTML = fdf2;
	}
	else {
		state = 0;
		// landingImg.innerHTML = landing3;
		caImg.innerHTML = ca3;
		// chatImg.innerHTML = chat3;
		fdfImg.innerHTML = fdf3;
	}
}, 500);

function hideWorkAnimations() {
	landingImg.classList.remove('works-img_active');
	caImg.classList.remove('works-img_active');
	chatImg.classList.remove('works-img_active');
	fdfImg.classList.remove('works-img_active');
}

function worksLaunch() {
	activeWork = '0';
	workBtns.setAttribute('hidden', '');
	hideWorkAnimations();
	worksLaunched = true;
	clearWorkInfo();
	if (language == 'eng') {
		worksPreText.innerHTML = 'Choose a project:';
	}
	else {
		worksPreText.innerHTML = 'Выберите проект:';
	}
}

function clearWorkInfo() {
	stopAnimation = true;
	workDescription.innerHTML = '';
}

function cancelWorkTyping() {
	workIsTyping = false;
	workBtns.removeAttribute('hidden');
}

// landingBtn.onclick = () => {
// 	if (activeWork != 'landing' && !workIsTyping) {
// 		workBtns.setAttribute('hidden', '');
// 		workIsTyping = true;
// 		landingBtn.classList.add('active-work-btn');
// 		hideWorkAnimations();
// 		clearWorkInfo();
// 		landingImg.classList.add('works-img_active');
// 		workDemo.setAttribute('href', 'https://brickyman.github.io/Cellular-automaton/');
// 		workLink.setAttribute('href', 'https://github.com/BrickyMan/Cellular-automaton');
// 		if (language == 'eng') {
// 			terminalType(workDescription, fdfTextEng, 10, cancelWorkTyping);
// 		}
// 		else {
// 			terminalType(workDescription, fdfTextRus, 10, cancelWorkTyping);
// 		}
// 	}
// }

caBtn.onclick = () => {
	if (activeWork != 'ca' && !workIsTyping) {
		workBtns.setAttribute('hidden', '');
		workIsTyping = true;
		activeWork = 'ca';
		caBtn.classList.add('active-work-btn');
		hideWorkAnimations();
		clearWorkInfo();
		caImg.classList.add('works-img_active');
		workDemo.setAttribute('href', 'https://brickyman.github.io/Cellular-automaton/');
		workLink.setAttribute('href', 'https://github.com/BrickyMan/Cellular-automaton');
		if (language == 'eng') {
			terminalType(workDescription, caTextEng, 10, cancelWorkTyping);
		}
		else {
			terminalType(workDescription, caTextRus, 10, cancelWorkTyping);
		}
	}
}

// chatBtn.onclick = () => {
// 	if (activeWork != 'chat' && !workIsTyping) {
// 		workBtns.setAttribute('hidden', '');
// 		workIsTyping = true;
// 		chatBtn.classList.add('active-work-btn');
// 		hideWorkAnimations();
// 		clearWorkInfo();
// 		chatImg.classList.add('works-img_active');
// 		workDemo.setAttribute('href', 'https://brickyman.github.io/Cellular-automaton/');
// 		workLink.setAttribute('href', 'https://github.com/BrickyMan/Cellular-automaton');
// 		if (language == 'eng') {
// 			terminalType(workDescription, fdfTextEng, 10, cancelWorkTyping);
// 		}
// 		else {
// 			terminalType(workDescription, fdfTextRus, 10, cancelWorkTyping);
// 		}
// 		terminalType(workDescription, fdfText, 10, cancelWorkTyping);
// 	}
// }

fdfBtn.onclick = () => {
	if (activeWork != 'fdf' && !workIsTyping) {
		workBtns.setAttribute('hidden', '');
		workIsTyping = true;
		activeWork = 'fdf';
		fdfBtn.classList.add('active-work-btn');
		hideWorkAnimations();
		clearWorkInfo();
		fdfImg.classList.add('works-img_active');
		workDemo.setAttribute('href', 'https://brickyman.github.io/fdf_js/');
		workLink.setAttribute('href', 'https://github.com/BrickyMan/fdf_js');
		if (language == 'eng') {
			terminalType(workDescription, fdfTextEng, 10, cancelWorkTyping);
		}
		else {
			terminalType(workDescription, fdfTextRus, 10, cancelWorkTyping);
		}
	}
}