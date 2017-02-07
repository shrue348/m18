//Кнопка вверх
//var scrollTop = document.getElementsByClassName('scrollTop')[0];
//Высота первого экрана
var heightOutput = document.getElementsByClassName('first_screen')[0];
//Скролл по якорям
//var anchors = document.querySelectorAll('[href^="#"]');

var m18 = {
	anchors: document.querySelectorAll('[href^="#"]'),
	scrollTop: document.getElementsByClassName('scrollTop')[0],
	resize: function(){
		heightOutput.style.height = window.innerHeight+'px';
	},
	init: function(){
		m18.scrollTop.onclick = function(e) { //вешаем клик на скролл вверх
			e.stopImmediatePropagation();
			e.preventDefault();
			window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		};

		window.onscroll = function() { //вешаем пряталку кнопки вверх
			if (pageYOffset > 0) {
				m18.scrollTop.style.display = 'block'
			} else {
				m18.scrollTop.style.display = 'none'
			}
		};

		window.onresize = m18.resize; //вешаем обработчик на resize

		for(var i = 0; i < this.anchors.length; i++) { //вешаем обработчик на анкоры
			var elem = this.anchors[i];

			elem.onclick = function(e) {
				var targetId = this.getAttribute('href').split('#')[1],
					targetElem = document.getElementById(targetId);
					targetPos = document.getElementById(targetId).offsetTop;

				e.stopImmediatePropagation();
				e.preventDefault();
				targetElem.scrollIntoView({ behavior: 'smooth' });
			};
		};

		m18.scrollTop.style.display = 'none'; // прячем кнопку вверх
		m18.resize(); // ресайзим экран при загрузке


	}
}

m18.init()