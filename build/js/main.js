var m18={anchors:document.querySelectorAll('[href^="#"]'),scrollTopBtn:document.getElementsByClassName("scrollTop")[0],heightOutput:document.getElementsByClassName("first_screen")[0],form:document.getElementsByTagName("form")[0],videoLink:document.getElementsByClassName("video_wrap__start")[0],modal:document.getElementsByClassName("modal")[0],modalContent:document.getElementsByClassName("modal_content")[0],modalClose:document.getElementsByClassName("modal_close")[0],resize:function(){window.innerHeight>window.innerWidth?(this.heightOutput.classList.add("portrait"),this.heightOutput.classList.remove("landscape")):(this.heightOutput.classList.add("landscape"),this.heightOutput.classList.remove("portrait")),this.heightOutput.style.height=window.innerHeight+"px"},scroll_to_top:function(t){t.stopImmediatePropagation(),t.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"}),reflowFixedPositions()},scrollTopBtn_hide:function(){pageYOffset>0?this.scrollTopBtn.style.display="block":this.scrollTopBtn.style.display="none"},scroll_to_anchor:function(t,e){var s=this.getAttribute("href").split("#")[1];document.getElementById(s);targetPos=document.getElementById(s).offsetTop-30,t.stopImmediatePropagation(),t.preventDefault(),window.scrollTo({behavior:"smooth",left:0,top:targetPos})},open_modal:function(){var t=this.videoLink.getAttribute("data-video"),e='<iframe width="480" height="360" class="youtube-frame" src="http://www.youtube.com/embed/'+t+'?autoplay=1" allowfullscreen="" ></iframe>';this.modalContent.innerHTML=e,this.modal.style.display="block"},close_modal:function(){for(this.modal.style.display="none";this.modalContent.firstChild;)this.modalContent.removeChild(this.modalContent.firstChild)},sendForm:function(t){return t.classList.add("ok"),!1},init:function(){this.scrollTopBtn.onclick=this.scroll_to_top,window.onscroll=this.scrollTopBtn_hide.bind(this),window.onresize=this.resize.bind(this),this.videoLink.onclick=this.open_modal.bind(this),this.modalClose.onclick=this.close_modal.bind(this);for(var t=0;t<this.anchors.length;t++){var e=this.anchors[t];e.onclick=this.scroll_to_anchor}this.scrollTopBtn.style.display="none",this.resize()}};m18.init();var carousel=function(t){this.obj=document.getElementsByClassName(t)[0],objList=this.obj.getElementsByClassName("carousel_list")[0],objItems=this.obj.getElementsByClassName("carousel_item"),leftBtn=this.obj.getElementsByClassName("left_btn")[0],rightBtn=this.obj.getElementsByClassName("right_btn")[0],leftBtn.onclick=this.left.bind(this),rightBtn.onclick=this.right.bind(this)};carousel.prototype={scrollSpeed:200,left:function(){var t=(this.obj.getElementsByClassName("carousel_item")[0].clientWidth,getComputedStyle(objList)),e=(Number(t.getPropertyValue("left").split("px")[0]),objItems[objItems.length-1]);objItems[0];objList.style.left="-980px",objList.insertBefore(e,objList.firstChild),objList.classList.add("animated"),objList.classList.add("left"),objList.style["margin-left"]="980px",setTimeout(function(){objList.classList.remove("animated"),objList.classList.remove("left"),objList.style.left="-980px",objList.style["margin-left"]="0"},500)},right:function(){var t=(this.obj.getElementsByClassName("carousel_item")[0].clientWidth,getComputedStyle(objList)),e=(Number(t.getPropertyValue("left").split("px")[0]),objItems[objItems.length-1],objItems[0]);objList.classList.add("animated"),objList.classList.add("right"),objList.style["margin-left"]="-960px",setTimeout(function(){objList.classList.remove("animated"),objList.classList.remove("right"),objList.appendChild(e),objList.style.left="-960px",objList.style["margin-left"]="0"},500)}},carousel=new carousel("carousel");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibTE4IiwiYW5jaG9ycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNjcm9sbFRvcEJ0biIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJoZWlnaHRPdXRwdXQiLCJmb3JtIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ2aWRlb0xpbmsiLCJtb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsQ2xvc2UiLCJyZXNpemUiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0aGlzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxfdG9fdG9wIiwiZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwicmVmbG93Rml4ZWRQb3NpdGlvbnMiLCJzY3JvbGxUb3BCdG5faGlkZSIsInBhZ2VZT2Zmc2V0IiwiZGlzcGxheSIsInNjcm9sbF90b19hbmNob3IiLCJlbGVtIiwidGFyZ2V0SWQiLCJnZXRBdHRyaWJ1dGUiLCJzcGxpdCIsImdldEVsZW1lbnRCeUlkIiwidGFyZ2V0UG9zIiwib2Zmc2V0VG9wIiwic2Nyb2xsVG8iLCJvcGVuX21vZGFsIiwidmlkZW9fbGluayIsImlmcmFtZSIsImlubmVySFRNTCIsImNsb3NlX21vZGFsIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwic2VuZEZvcm0iLCJpbml0Iiwib25jbGljayIsIm9uc2Nyb2xsIiwiYmluZCIsIm9ucmVzaXplIiwiaSIsImxlbmd0aCIsImNhcm91c2VsIiwib2JqIiwib2JqTGlzdCIsIm9iakl0ZW1zIiwibGVmdEJ0biIsInJpZ2h0QnRuIiwicmlnaHQiLCJwcm90b3R5cGUiLCJzY3JvbGxTcGVlZCIsImNsaWVudFdpZHRoIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImxhc3RJdGVtIiwiTnVtYmVyIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImluc2VydEJlZm9yZSIsInNldFRpbWVvdXQiLCJmaXJzdEl0ZW0iLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBSUEsTUFDSEMsUUFBU0MsU0FBU0MsaUJBQWlCLGVBQ25DQyxhQUFjRixTQUFTRyx1QkFBdUIsYUFBYSxHQUMzREMsYUFBY0osU0FBU0csdUJBQXVCLGdCQUFnQixHQUM5REUsS0FBTUwsU0FBU00scUJBQXFCLFFBQVEsR0FDNUNDLFVBQVdQLFNBQVNHLHVCQUF1QixxQkFBcUIsR0FDaEVLLE1BQU9SLFNBQVNHLHVCQUF1QixTQUFTLEdBQ2hETSxhQUFjVCxTQUFTRyx1QkFBdUIsaUJBQWlCLEdBQy9ETyxXQUFZVixTQUFTRyx1QkFBdUIsZUFBZSxHQUUzRFEsT0FBUSxXQUNKQyxPQUFPQyxZQUFjRCxPQUFPRSxZQUMzQkMsS0FBS1gsYUFBYVksVUFBVUMsSUFBSSxZQUNuQ0YsS0FBS1gsYUFBYVksVUFBVUUsT0FBTyxlQUVuQ0gsS0FBS1gsYUFBYVksVUFBVUMsSUFBSSxhQUNoQ0YsS0FBS1gsYUFBYVksVUFBVUUsT0FBTyxhQUdwQ0gsS0FBS1gsYUFBYWUsTUFBTUMsT0FBU1IsT0FBT0MsWUFBWSxNQUVyRFEsY0FBZSxTQUFTQyxHQUN2QkEsRUFBRUMsMkJBQ0ZELEVBQUVFLGlCQUVGWixPQUFPYSxRQUFTQyxJQUFLLEVBQUdDLEtBQU0sRUFBR0MsU0FBVSxXQUMzQ0Msd0JBR0RDLGtCQUFtQixXQUNkQyxZQUFjLEVBQ2pCaEIsS0FBS2IsYUFBYWlCLE1BQU1hLFFBQVUsUUFFbENqQixLQUFLYixhQUFhaUIsTUFBTWEsUUFBVSxRQUdwQ0MsaUJBQWtCLFNBQVNYLEVBQUdZLEdBQzdCLEdBQUlDLEdBQVdwQixLQUFLcUIsYUFBYSxRQUFRQyxNQUFNLEtBQUssRUFDdENyQyxVQUFTc0MsZUFBZUgsRUFDckNJLFdBQVl2QyxTQUFTc0MsZUFBZUgsR0FBVUssVUFBWSxHQUUzRGxCLEVBQUVDLDJCQUNGRCxFQUFFRSxpQkFHRlosT0FBTzZC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QyxRQUFRZSxZQUFZRCxHQUNwQmQsUUFBUXhDLE1BQVksS0FBSSxTQUN4QndDLFFBQVF4QyxNQUFNLGVBQWlCLEtBQ2hDLE9BS1hzQyxTQUFXLEdBQUlBLFVBQVMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtMTggPSB7XG5cdGFuY2hvcnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tocmVmXj1cIiNcIl0nKSxcblx0c2Nyb2xsVG9wQnRuOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGxUb3AnKVswXSxcblx0aGVpZ2h0T3V0cHV0OiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaXJzdF9zY3JlZW4nKVswXSxcblx0Zm9ybTogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpWzBdLFxuXHR2aWRlb0xpbms6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZpZGVvX3dyYXBfX3N0YXJ0JylbMF0sXG5cdG1vZGFsOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCcpWzBdLFxuXHRtb2RhbENvbnRlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsX2NvbnRlbnQnKVswXSxcblx0bW9kYWxDbG9zZTogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWxfY2xvc2UnKVswXSxcblxuXHRyZXNpemU6IGZ1bmN0aW9uKCl7XG5cdFx0aWYod2luZG93LmlubmVySGVpZ2h0ID4gd2luZG93LmlubmVyV2lkdGgpe1xuXHRcdCAgICB0aGlzLmhlaWdodE91dHB1dC5jbGFzc0xpc3QuYWRkKCdwb3J0cmFpdCcpO1xuXHRcdFx0dGhpcy5oZWlnaHRPdXRwdXQuY2xhc3NMaXN0LnJlbW92ZSgnbGFuZHNjYXBlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaGVpZ2h0T3V0cHV0LmNsYXNzTGlzdC5hZGQoJ2xhbmRzY2FwZScpO1xuXHRcdFx0dGhpcy5oZWlnaHRPdXRwdXQuY2xhc3NMaXN0LnJlbW92ZSgncG9ydHJhaXQnKTtcblx0XHR9XG5cblx0XHR0aGlzLmhlaWdodE91dHB1dC5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQrJ3B4Jztcblx0fSxcblx0c2Nyb2xsX3RvX3RvcDogZnVuY3Rpb24oZSl7XG5cdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR3aW5kb3cuc2Nyb2xsKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG5cdFx0cmVmbG93Rml4ZWRQb3NpdGlvbnMoKTtcblxuXHR9LFxuXHRzY3JvbGxUb3BCdG5faGlkZTogZnVuY3Rpb24oKXtcblx0XHRpZiAocGFnZVlPZmZzZXQgPiAwKSB7XG5cdFx0XHR0aGlzLnNjcm9sbFRvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zY3JvbGxUb3BCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9XG5cdH0sXG5cdHNjcm9sbF90b19hbmNob3I6IGZ1bmN0aW9uKGUsIGVsZW0pIHtcblx0XHR2YXIgdGFyZ2V0SWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNwbGl0KCcjJylbMV0sXG5cdFx0XHR0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuXHRcdFx0dGFyZ2V0UG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpLm9mZnNldFRvcCAtIDMwO1xuXG5cdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQvL3RhcmdldEVsZW0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG5cdFx0d2luZG93LnNjcm9sbFRvKHtcblx0XHQgICAgXCJiZWhhdmlvclwiOiBcInNtb290aFwiLFxuXHRcdCAgICBcImxlZnRcIjogMCxcblx0XHQgICAgXCJ0b3BcIjogdGFyZ2V0UG9zXG5cdFx0fSk7XG5cdH0sXG5cdG9wZW5fbW9kYWw6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHZpZGVvX2xpbmsgPSB0aGlzLnZpZGVvTGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlkZW8nKSxcblx0XHRcdGlmcmFtZSA9ICc8aWZyYW1lIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzYwXCIgY2xhc3M9XCJ5b3V0dWJlLWZyYW1lXCIgc3JjPVwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgdmlkZW9fbGluayArICc/YXV0b3BsYXk9MVwiIGFsbG93ZnVsbHNjcmVlbj1cIlwiID48L2lmcmFtZT4nO1xuXHRcdFx0XG5cdFx0dGhpcy5tb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gaWZyYW1lO1xuXHRcdHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH0sXG5cdGNsb3NlX21vZGFsOiBmdW5jdGlvbigpe1xuXHRcdHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR3aGlsZSh0aGlzLm1vZGFsQ29udGVudC5maXJzdENoaWxkKSB0aGlzLm1vZGFsQ29udGVudC5yZW1vdmVDaGlsZCh0aGlzLm1vZGFsQ29udGVudC5maXJzdENoaWxkKVxuXHR9LFxuXHRzZW5kRm9ybTogZnVuY3Rpb24oZm9ybSkge1xuXHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnb2snKVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0aW5pdDogZnVuY3Rpb24oKXtcblx0XHR0aGlzLnNjcm9sbFRvcEJ0bi5vbmNsaWNrID0gdGhpcy5zY3JvbGxfdG9fdG9wOyBcblx0XHR3aW5kb3cub25zY3JvbGwgPSB0aGlzLnNjcm9sbFRvcEJ0bl9oaWRlLmJpbmQodGhpcyk7XG5cdFx0d2luZG93Lm9ucmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTsgXG5cblx0XHR0aGlzLnZpZGVvTGluay5vbmNsaWNrID0gdGhpcy5vcGVuX21vZGFsLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5tb2RhbENsb3NlLm9uY2xpY2sgPSB0aGlzLmNsb3NlX21vZGFsLmJpbmQodGhpcyk7XG5cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5hbmNob3JzLmxlbmd0aDsgaSsrKSB7IFxuXHRcdFx0dmFyIGVsZW0gPSB0aGlzLmFuY2hvcnNbaV07XG5cblx0XHRcdGVsZW0ub25jbGljayA9IHRoaXMuc2Nyb2xsX3RvX2FuY2hvcjtcblx0XHR9O1xuXG5cdFx0dGhpcy5zY3JvbGxUb3BCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR0aGlzLnJlc2l6ZSgpO1xuXHR9XG59O1xubTE4LmluaXQoKTtcblxuXG4vKi0tLS0tLUNBUk9VU0VMLS0tLS0tLS0tKi9cbnZhciBjYXJvdXNlbCA9IGZ1bmN0aW9uKGkpIHtcblx0dGhpcy5vYmogPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGkpWzBdLFxuXHRvYmpMaXN0ID0gdGhpcy5vYmouZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWxfbGlzdCcpWzBdLFxuXHRvYmpJdGVtcyA9IHRoaXMub2JqLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsX2l0ZW0nKSxcblx0bGVmdEJ0biA9IHRoaXMub2JqLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlZnRfYnRuJylbMF0sXG5cdHJpZ2h0QnRuID0gdGhpcy5vYmouZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmlnaHRfYnRuJylbMF0sXG5cblx0bGVmdEJ0bi5vbmNsaWNrID0gdGhpcy5sZWZ0LmJpbmQodGhpcyksXG5cdHJpZ2h0QnRuLm9uY2xpY2sgPSB0aGlzLnJpZ2h0LmJpbmQodGhpcyk7XG59O1xuXG5jYXJvdXNlbC5wcm90b3R5cGUgPSB7XG5cdHNjcm9sbFNwZWVkOiAyMDAsXG5cblx0bGVmdDogZnVuY3Rpb24oKXtcblx0XHR2YXIgd2lkdGggPSB0aGlzLm9iai5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbF9pdGVtJylbMF0uY2xpZW50V2lkdGgsXG5cdFx0XHRzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUob2JqTGlzdCksXG5cdFx0XHRsZWZ0ID0gTnVtYmVyKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJsZWZ0XCIpLnNwbGl0KCdweCcpWzBdKSxcblx0XHRcdGxhc3RJdGVtID0gb2JqSXRlbXNbb2JqSXRlbXMubGVuZ3RoLTFdLFxuXHRcdFx0Zmlyc3RJdGVtID0gb2JqSXRlbXNbMF0sXG5cdFx0XHRtYXJnaW4gPSA5NjA7XG5cblx0XHRvYmpMaXN0LnN0eWxlWydsZWZ0J10gPSAnLTk4MHB4Jyxcblx0XHRvYmpMaXN0Lmluc2VydEJlZm9yZShsYXN0SXRlbSwgb2JqTGlzdC5maXJzdENoaWxkKSxcblx0XHRvYmpMaXN0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyksXG5cdFx0b2JqTGlzdC5jbGFzc0xpc3QuYWRkKCdsZWZ0JyksXG5cdFx0b2JqTGlzdC5zdHlsZVsnbWFyZ2luLWxlZnQnXSA9ICc5ODBweCcsXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgb2JqTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZCcpLFxuXHQgICAgICAgICAgIG9iakxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbGVmdCcpLFxuXHQgICAgICAgICAgIG9iakxpc3Quc3R5bGVbJ2xlZnQnXSA9ICctOTgwcHgnLFxuXHQgICAgICAgICAgIG9iakxpc3Quc3R5bGVbJ21hcmdpbi1sZWZ0J10gPSAnMCc7XG4gICAgICAgIH0sIDUwMCk7XG5cblx0fSxcblx0cmlnaHQ6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHdpZHRoID0gdGhpcy5vYmouZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWxfaXRlbScpWzBdLmNsaWVudFdpZHRoLFxuXHRcdFx0c3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG9iakxpc3QpLFxuXHRcdFx0bGVmdCA9IE51bWJlcihzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibGVmdFwiKS5zcGxpdCgncHgnKVswXSksXG5cdFx0XHRsYXN0SXRlbSA9IG9iakl0ZW1zW29iakl0ZW1zLmxlbmd0aC0xXSxcblx0XHRcdGZpcnN0SXRlbSA9IG9iakl0ZW1zWzBdLFxuXHRcdFx0bWFyZ2luID0gOTYwO1xuXG5cdFx0b2JqTGlzdC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcpLFxuXHRcdG9iakxpc3QuY2xhc3NMaXN0LmFkZCgncmlnaHQnKSxcblx0XHRvYmpMaXN0LnN0eWxlWydtYXJnaW4tbGVmdCddID0gJy05NjBweCc7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgb2JqTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZCcpLFxuXHQgICAgICAgICAgIG9iakxpc3QuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQnKSxcblx0ICAgICAgICAgICBvYmpMaXN0LmFwcGVuZENoaWxkKGZpcnN0SXRlbSksXG5cdCAgICAgICAgICAgb2JqTGlzdC5zdHlsZVsnbGVmdCddID0gJy05NjBweCcsXG5cdCAgICAgICAgICAgb2JqTGlzdC5zdHlsZVsnbWFyZ2luLWxlZnQnXSA9ICcwJztcbiAgICAgICAgfSwgNTAwKTtcblxuXHR9XG59XG5cbmNhcm91c2VsID0gbmV3IGNhcm91c2VsKCdjYXJvdXNlbCcpO1xuXG5cblxuIl19