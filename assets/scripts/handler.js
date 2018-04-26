window.onscroll = function() {
	var elements = [
		document.querySelector('.site-header'),
		document.querySelector('.me h1'),
		document.querySelector('.me h2'),
		document.querySelector('.profile'),
		document.querySelector('.site-nav .logo'),
	];
	if (window.pageYOffset > 260) {
		for (var i = 0; i < elements.length; i++) {
			elements[i].classList.add('past');
		}
	} else {
		for (var j = 0; j < elements.length; j++) {
			elements[j].classList.remove('past');
		}
	}
};

if (document.readyState == 'complete') {
	getElements();
} else {
	document.onreadystatechange = function() {
		if (document.readyState === 'complete') {
			getElements();
		}
	};
}
window.onload = function() {
	getElements();
};
window.siteElements = null;

function getElements() {
	window.siteElements = {
		siteNav: document.querySelector('.site-nav'),
		menu: document.querySelector('.hamburger'),
		expanded: false,
	};
}

function toggleMenu() {
	if (window.siteElements === null) {
		getElements();
		toggleMenu();
	} else {
		if (window.siteElements.expanded) {
			window.siteElements.menu.classList.remove('is-active');
			window.siteElements.siteNav.classList.remove('expanded');
			window.siteElements.siteNav.classList.add('collapsed');
		} else {
			window.siteElements.menu.classList.add('is-active');
			window.siteElements.siteNav.classList.add('expanded');
			window.siteElements.siteNav.classList.remove('collapsed');
		}
		window.siteElements.expanded = !window.siteElements.expanded;
	}
}

function hideMenu() {
	window.siteElements.menu.classList.remove('is-active');
	window.siteElements.siteNav.classList.remove('expanded');
	window.siteElements.siteNav.classList.add('collapsed');
	window.siteElements.expanded = !window.siteElements.expanded;
}
