/*------CAROUSEL---------*/
var carousel = function (i) {
    this.obj = document.getElementsByClassName(i)[0],
        objList = this.obj.getElementsByClassName('carousel_list')[0],
        objItems = this.obj.getElementsByClassName('carousel_item'),
        leftBtn = this.obj.getElementsByClassName('left_btn')[0],
        rightBtn = this.obj.getElementsByClassName('right_btn')[0],
        leftBtn.onclick = this.left.bind(this),
        rightBtn.onclick = this.right.bind(this);
};
carousel.prototype = {
    left: function () {
        var width = this.obj.getElementsByClassName('carousel_item')[0].clientWidth, style = getComputedStyle(objList), left = Number(style.getPropertyValue("left").split('px')[0]), lastItem = objItems[objItems.length - 1], firstItem = objItems[0], margin = 960;
        if (objList.classList.contains('animated')) {
            return false;
        }
        objList.style['left'] = '-' + width * 2 + 'px',
            objList.insertBefore(lastItem, objList.firstChild),
            objList.classList.add('animated'),
            objList.classList.add('left'),
            objList.style['margin-left'] = width + 'px',
            setTimeout(function () {
                objList.classList.remove('animated'),
                    objList.classList.remove('left'),
                    objList.style['left'] = '-100%',
                    objList.style['margin-left'] = '0';
            }, 500);
    },
    right: function () {
        var width = this.obj.getElementsByClassName('carousel_item')[0].clientWidth, style = getComputedStyle(objList), left = Number(style.getPropertyValue("left").split('px')[0]), lastItem = objItems[objItems.length - 1], firstItem = objItems[0], margin = 960;
        if (objList.classList.contains('animated')) {
            return false;
        }
        objList.classList.add('animated'),
            objList.classList.add('right'),
            objList.style['margin-left'] = '-' + width + 'px';
        setTimeout(function () {
            objList.classList.remove('animated'),
                objList.classList.remove('right'),
                objList.appendChild(firstItem),
                objList.style['left'] = '-100%',
                objList.style['margin-left'] = '0';
        }, 500);
    }
};
carousel = new carousel('carousel');
