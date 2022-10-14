let	worksLaunched = false,
	workIsTyping = false,
	workItems = document.querySelectorAll('.work-item'),
	workItemsIcons = document.querySelectorAll('.work-item_icon'),
	workDescription = document.querySelector('#workDescription'),
	linksTree = document.querySelector('#linksTree'),
	workLinkDemo = document.querySelector('#workLinkDemo'),
	workLinkGH = document.querySelector('#workLinkGH'),
	currentWorkNumber = 0;

let icons = [' __  __   ______\n/\\ \\/\\ \\ /\\  == \\\n\\ \\ \\_\\ \\\\ \\  _-/\n \\ \\_____\\\\ \\_\\\n  \\/_____/ \\/_/', '    __\n _/\\  \\___\n/\\___  ___\\\n\\/__ \\__\\_/\n    \\/__/', ' __________\n/\\      o  \\\n\\ \\<  |`.  >\\\n \\ \\__\\__\\___\\\n  \\/_________/'];
let iconsHover = ['\n__   __  ______\n\\ \\  \\ \\ \\  == \\\n \\ \\__\\ \\ \\  _-\n  \\______\\ \\_\\', '\n    __\n __\\  \\___\n \\___  ___\\\n     \\__\\', '\n__________\n\\      o  \\\n \\<  |`.  >\\\n  \\__\\__\\___\\'];
let worksDescriptionEN = ['Name:         Upto.\nDescription:  This is minimalistic landing page of an abstract company.\nSignificance: An expirience of develop following the mockup, recreation of missing graphic elements, adaptivity, selfwritten JS carousel.', 'Name:         Game of Life.\nDescription:  Customizable cellular automaton sandbox.\nSignificance: By default it simulates Game of Life by John Convey. I\'ve explored an approach of functional programming and work with Canvas in this project, and also this project requiered processes optimizing to engage simulation efficiency after scaling one.', 'Name:         BriSlider.\nDescription:  Simple and customizible JS slider.\nSignificance: This slider made for easy intergration with any projects. Main feature is instant switching to next picture, even if it\'s not neighbor like in another analogues.',];
let worksDescriptionRU = ['Название:   Upto.\nОписание:   Минималистчный лендинг абстрактной компании.\nЗначимость: Создание по макету с высокой точностью, воссоздание недостающих графических элементов, адаптивность, самописная карусель на JS.', 'Название:   Game of Life.\nОписание:   Настраиваемая песочница клеточных автоматов.\nЗначимость: По умолчанию происходит симуляция "Игры Жизнь" Джона Конвея. В проекте я изучил для себя подход функционального программирования, работу с Canvas, проект так же потребовал оптимизацию процессов для повышения производительности при масштабировании симуляции.', 'Название:   BriSlider.\nОписание:   Простой и настраиваемый JS слайдер.\nЗначимость: Этот слайдер создан для легкой интеграции с любыми проектами. Главная особенность — мгновенное переключение на следующую картинку, вне зависимости от того является ли она соседней, в отличие от аналогов.']
let worksLinks = [['https://brickyman.github.io/Upto/', 'https://github.com/BrickyMan/Upto'], ['https://brickyman.github.io/Cellular-automaton/', 'https://github.com/BrickyMan/Cellular-automaton'], ['https://brickyman.github.io/BriSlider/', 'https://github.com/BrickyMan/BriSlider']];

// Запуск раздела работ
function worksLaunch() {
	worksLaunched = true;
	clearWorksTab();
}

// Завершение печати в разделе работы
function cancelWorkTyping() {
	workIsTyping = false;
}

// Отрисовка древа ссылок
function drawLinksTree() {
	terminalType(linksTree, '|\n+-\n|\n+-', 40, showLinks);
}

// Показ кнопок-ссылок
function showLinks() {
	workLinkDemo.style.display = 'inline';
	workLinkDemo.setAttribute('href', worksLinks[currentWorkNumber][0]);
	workLinkGH.style.display = 'inline';
	workLinkGH.setAttribute('href', worksLinks[currentWorkNumber][1]);
	cancelWorkTyping();
}

// Очистить поля раздела работ
function clearWorksTab() {
	workDescription.innerHTML = '';
	linksTree.innerHTML = '';
	workLinkDemo.style.display = 'none';
	workLinkGH.style.display = 'none';
}

// Перебор всех кнопок
for (let i = 0; i < workItems.length; i++) {
	// Расстановка текста в иконки
	workItemsIcons[i].innerHTML = icons[i];

	// Обработка эффекта нажатия при наведении
	workItems[i].onmouseover = () => {
		workItemsIcons[i].innerHTML = iconsHover[i];
	}

	workItems[i].onmouseout = () => {
		workItemsIcons[i].innerHTML = icons[i];
	}

	// Обработка нажатий
	workItems[i].onclick = () => {
		if (!workIsTyping) {
			currentWorkNumber = i;
			workIsTyping = true;
			clearWorksTab();
			if (language == 'eng')
				terminalType(workDescription, worksDescriptionEN[i], 10, drawLinksTree);
			else
				terminalType(workDescription, worksDescriptionRU[i], 10, drawLinksTree);
		}
	}
}