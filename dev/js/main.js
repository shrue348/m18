
//Скролл по якорям
var anchors = document.querySelectorAll('[href^="#"]');
for(var i = 0; i < anchors.length; i++) {
	var elem = anchors[i];   

	elem.onclick = function(e) {
		var targetId = this.getAttribute('href').split('#')[1],
			targetElem = document.getElementById(targetId);
			targetPos = document.getElementById(targetId).offsetTop;

		e.stopImmediatePropagation();
		e.preventDefault();
		targetElem.scrollIntoView({ behavior: 'smooth' });
	};
};



//Кнопка вверх
var scrollTop = document.getElementsByClassName('scrollTop')[0];
scrollTop.onclick = function(e) {
	e.stopImmediatePropagation();
	e.preventDefault();
	window.scroll({ top: 0, left: 0, behavior: 'smooth' });
};
window.onscroll = function() {
	if (pageYOffset > 0) {
		scrollTop.style.display = 'block'
	} else {
		scrollTop.style.display = 'none'
	}
};



 var heightOutput = document.getElementsByClassName('first_screen')[0];
 function resize() { 
	heightOutput.style.height = window.innerHeight+'px';

	console.log(window.innerHeight+'px')

	//heightOutput.style.display = 'none';
 
 }

 window.onresize = resize;




(function(){
	scrollTop.style.display = 'none'; // прячем кнопку вверх


	resize();

})();

