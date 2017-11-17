window.onload = function(){
	let menuButton = document.createElement("div");
	let header = document.querySelector("#header");
	let menu = document.querySelector("#yjsgheadergrid");

	menuButton.classList.add("menubutton");
	menuButton.innerHTML = "МЕНЮ";
	header.insertBefore(menuButton, menu);

	menuButton.addEventListener("click", function(){
		console.log("click!");
		menu.classList.toggle("visib");
	});

	/*Конец меню*/
	if(document.body.clientWidth < 650) {
	/*Прокрутка на главной*/
	let newsBlock = document.querySelector("#yjsg3");
	let nBupButton = document.createElement("div");
	let nBdownButton = document.createElement("div");
	nBupButton.classList.add("up-news-button");
	nBdownButton.classList.add("down-news-button");
	nBupButton.innerHTML = "<";
	nBdownButton.innerHTML = ">";

	showMenu(0, "firstMenu");
	showMenu(1, "secondMenu");

	// nBupButton.insertBefore(newsBlock, newsBlock.firstChild);
	if(newsBlock) {
		newsBlock.insertBefore(nBdownButton, newsBlock.firstElementChild);
		newsBlock.insertBefore(nBupButton, newsBlock.firstElementChild);
	}

	let bottomSlider = document.querySelector("#yy_slider.yy_slider");
	let bScurPos = 0;

	function currPos() {
		bScurPos = bottomSlider.offsetTop;
		return bScurPos;
	}

	function moveSlide(direction) {
		if(currPos() > -580 && currPos() > -580 && direction == "top") {
			bottomSlider.style.top = currPos() - 190 + "px";
		}
		else if(currPos() < 0 && direction == "bottom") {
			bottomSlider.style.top = currPos() + 190 + "px";
		}
	}

	nBupButton.addEventListener("click", function(){moveSlide("bottom"); });
	nBdownButton.addEventListener("click", function(){moveSlide("top");});

	let fNewsBlock = document.querySelector("#YJ_NewsFlash5");

	if(fNewsBlock) {
	fNewsBlock.addEventListener("mousewheel", function(e){
		e.preventDefault();
		e.stopPropagation();
	}, true);
	}

	
	let menuA = document.querySelectorAll(".menunav .yjanchor ");


	menuA[0].addEventListener("click", function(e) {
		e.preventDefault();
		let menu_one = document.querySelector(".firstMenu");
		menu_one.classList.toggle("active");
	}, true);

	menuA[1].addEventListener("click", function(e) {
		e.preventDefault();
		let menu_one = document.querySelector(".secondMenu");
		menu_one.classList.toggle("active");
	}, true);

	function showMenu(num, className) {
		let menuMainWrapper = document.querySelector("#topmenu_holder");
		let menu = document.querySelectorAll(".top_menu.YJSG_listContainer")[num];
		let curMenu = menu.children[0].children[0].children[0];
		let menuWrapper = document.createElement("div");
		menuWrapper.classList.add("cmenu");
		menuWrapper.classList.add(className);
		menuWrapper.appendChild(curMenu);
		menuMainWrapper.appendChild(menuWrapper);

		let close = document.createElement("div");
		close.classList.add("closebutton");
		close.innerHTML = "x";
		menuWrapper.appendChild(close);
	}

	function hideMenu() {
		let actMenu = document.querySelector(".cmenu.active");
		actMenu.classList.remove("active");
	}

	let clButton = document.querySelectorAll(".closebutton");
	clButton.forEach(function(el){
		el.onclick = hideMenu;
	});

	function findParent(parent, tag) {
		curParent = parent.parentNode;
		if(curParent.tagName == tag) {
			return curParent;
		}
		else {
			findParent(curParent, tag);
		}
	}

}
}