
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
		m18.heightOutput.style.height = window.innerHeight+'px';
	},
	scroll_to_top: function(e){
		e.stopImmediatePropagation();
		e.preventDefault();
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	},
	scrollTopBtn_hide: function(){
		if (pageYOffset > 0) {
			m18.scrollTopBtn.style.display = 'block';
		} else {
			m18.scrollTopBtn.style.display = 'none';
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
		var video_link = this.getAttribute('data-video'),
			iframe = '<iframe width="480" height="360" class="youtube-frame" src="http://www.youtube.com/embed/' + video_link + '?autoplay=1" allowfullscreen="" ></iframe>';
			
		m18.modalContent.innerHTML = iframe;
		m18.modal.style.display = 'block';
	},
	close_modal: function(){
		m18.modal.style.display = 'none';
		while(m18.modalContent.firstChild) m18.modalContent.removeChild(m18.modalContent.firstChild)
	},
	init: function(){
		this.scrollTopBtn.onclick = this.scroll_to_top; 
		window.onscroll = this.scrollTopBtn_hide;
		window.onresize = this.resize; 
		this.videoLink.onclick = this.open_modal;
		this.modalClose.onclick = this.close_modal;

		for(var i = 0; i < this.anchors.length; i++) { 
			var elem = this.anchors[i];

			elem.onclick = this.scroll_to_anchor;
		};

		this.scrollTopBtn.style.display = 'none';
		this.resize();
	}
};
m18.init();



sendForm = function(form) {
	form.classList.add('ok')
	//alert('sended');

	return false;
}

