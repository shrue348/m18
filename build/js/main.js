var m18={anchors:document.querySelectorAll('[href^="#"]'),scrollTopBtn:document.getElementsByClassName("scrollTop")[0],heightOutput:document.getElementsByClassName("first_screen")[0],form:document.getElementsByTagName("form")[0],inputs:document.getElementsByTagName("input"),videoLink:document.getElementsByClassName("video_wrap__start")[0],modal:document.getElementsByClassName("modal")[0],modalContent:document.getElementsByClassName("modal_content")[0],modalClose:document.getElementsByClassName("modal_close")[0],resize:function(){window.innerHeight>window.innerWidth?(this.heightOutput.classList.add("portrait"),this.heightOutput.classList.remove("landscape")):(this.heightOutput.classList.add("landscape"),this.heightOutput.classList.remove("portrait")),this.heightOutput.style.height=window.innerHeight+"px"},scroll_to_top:function(t){t.stopImmediatePropagation(),t.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})},scrollTopBtn_hide:function(){pageYOffset>0?this.scrollTopBtn.style.display="block":this.scrollTopBtn.style.display="none"},scroll_to_anchor:function(t,e){var s=this.getAttribute("href").split("#")[1];document.getElementById(s);targetPos=document.getElementById(s).offsetTop-30,t.stopImmediatePropagation(),t.preventDefault(),window.scrollTo({behavior:"smooth",left:0,top:targetPos})},scrollTo:function(t){function e(t,e){if(t){var s=t.offsetTop,i=window.scrollY,o=(new Date).getTime(),l=setInterval(function(){var t=Math.min(1,((new Date).getTime()-o)/e);window.scrollTo(0,i+t*(s-i-30)+1),1==t&&clearInterval(l)},5);window.scrollTo(0,i+1)}}var s=(this.getAttribute("href"),this.getAttribute("href").split("#")[1]),i=document.getElementById(s);t.stopImmediatePropagation(),t.preventDefault(),e(i,500)},open_modal:function(){var t=this.videoLink.getAttribute("data-video"),e='<iframe width="480" height="360" class="youtube-frame" src="http://www.youtube.com/embed/'+t+'?autoplay=1" allowfullscreen="" ></iframe>';this.modalContent.innerHTML=e,this.modal.style.display="block"},close_modal:function(){for(this.modal.style.display="none";this.modalContent.firstChild;)this.modalContent.removeChild(this.modalContent.firstChild)},check_input:function(){var t=this.value;""!=t?this.classList.add("not_empty"):this.classList.remove("not_empty")},sendForm:function(t){return t.classList.add("ok"),!1},init:function(){this.scrollTopBtn.onclick=this.scroll_to_top,window.onscroll=this.scrollTopBtn_hide.bind(this),window.addEventListener("orientationchange",this.resize.bind(this),!1),this.videoLink.onclick=this.open_modal.bind(this),this.modalClose.onclick=this.close_modal.bind(this);for(var t=0;t<this.anchors.length;t++){var e=this.anchors[t];e.onclick=this.scrollTo}for(var t=0;t<this.inputs.length;t++){var e=this.inputs[t];e.addEventListener("blur",this.check_input)}this.scrollTopBtn.style.display="none",this.resize()}};m18.init();var carousel=function(t){this.obj=document.getElementsByClassName(t)[0],objList=this.obj.getElementsByClassName("carousel_list")[0],objItems=this.obj.getElementsByClassName("carousel_item"),leftBtn=this.obj.getElementsByClassName("left_btn")[0],rightBtn=this.obj.getElementsByClassName("right_btn")[0],leftBtn.onclick=this.left.bind(this),rightBtn.onclick=this.right.bind(this)};carousel.prototype={left:function(){var t=this.obj.getElementsByClassName("carousel_item")[0].clientWidth,e=getComputedStyle(objList),s=(Number(e.getPropertyValue("left").split("px")[0]),objItems[objItems.length-1]);objItems[0];return!objList.classList.contains("animated")&&(objList.style.left="-"+2*t+"px",objList.insertBefore(s,objList.firstChild),objList.classList.add("animated"),objList.classList.add("left"),objList.style["margin-left"]=t+"px",setTimeout(function(){objList.classList.remove("animated"),objList.classList.remove("left"),objList.style.left="-100%",objList.style["margin-left"]="0"},500),void 0)},right:function(){var t=this.obj.getElementsByClassName("carousel_item")[0].clientWidth,e=getComputedStyle(objList),s=(Number(e.getPropertyValue("left").split("px")[0]),objItems[objItems.length-1],objItems[0]);return!objList.classList.contains("animated")&&(objList.classList.add("animated"),objList.classList.add("right"),objList.style["margin-left"]="-"+t+"px",void setTimeout(function(){objList.classList.remove("animated"),objList.classList.remove("right"),objList.appendChild(s),objList.style.left="-100%",objList.style["margin-left"]="0"},500))}},carousel=new carousel("carousel");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibTE4IiwiYW5jaG9ycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNjcm9sbFRvcEJ0biIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJoZWlnaHRPdXRwdXQiLCJmb3JtIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnB1dHMiLCJ2aWRlb0xpbmsiLCJtb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsQ2xvc2UiLCJyZXNpemUiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0aGlzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxfdG9fdG9wIiwiZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwic2Nyb2xsVG9wQnRuX2hpZGUiLCJwYWdlWU9mZnNldCIsImRpc3BsYXkiLCJzY3JvbGxfdG9fYW5jaG9yIiwiZWxlbSIsInRhcmdldElkIiwiZ2V0QXR0cmlidXRlIiwic3BsaXQiLCJnZXRFbGVtZW50QnlJZCIsInRhcmdldFBvcyIsIm9mZnNldFRvcCIsInNjcm9sbFRvIiwiYW5pbWF0ZSIsInRpbWUiLCJ0byIsImZyb20iLCJzY3JvbGxZIiwic3RhcnQiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJzdGVwIiwiTWF0aCIsIm1pbiIsImNsZWFySW50ZXJ2YWwiLCJ0YXJnZXRFbGVtIiwib3Blbl9tb2RhbCIsInZpZGVvX2xpbmsiLCJpZnJhbWUiLCJpbm5lckhUTUwiLCJjbG9zZV9tb2RhbCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNoZWNrX2lucHV0IiwidmFsdWUiLCJzZW5kRm9ybSIsImluaXQiLCJvbmNsaWNrIiwib25zY3JvbGwiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImkiLCJsZW5ndGgiLCJjYXJvdXNlbCIsIm9iaiIsIm9iakxpc3QiLCJvYmpJdGVtcyIsImxlZnRCdG4iLCJyaWdodEJ0biIsInJpZ2h0IiwicHJvdG90eXBlIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImdldENvbXB1dGVkU3R5bGUiLCJsYXN0SXRlbSIsIk51bWJlciIsImdldFByb3BlcnR5VmFsdWUiLCJjb250YWlucyIsImluc2VydEJlZm9yZSIsInNldFRpbWVvdXQiLCJmaXJzdEl0ZW0iLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBSUEsTUFDSEMsUUFBU0MsU0FBU0MsaUJBQWlCLGVBQ25DQyxhQUFjRixTQUFTRyx1QkFBdUIsYUFBYSxHQUMzREMsYUFBY0osU0FBU0csdUJBQXVCLGdCQUFnQixHQUM5REUsS0FBTUwsU0FBU00scUJBQXFCLFFBQVEsR0FDNUNDLE9BQVFQLFNBQVNNLHFCQUFxQixTQUN0Q0UsVUFBV1IsU0FBU0csdUJBQXVCLHFCQUFxQixHQUNoRU0sTUFBT1QsU0FBU0csdUJBQXVCLFNBQVMsR0FDaERPLGFBQWNWLFNBQVNHLHVCQUF1QixpQkFBaUIsR0FDL0RRLFdBQVlYLFNBQVNHLHVCQUF1QixlQUFlLEdBRTNEUyxPQUFRLFdBQ0pDLE9BQU9DLFlBQWNELE9BQU9FLFlBQzlCQyxLQUFLWixhQUFhYSxVQUFVQyxJQUFJLFlBQ2hDRixLQUFLWixhQUFhYSxVQUFVRSxPQUFPLGVBRW5DSCxLQUFLWixhQUFhYSxVQUFVQyxJQUFJLGFBQ2hDRixLQUFLWixhQUFhYSxVQUFVRSxPQUFPLGFBR3BDSCxLQUFLWixhQUFhZ0IsTUFBTUMsT0FBU1IsT0FBT0MsWUFBWSxNQUVyRFEsY0FBZSxTQUFTQyxHQUN2QkEsRUFBRUMsMkJBQ0ZELEVBQUVFLGlCQUVGWixPQUFPYSxRQUFTQyxJQUFLLEVBQUdDLEtBQU0sRUFBR0MsU0FBVSxZQUU1Q0Msa0JBQW1CLFdBQ2RDLFlBQWMsRUFDakJmLEtBQUtkLGFBQWFrQixNQUFNWSxRQUFVLFFBRWxDaEIsS0FBS2QsYUFBYWtCLE1BQU1ZLFFB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QixJQUFJOEQsRUFBTSxTQUN6Q1EsWUFBVyxXQUNEZCxRQUFRM0QsVUFBVUUsT0FBTyxZQUN6QnlELFFBQVEzRCxVQUFVRSxPQUFPLFNBQ3pCeUQsUUFBUWdCLFlBQVlELEdBQ3BCZixRQUFReEQsTUFBWSxLQUFJLFFBQ3hCd0QsUUFBUXhELE1BQU0sZUFBaUIsS0FDaEMsUUFLWHNELFNBQVcsR0FBSUEsVUFBUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG0xOCA9IHtcclxuXHRhbmNob3JzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaHJlZl49XCIjXCJdJyksXHJcblx0c2Nyb2xsVG9wQnRuOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzY3JvbGxUb3AnKVswXSxcclxuXHRoZWlnaHRPdXRwdXQ6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpcnN0X3NjcmVlbicpWzBdLFxyXG5cdGZvcm06IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKVswXSxcclxuXHRpbnB1dHM6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIiksXHJcblx0dmlkZW9MaW5rOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2aWRlb193cmFwX19zdGFydCcpWzBdLFxyXG5cdG1vZGFsOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbCcpWzBdLFxyXG5cdG1vZGFsQ29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWxfY29udGVudCcpWzBdLFxyXG5cdG1vZGFsQ2xvc2U6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsX2Nsb3NlJylbMF0sXHJcblxyXG5cdHJlc2l6ZTogZnVuY3Rpb24oKXtcclxuXHRcdGlmKHdpbmRvdy5pbm5lckhlaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoKXtcclxuXHRcdFx0dGhpcy5oZWlnaHRPdXRwdXQuY2xhc3NMaXN0LmFkZCgncG9ydHJhaXQnKTtcclxuXHRcdFx0dGhpcy5oZWlnaHRPdXRwdXQuY2xhc3NMaXN0LnJlbW92ZSgnbGFuZHNjYXBlJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmhlaWdodE91dHB1dC5jbGFzc0xpc3QuYWRkKCdsYW5kc2NhcGUnKTtcclxuXHRcdFx0dGhpcy5oZWlnaHRPdXRwdXQuY2xhc3NMaXN0LnJlbW92ZSgncG9ydHJhaXQnKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmhlaWdodE91dHB1dC5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQrJ3B4JztcclxuXHR9LFxyXG5cdHNjcm9sbF90b190b3A6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHR3aW5kb3cuc2Nyb2xsKHsgdG9wOiAwLCBsZWZ0OiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblx0fSxcclxuXHRzY3JvbGxUb3BCdG5faGlkZTogZnVuY3Rpb24oKXtcclxuXHRcdGlmIChwYWdlWU9mZnNldCA+IDApIHtcclxuXHRcdFx0dGhpcy5zY3JvbGxUb3BCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNjcm9sbFRvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2Nyb2xsX3RvX2FuY2hvcjogZnVuY3Rpb24oZSwgZWxlbSkge1xyXG5cdFx0dmFyIHRhcmdldElkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zcGxpdCgnIycpWzFdLFxyXG5cdFx0XHR0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xyXG5cdFx0XHR0YXJnZXRQb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCkub2Zmc2V0VG9wIC0gMzA7XHJcblxyXG5cdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xyXG5cdFx0ICAgIFwiYmVoYXZpb3JcIjogXCJzbW9vdGhcIixcclxuXHRcdCAgICBcImxlZnRcIjogMCxcclxuXHRcdCAgICBcInRvcFwiOiB0YXJnZXRQb3NcclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdHNjcm9sbFRvOiBmdW5jdGlvbihlKSB7XHJcblx0XHR2YXIgdGFyZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSxcclxuXHRcdFx0dGFyZ2V0SWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNwbGl0KCcjJylbMV0sXHJcblx0XHRcdHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XHJcblxyXG5cdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRmdW5jdGlvbiBhbmltYXRlKGVsZW0sdGltZSkge1xyXG5cdFx0ICAgIGlmKCAhZWxlbSkgcmV0dXJuO1xyXG5cdFx0ICAgIHZhciB0byA9IGVsZW0ub2Zmc2V0VG9wO1xyXG5cdFx0ICAgIHZhciBmcm9tID0gd2luZG93LnNjcm9sbFk7XHJcblx0XHQgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcblx0XHQgICAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHQgICAgICAgICAgICB2YXIgc3RlcCA9IE1hdGgubWluKDEsKG5ldyBEYXRlKCkuZ2V0VGltZSgpLXN0YXJ0KS90aW1lKTtcclxuXHRcdCAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLChmcm9tK3N0ZXAqKHRvLWZyb20tMzApKSsxKTtcclxuXHRcdCAgICAgICAgICAgIGlmKCBzdGVwID09IDEpeyBjbGVhckludGVydmFsKHRpbWVyKTt9O1xyXG5cdFx0ICAgICAgICB9LDUpO1xyXG5cdFx0ICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwoZnJvbSsxKSk7XHJcblx0XHQgICAgfVxyXG5cdFx0YW5pbWF0ZSh0YXJnZXRFbGVtLDUwMCk7XHJcblxyXG5cdH0sXHJcblx0b3Blbl9tb2RhbDogZnVuY3Rpb24oKXtcclxuXHRcdHZhciB2aWRlb19saW5rID0gdGhpcy52aWRlb0xpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZGVvJyksXHJcblx0XHRcdGlmcmFtZSA9ICc8aWZyYW1lIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzYwXCIgY2xhc3M9XCJ5b3V0dWJlLWZyYW1lXCIgc3JjPVwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgdmlkZW9fbGluayArICc/YXV0b3BsYXk9MVwiIGFsbG93ZnVsbHNjcmVlbj1cIlwiID48L2lmcmFtZT4nO1xyXG5cdFx0XHRcclxuXHRcdHRoaXMubW9kYWxDb250ZW50LmlubmVySFRNTCA9IGlmcmFtZTtcclxuXHRcdHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0fSxcclxuXHRjbG9zZV9tb2RhbDogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdHdoaWxlKHRoaXMubW9kYWxDb250ZW50LmZpcnN0Q2hpbGQpIHRoaXMubW9kYWxDb250ZW50LnJlbW92ZUNoaWxkKHRoaXMubW9kYWxDb250ZW50LmZpcnN0Q2hpbGQpXHJcblx0fSxcclxuXHRjaGVja19pbnB1dDogZnVuY3Rpb24oKXtcclxuXHRcdHZhciB2YWx1ZSA9IHRoaXMudmFsdWVcclxuXHJcblx0XHRpZiAodmFsdWUgIT0gJycpe1xyXG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoJ25vdF9lbXB0eScpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ25vdF9lbXB0eScpXHJcblx0XHR9XHJcblx0fSxcclxuXHRzZW5kRm9ybTogZnVuY3Rpb24oZm9ybSkge1xyXG5cdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdvaycpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRpbml0OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zY3JvbGxUb3BCdG4ub25jbGljayA9IHRoaXMuc2Nyb2xsX3RvX3RvcDsgXHJcblx0XHR3aW5kb3cub25zY3JvbGwgPSB0aGlzLnNjcm9sbFRvcEJ0bl9oaWRlLmJpbmQodGhpcyk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIHRoaXMucmVzaXplLmJpbmQodGhpcyksIGZhbHNlKTtcclxuXHJcblx0XHR0aGlzLnZpZGVvTGluay5vbmNsaWNrID0gdGhpcy5vcGVuX21vZGFsLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLm1vZGFsQ2xvc2Uub25jbGljayA9IHRoaXMuY2xvc2VfbW9kYWwuYmluZCh0aGlzKTtcclxuXHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5hbmNob3JzLmxlbmd0aDsgaSsrKSB7IFxyXG5cdFx0XHR2YXIgZWxlbSA9IHRoaXMuYW5jaG9yc1tpXTsgLy9hbmNob3JzXHJcblxyXG5cdFx0XHRlbGVtLm9uY2xpY2sgPSB0aGlzLnNjcm9sbFRvO1xyXG5cdFx0fTtcclxuXHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5pbnB1dHMubGVuZ3RoOyBpKyspIHsgXHJcblx0XHRcdHZhciBlbGVtID0gdGhpcy5pbnB1dHNbaV07IC8vaW5wdXRzXHJcblxyXG5cdFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHRoaXMuY2hlY2tfaW5wdXQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnNjcm9sbFRvcEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0dGhpcy5yZXNpemUoKTtcclxuXHR9XHJcbn07XHJcbm0xOC5pbml0KCk7XHJcblxyXG5cclxuLyotLS0tLS1DQVJPVVNFTC0tLS0tLS0tLSovXHJcbnZhciBjYXJvdXNlbCA9IGZ1bmN0aW9uKGkpIHtcclxuXHR0aGlzLm9iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaSlbMF0sXHJcblx0b2JqTGlzdCA9IHRoaXMub2JqLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsX2xpc3QnKVswXSxcclxuXHRvYmpJdGVtcyA9IHRoaXMub2JqLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsX2l0ZW0nKSxcclxuXHRsZWZ0QnRuID0gdGhpcy5vYmouZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVmdF9idG4nKVswXSxcclxuXHRyaWdodEJ0biA9IHRoaXMub2JqLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JpZ2h0X2J0bicpWzBdLFxyXG5cclxuXHRsZWZ0QnRuLm9uY2xpY2sgPSB0aGlzLmxlZnQuYmluZCh0aGlzKSxcclxuXHRyaWdodEJ0bi5vbmNsaWNrID0gdGhpcy5yaWdodC5iaW5kKHRoaXMpO1xyXG59O1xyXG5cclxuY2Fyb3VzZWwucHJvdG90eXBlID0ge1xyXG5cdGxlZnQ6IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgd2lkdGggPSB0aGlzLm9iai5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbF9pdGVtJylbMF0uY2xpZW50V2lkdGgsXHJcblx0XHRcdHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShvYmpMaXN0KSxcclxuXHRcdFx0bGVmdCA9IE51bWJlcihzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibGVmdFwiKS5zcGxpdCgncHgnKVswXSksXHJcblx0XHRcdGxhc3RJdGVtID0gb2JqSXRlbXNbb2JqSXRlbXMubGVuZ3RoLTFdLFxyXG5cdFx0XHRmaXJzdEl0ZW0gPSBvYmpJdGVtc1swXSxcclxuXHRcdFx0bWFyZ2luID0gOTYwO1xyXG5cclxuXHRcdGlmIChvYmpMaXN0LmNsYXNzTGlzdC5jb250YWlucygnYW5pbWF0ZWQnKSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHJcblx0XHRvYmpMaXN0LnN0eWxlWydsZWZ0J10gPSAnLScrd2lkdGgqMisncHgnLFxyXG5cdFx0b2JqTGlzdC5pbnNlcnRCZWZvcmUobGFzdEl0ZW0sIG9iakxpc3QuZmlyc3RDaGlsZCksXHJcblx0XHRvYmpMaXN0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyksXHJcblx0XHRvYmpMaXN0LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKSxcclxuXHRcdG9iakxpc3Quc3R5bGVbJ21hcmdpbi1sZWZ0J10gPSB3aWR0aCsncHgnLFxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICBvYmpMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkJyksXHJcblx0ICAgICAgICAgICBvYmpMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQnKSxcclxuXHQgICAgICAgICAgIG9iakxpc3Quc3R5bGVbJ2xlZnQnXSA9ICctMTAwJScsXHJcblx0ICAgICAgICAgICBvYmpMaXN0LnN0eWxlWydtYXJnaW4tbGVmdCddID0gJzAnO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcblxyXG5cdH0sXHJcblx0cmlnaHQ6IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgd2lkdGggPSB0aGlzLm9iai5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbF9pdGVtJylbMF0uY2xpZW50V2lkdGgsXHJcblx0XHRcdHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShvYmpMaXN0KSxcclxuXHRcdFx0bGVmdCA9IE51bWJlcihzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibGVmdFwiKS5zcGxpdCgncHgnKVswXSksXHJcblx0XHRcdGxhc3RJdGVtID0gb2JqSXRlbXNbb2JqSXRlbXMubGVuZ3RoLTFdLFxyXG5cdFx0XHRmaXJzdEl0ZW0gPSBvYmpJdGVtc1swXSxcclxuXHRcdFx0bWFyZ2luID0gOTYwO1xyXG5cclxuXHRcdGlmIChvYmpMaXN0LmNsYXNzTGlzdC5jb250YWlucygnYW5pbWF0ZWQnKSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHJcblx0XHRvYmpMaXN0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyksXHJcblx0XHRvYmpMaXN0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0JyksXHJcblx0XHRvYmpMaXN0LnN0eWxlWydtYXJnaW4tbGVmdCddID0gJy0nK3dpZHRoKydweCc7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgIG9iakxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKSxcclxuXHQgICAgICAgICAgIG9iakxpc3QuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQnKSxcclxuXHQgICAgICAgICAgIG9iakxpc3QuYXBwZW5kQ2hpbGQoZmlyc3RJdGVtKSxcclxuXHQgICAgICAgICAgIG9iakxpc3Quc3R5bGVbJ2xlZnQnXSA9ICctMTAwJScsXHJcblx0ICAgICAgICAgICBvYmpMaXN0LnN0eWxlWydtYXJnaW4tbGVmdCddID0gJzAnO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcblxyXG5cdH1cclxufVxyXG5cclxuY2Fyb3VzZWwgPSBuZXcgY2Fyb3VzZWwoJ2Nhcm91c2VsJyk7XHJcblxyXG5cclxuXHJcbiJdfQ==
