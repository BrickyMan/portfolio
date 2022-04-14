let	terminal = document.querySelector('#terminal'),
	tabs = document.querySelectorAll('.terminal-tab'),
	fields = document.querySelectorAll('.terminal-field'),
	main = document.querySelector('main'),
	homeField = document.querySelector('#homeField'),
	bioField = document.querySelector('#bioField'),
	worksField = document.querySelector('#worksField'),
	contactsField = document.querySelector('#contactsField'),
	exitBtn = document.querySelector('#exitBtn'),
	exitPopup = document.querySelector('#exitPopup'),
	exitYes = document.querySelector('#exitYes'),
	exitNo = document.querySelector('#exitNo'),
	failExitPopup = document.querySelector('#failExitPopup'),
	failExitBtn = document.querySelector('#failExitBtn'),
	lagnSw = document.querySelector('#langSwitcher'),
	engBtn = document.querySelector('#engBtn'),
	rusBtn = document.querySelector('#rusBtn'),
	isTyping = false,
	language = 'eng';

// Функция-пустышка
function nothingToDo() {}

// Постепенный ввод текста с последующим вызовом функции action() в конце
function terminalType(target, text, delay, action) {
	let i = 0;
	isTyping = true;
	let	timer = setInterval(() => {
		lagnSw.classList.add('lang-switch_disabled');
		isTyping = true;
		target.innerHTML += text[i];
		if (i == text.length - 1) {
			clearInterval(timer);
			timer = 0;
			isTyping = false;
			lagnSw.classList.remove('lang-switch_disabled');
			action();
			return;
		}
		i++;
	}, delay);
}

// Управление вкладками
for(let i = 0; i < tabs.length; i++) {
	tabs[i].onclick = () => {
		document.querySelector('.current-tab').classList.remove('current-tab');
		document.querySelector('.current-field').classList.remove('current-field');
		tabs[i].classList.add('current-tab');
		fields[i].classList.add('current-field');
		if (i == 0) {
			if (!homeLaunched) {
				homeLaunch();
			}
			homeInput.focus();
			main.setAttribute('style', 'background-image: url("img/10.gif")');
		}
		else if (i == 1) {
			if (!bioLaunched) {
				bioLaunch();
			}
			main.setAttribute('style', 'background-image: url("img/9.gif")');
		}
		else if (i == 2) {
			if (!worksLaunched) {
				worksLaunch();
			}
			main.setAttribute('style', 'background-image: url("img/15.gif")');
		}
		else if (i == 3) {
			if (!contactsLaunched) {
				contactsLaunch();
			}
			main.setAttribute('style', 'background-image: url("img/5.gif")');
		}
	}
}

// Кнопка выключения окна
exitBtn.onclick = () => {
	exitPopup.setAttribute('style', 'display: block;');
}

exitYes.onclick = () => {
	window.close();
	exitPopup.setAttribute('style', 'display: none;');
	failExitPopup.setAttribute('style', 'display: block;');
}

exitNo.onclick = () => {
	exitPopup.setAttribute('style', 'display: none;');
}

terminal.onclick = () => {
	if (homeField.classList.contains('current-field') && !homeInput.hasAttribute('readonly')) {
		homeInput.focus();
	}
}

failExitBtn.onclick = () => {
	failExitPopup.setAttribute('style', 'display: none;');
}

// Перезапуск
function reLaunch() {
	homeLaunched = false;
	bioLaunched = false;
	worksLaunched = false;
	if (homeField.classList.contains('current-field')) {
		homeLaunch();
	}
	if (bioField.classList.contains('current-field')) {
		bioLaunch();
	}
	if (worksField.classList.contains('current-field')) {
		worksLaunch();
	}
}

// Переключатель языка
engBtn.onclick = () => {
	if (!engBtn.classList.contains('current-language') && !isTyping) {
		engBtn.classList.add('current-language');
		rusBtn.classList.remove('current-language');
		language = 'eng';
		reLaunch();
	}
}

rusBtn.onclick = () => {
	if (!rusBtn.classList.contains('current-language') && !isTyping) {
		rusBtn.classList.add('current-language');
		engBtn.classList.remove('current-language');
		language = 'rus';
		reLaunch();
	}
}