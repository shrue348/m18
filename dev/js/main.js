var m18 = {
	anchors: document.querySelectorAll('[href^="#"]'),
	scrollTopBtn: document.getElementsByClassName('scrollTop')[0],
	heightOutput: document.getElementsByClassName('first_screen')[0],
	form: document.getElementsByTagName("form")[0],
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
	scroll_to_top: function(e){
		e.stopImmediatePropagation();
		e.preventDefault();

		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		reflowFixedPositions();

	},
	scrollTopBtn_hide: function(){
		if (pageYOffset > 0) {
			this.scrollTopBtn.style.display = 'block';
		} else {
			this.scrollTopBtn.style.display = 'none';
		}
	},
	scroll_to_anchor: function(e, elem) {
		var targetId = this.getAttribute('href').split('#')[1],
			targetElem = document.getElementById(targetId);
			targetPos = document.getElementById(targetId).offsetTop - 30;

		e.stopImmediatePropagation();
		e.preventDefault();

		//targetElem.scrollIntoView({ behavior: 'smooth' });
		window.scrollTo({
		    "behavior": "smooth",
		    "left": 0,
		    "top": targetPos
		});
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
	sendForm: function(form) {
		form.classList.add('ok')
		return false;
	},
	init: function(){
		this.scrollTopBtn.onclick = this.scroll_to_top; 
		window.onscroll = this.scrollTopBtn_hide.bind(this);
		window.onresize = this.resize.bind(this); 

		this.videoLink.onclick = this.open_modal.bind(this);
		this.modalClose.onclick = this.close_modal.bind(this);

		for(var i = 0; i < this.anchors.length; i++) { 
			var elem = this.anchors[i];

			elem.onclick = this.scroll_to_anchor;
		};

		this.scrollTopBtn.style.display = 'none';
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



