let	worksLaunched = false,
	workItems = document.querySelectorAll('.work-item'),
	workItemsIcons = document.querySelectorAll('.work-item_icon');

let icons = [' __  __   ______\n/\\ \\/\\ \\ /\\  == \\\n\\ \\ \\_\\ \\\\ \\  _-/\n \\ \\_____\\\\ \\_\\\n  \\/_____/ \\/_/', '    __\n _/\\  \\___\n/\\___  ___\\\n\\/__ \\__\\_/\n    \\/__/'];
let iconsHover = ['\n__   __  ______\n\\ \\  \\ \\ \\  == \\\n \\ \\__\\ \\ \\  _-\n  \\______\\ \\_\\', '\n    __\n __\\  \\___\n \\___  ___\\\n     \\__\\'];

for (let i = 0; i < workItems.length; i++) {
	workItemsIcons[i].innerHTML = icons[i];

	workItems[i].onmouseover = () => {
		workItemsIcons[i].innerHTML = iconsHover[i];
	}

	workItems[i].onmouseout = () => {
		workItemsIcons[i].innerHTML = icons[i];
	}
}

function worksLaunch() {
	worksLaunched = true;
}