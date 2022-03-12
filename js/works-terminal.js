let	worksLaunched = false,
	uptoBtn = document.querySelector('#listBtnUpto'),
	caBtn = document.querySelector('#listBtnCa'),
	chatBtn = document.querySelector('#listBtnChat'),
	fdfBtn = document.querySelector('#listBtnFdf'),
	stopAnimation = false,
	activeWork = '0',
	worksPreText = document.querySelector('#worksPreText'),
	workIsTyping = false,
	workDescription = document.querySelector('#workDescription'),
	uptoImg = document.querySelector('#uptoImg'),
	caImg = document.querySelector('#caImg'),
	chatImg = document.querySelector('#chatImg'),
	fdfImg = document.querySelector('#fdfImg'),
	workBtns = document.querySelector('#workBtns'),
	workDemo = document.querySelector('#workDemo'),
	workLink = document.querySelector('#workLink');

let	uptoTextEng = 'Name:  Upto.\nTools: HTML, CSS (Sass), JavaScript.\nAbout: This is minimalistic landing page of a young, dynamically developing company. For real.',
	uptoTextRus = 'Название:    Upto.\nИнструменты: HTML, CSS (Sass), JavaScript.\nОписание:    Это минималистчный лендинг молодой и динамично развивающейся компании. Действительно молодой и динамично развивающейся.';

let	upto1 = '  __  __     ______   ______\n /\\ \\/\\ \\   /\\  == \\ /\\__  _\\ ______\n \\ \\ \\_\\ \\  \\ \\  _-/ \\/_/\\ \\/ \\  __ \\\n  \\ \\_____\\  \\ \\_\\      \\ \\_\\  \\ \\_\\ \\\n   \\/_____/   \\/_/       \\/_/   \\_____\\',
	upto3 = '             ______   ______   ______\n __  __     /\\  == \\ /\\__  _\\ /\\  __ \\\n \\ \\ \\ \\    \\ \\  _-/ \\/_/\\ \\/ \\ \\ \\/\\ \\\n  \\ \\_\\ \\    \\ \\_\\      \\ \\_\\  \\ \\_____\\\n   \\_____\\    \\/_/       \\/_/   \\/_____/',
	upto2 = '  __  __     ______            ______\n /\\ \\/\\ \\   /\\  == \\ ______   /\\  __ \\\n \\ \\ \\_\\ \\  \\ \\  _-/ \\__  _\\  \\ \\ \\/\\ \\\n  \\ \\_____\\  \\ \\_\\      \\ \\    \\ \\_____\\\n   \\/_____/   \\/_/       \\_\\    \\/_____/';
	
let	caTextEng = 'Name:  Cellular automaton.\nTools: HTML, CSS, Canvas, JavaScript.\nAbout: Cellular automaton sandbox that allows to experiment with different parameters and combinations. By default it simulates Game of Life by John Convey.',
	caTextRus = 'Название:    Клеточный автомат.\nИнструменты: HTML, CSS, Canvas, JavaScript.\nОписание:    Песочница клеточных автоматов, позволяющая эксперементировать с различными параметрами и комбинациями. По умолчанию происходит симуляция автомата "Игра Жизнь" Джона Конвея.';

let ca1 = '\n            []\n      []    []\n         [] []\n',
	ca2 = '\n      []\n         [] []\n      [] []\n',
	ca3 = '\n         []\n            []\n      [] [] []\n';

let	fdfTextEng = 'Name:  FDF.\nTools: Canvas, JavaScript.\nAbout: This is a JS adaptation of the School 21 project, the essence of which is to create an isometric visualization of the landscape using a height map. In this version, the heightmap is dynamically modified by generating pseudo-random values, thus simulating the behavior of a liquid surface. Also in the upper right corner there is a button to start the wave simulation.',
	fdfTextRus = 'Название:    FDF.\nИнструменты: Canvas, JavaScript.\nОписание:    Это JS-адаптация проекта Школы 21 суть которого в создании изометрической визуализации ландшафта по карте высот. В данной версии карта высот динамически изменяется путём псевдослучайной генерации значений, таким образом имитируя поведение поверхности жидкости. Также в верхнем правом углу есть кнопка для запуска симуляции волны.';

let	fdf1 = '    _/\\/\\/\\/\\/\\/\\__/\\/\\/\\/\\/\\____/\\/\\/\\/\\/\\/\\_\n   _/\\/\\__________/\\/\\____/\\/\\__/\\/\\_________ \n  _/\\/\\/\\/\\/\\____/\\/\\____/\\/\\__/\\/\\/\\/\\/\\___  \n _/\\/\\__________/\\/\\____/\\/\\__/\\/\\_________   \n_/\\/\\__________/\\/\\/\\/\\/\\____/\\/\\_________    ',
	fdf2 = '    _/\\/\\/\\/\\/\\/\\__/\\/\\/\\/\\/\\____/\\/\\/\\/\\/\\/\\_\n   _/\\/\\____________/\\____/\\/\\__/\\/\\_________ \n  _/\\/\\/\\/\\/\\____/\\/\\____/\\/\\__/\\/\\/\\/\\/\\___  \n _/\\/\\__________/\\/\\____/\\/\\__/\\/\\_________   \n___/\\__________/\\/\\/\\/\\/\\____/\\/\\______/\\_    ',
	fdf3 = '    _/\\/\\/\\/\\/\\/\\__/\\/\\/\\/\\/\\__/\\__/\\/\\/\\/\\/\\_\n   ___/\\__________/\\/\\____/\\/\\__/\\/\\_________ \n  _/\\/\\/\\/\\/\\____/\\/\\____/\\/\\__/\\/\\/\\/\\/\\___  \n _/\\/\\__________/\\/\\____/\\/\\__/\\/\\_________   \n_/\\/\\__________/\\/\\/\\/\\/\\____/\\/\\_________    ';

let state = 0;
timer = setInterval(() => {
	if (state == 0) {
		state = 1;
		uptoImg.innerHTML = upto1;
		caImg.innerHTML = ca1;
		// chatImg.innerHTML = chat1;
		fdfImg.innerHTML = fdf1;
	}
	else if (state == 1) {
		state = 2;
		uptoImg.innerHTML = upto2;
		caImg.innerHTML = ca2;
		// chatImg.innerHTML = chat2;
		fdfImg.innerHTML = fdf2;
	}
	else {
		state = 0;
		uptoImg.innerHTML = upto3;
		caImg.innerHTML = ca3;
		// chatImg.innerHTML = chat3;
		fdfImg.innerHTML = fdf3;
	}
}, 500);

function hideWorkAnimations() {
	uptoImg.classList.remove('works-img_active');
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

uptoBtn.onclick = () => {
	if (activeWork != 'upto' && !workIsTyping) {
		workBtns.setAttribute('hidden', '');
		workIsTyping = true;
		uptoBtn.classList.add('active-work-btn');
		hideWorkAnimations();
		clearWorkInfo();
		uptoImg.classList.add('works-img_active');
		workDemo.setAttribute('href', 'https://brickyman.github.io/Upto/');
		workLink.setAttribute('href', 'https://github.com/BrickyMan/Upto');
		if (language == 'eng') {
			terminalType(workDescription, uptoTextEng, 10, cancelWorkTyping);
		}
		else {
			terminalType(workDescription, uptoTextRus, 10, cancelWorkTyping);
		}
	}
}

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