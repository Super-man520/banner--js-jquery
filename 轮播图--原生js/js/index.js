// 轮播图
(function () {
    var banner = document.querySelector(".banner");
    var points = document.querySelectorAll(".banner ol li");
    var $ul = document.querySelector(".banner ul");

    // 深克隆放第一张假图在最后面
    $ul.appendChild($ul.children[0].cloneNode(true));
    // 设置ul的宽度
    $ul.style.width = $ul.children.length * $ul.children[0].offsetWidth + "px";

    var count = 0;
    function autoPlay() {
        // 判断是否在最后
        if (count >= $ul.children.length - 1) {
            $ul.style.left = 0;
            count = 0;
        } else {
            count++;
            animate($ul, -count * $ul.children[0].offsetWidth, 80);
        }
        // 清除所有小圆点的背景色
        for (var i = 0; i < points.length; i++) {
            points[i].className = "";
        }
        if (count >= $ul.children.length - 1) {
            points[0].className = "current";
        }
        else {
            points[count].className = "current";
        }
    }

    var timerId = setInterval(autoPlay, 1500);
    banner.onmouseover = function () {
        clearInterval(timerId);
    }

    banner.onmouseout = function () {
        timerId = setInterval(autoPlay, 1500);
    }

    // 点击小远点响应的图片发生改变
    for (var i = 0; i < points.length; i++) {
        points[i].index = i;
        points[i].onclick = function () {
            animate($ul, -this.index * 731, 80);
            // 点击时重新赋值给count
            count = this.index
            for (var i = 0; i < points.length; i++) {
                points[i].className = '';
            }
            this.className = 'current';
        };
    }
})();