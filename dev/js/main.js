var m18 = {
	anchors: document.querySelectorAll('[href^="#"]'),
	scrollTopBtn: document.getElementsByClassName('scrollTop')[0],
	heightOutput: document.getElementsByClassName('first_screen')[0],
	form: document.getElementsByTagName("form")[0],
	inputs: document.getElementsByTagName("input"),
	videoLink: document.getElementsByClassName('video_wrap__start')[0],
	modal: document.getElementsByClassName('modal')[0],
	modalContent: document.getElementsByClassName('modal_content')[0],
	modalClose: document.getElementsByClassName('modal_close')[0],

	resize: function(){
		if(window.innerHeight > window.innerWidth){
			this.heightOutput.classList.add('portrait');
			this.heightOutput.classList.remove('landscape');
		} else {
			this.heightOutput.classList.add('landscape');
			this.heightOutput.classList.remove('portrait');
		}

		this.heightOutput.style.height = window.innerHeight+'px';
	},

	scroll_to_anchor: function(e, elem) {
		var targetId = this.getAttribute('href').split('#')[1],
			targetElem = document.getElementById(targetId);
			targetPos = document.getElementById(targetId).offsetTop - 30;

		e.stopImmediatePropagation();
		e.preventDefault();

		window.scrollTo({
		    "behavior": "smooth",
		    "left": 0,
		    "top": targetPos
		});
	},

	scrollTo: function(e) {
		var target = this.getAttribute('href'),
			targetId = this.getAttribute('href').split('#')[1],
			targetElem = document.getElementById(targetId);

		e.stopImmediatePropagation();
		e.preventDefault();

		function animate(elem,time) {
		    if( !elem) return;
		    var to = elem.offsetTop;
		    var from = window.scrollY;
		    var start = new Date().getTime(),
		        timer = setInterval(function() {
		            var step = Math.min(1,(new Date().getTime()-start)/time);
		            window.scrollTo(0,(from+step*(to-from-30))+1);
		            if( step == 1){ clearInterval(timer);};
		        },3);
		        window.scrollTo(0,(from+1));
		    }
		animate(targetElem,500);

	},
	open_modal: function(){
		var video_link = this.videoLink.getAttribute('data-video'),
			iframe = '<iframe width="480" height="360" class="youtube-frame" src="http://www.youtube.com/embed/' + video_link + '?autoplay=1" allowfullscreen="" ></iframe>';
			
		this.modalContent.innerHTML = iframe;
		this.modal.style.display = 'block';
	},
	close_modal: function(){
		this.modal.style.display = 'none';
		while(this.modalContent.firstChild) this.modalContent.removeChild(this.modalContent.firstChild)
	},
	check_input: function(){
		var value = this.value

		if (value != ''){
			this.classList.add('not_empty')
		} else {
			this.classList.remove('not_empty')
		}
	},
	sendForm: function(form) {
		form.classList.add('ok')
		return false;
	},
	init: function(){
		window.addEventListener("orientationchange", this.resize.bind(this), false);

		this.videoLink.onclick = this.open_modal.bind(this);
		this.modalClose.onclick = this.close_modal.bind(this);

		for(var i = 0; i < this.anchors.length; i++) { 
			var elem = this.anchors[i]; //anchors

			elem.onclick = this.scrollTo;
		};

		for(var i = 0; i < this.inputs.length; i++) { 
			var elem = this.inputs[i]; //inputs

			elem.addEventListener("blur", this.check_input);
		};

	
		this.resize();
	}
};
m18.init();


/*------CAROUSEL---------*/
var carousel = function(i) {
	this.obj = document.getElementsByClassName(i)[0],
	objList = this.obj.getElementsByClassName('carousel_list')[0],
	objItems = this.obj.getElementsByClassName('carousel_item'),
	leftBtn = this.obj.getElementsByClassName('left_btn')[0],
	rightBtn = this.obj.getElementsByClassName('right_btn')[0],

	leftBtn.onclick = this.left.bind(this),
	rightBtn.onclick = this.right.bind(this);
};

carousel.prototype = {
	left: function(){
		var width = this.obj.getElementsByClassName('carousel_item')[0].clientWidth,
			style = getComputedStyle(objList),
			left = Number(style.getPropertyValue("left").split('px')[0]),
			lastItem = objItems[objItems.length-1],
			firstItem = objItems[0],
			margin = 960;

		if (objList.classList.contains('animated')) {
			return false
		}

		objList.style['left'] = '-'+width*2+'px',
		objList.insertBefore(lastItem, objList.firstChild),
		objList.classList.add('animated'),
		objList.classList.add('left'),
		objList.style['margin-left'] = width+'px',
		setTimeout(function () {
	           objList.classList.remove('animated'),
	           objList.classList.remove('left'),
	           objList.style['left'] = '-100%',
	           objList.style['margin-left'] = '0';
        }, 500);

	},
	right: function(){
		var width = this.obj.getElementsByClassName('carousel_item')[0].clientWidth,
			style = getComputedStyle(objList),
			left = Number(style.getPropertyValue("left").split('px')[0]),
			lastItem = objItems[objItems.length-1],
			firstItem = objItems[0],
			margin = 960;

		if (objList.classList.contains('animated')) {
			return false
		}

		objList.classList.add('animated'),
		objList.classList.add('right'),
		objList.style['margin-left'] = '-'+width+'px';
		setTimeout(function () {
	           objList.classList.remove('animated'),
	           objList.classList.remove('right'),
	           objList.appendChild(firstItem),
	           objList.style['left'] = '-100%',
	           objList.style['margin-left'] = '0';
        }, 500);

	}
}

carousel = new carousel('carousel');



