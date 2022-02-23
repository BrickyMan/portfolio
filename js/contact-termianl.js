let	contactsLaunched = false,
	contactsTable = document.querySelector('#contactsTable'),
	contactTxt = '+----------+----------------------+\n| Service  |         Info         |\n+----------+----------------------+\n| Telegram | @BrickyMan           |\n| GitHub   | github.com/BrickyMan |\n| Phone    | +7(977)2623965       |\n| Email    | lekkot@yandex.ru     |\n+----------+----------------------+',
	tgLink = document.querySelector('#tgLink'),
	ghLink = document.querySelector('#ghLink'),
	phLink = document.querySelector('#phLink'),
	mlLink = document.querySelector('#mlLink'),
	tgLogoOutput = document.querySelector('#tgLogo'),
	ghLogoOutput = document.querySelector('#ghLogo'),
	phLogoOutput = document.querySelector('#phLogo'),
	mlLogoOutput = document.querySelector('#mlLogo');

// Логотипы
let	tgLogo = '  ______     __\n /_  __/__  / /__  ____  _______________ ___\n  / / / _ \\/ / _ \\/ __ `/ ___/ __ `/ __ `__ \\\n / / /  __/ /  __/ /_/ / /  / /_/ / / / / / /\n/_/  \\___/_/\\___/\\__, /_/   \\__,_/_/ /_/ /_/\n                /____/';

let ghLogo = '   _______ __  __  __      __\n  / ____(_) /_/ / / /_  __/ /_ \n / / __/ / __/ /_/ / / / / __ \\\n/ /_/ / / /_/ __  / /_/ / /_/ /\n\\____/_/\\__/_/ /_/\\__,_/_.___/';

let phLogo = '    ____  __\n   / __ \\/ /_  ____  ____  ___ \n  / /_/ / __ \\/ __ \\/ __ \\/ _ \\\n / ____/ / / / /_/ / / / /  __/\n/_/ __/_/_/_/\\____/_/ /_/\\___/ ';

let mlLogo = '    ______                  __\n   / ____/___ ___  ____ _(_) /\n  / __/ / __ `__ \\/ __ `/ / /\n / /___/ / / / / / /_/ / / /\n/_____/_/ /_/ /_/\\__,_/_/_/';

tgLogoOutput.innerHTML = tgLogo;
ghLogoOutput.innerHTML = ghLogo;
phLogoOutput.innerHTML = phLogo;
mlLogoOutput.innerHTML = mlLogo;

// Вывод контактов
function contactsLaunch() {
	contactsLaunched = true;
	terminalType(tgLink, '@BrickyMan', 30, nothingToDo);
	terminalType(ghLink, 'github.com/BrickyMan', 30, nothingToDo);
	terminalType(phLink, '+7(977)2623965', 30, nothingToDo);
	terminalType(mlLink, 'lekkot@yandex.ru', 30, nothingToDo);
}