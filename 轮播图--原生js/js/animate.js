// animate函数来封装
// element : 做动画的元素
// target： 动画的目标值
// num: 每次移动的距离
// 作用：可以让任意元素去任意left位置
function animate(element, target, num) {
    // 需求：
    // 如果num没有传递，num自己取50，（给函数的参数设置默认值）
    // 如果num传递了，传80， num取80
    num = num || 50;

    // 预解析
    // var timerId; // undefined

    // 在每次开启定时器之前，需要把上一次开启的定时器给关掉
    clearInterval(element.timerId);

    // element : 做动画的元素 (对象)
    // 其实类似于 存下标   lis[i].index = i;
    // 把定时器的id存储到element对象上的timerId属性上了
    element.timerId = setInterval(function() {
        // 1. 获取div当前的位置
        var current = element.offsetLeft;
        // 每次移动的距离 正负之分 +10（往右）
        //  -10（往左运动）
        var step = current < target ? num : -num;
        // console.log(step);

        if (Math.abs(target - current) < Math.abs(step)) {
            // 到终点
            clearInterval(element.timerId);

            // 当清除定时器的时候，元素可能并没有移动到终点，直接去终点
            element.style.left = target + "px";
        } else {
            // 没到终点，才需要移动

            // 2. 在当前位置上移动一段距离 （10）
            current += step;
            // 3. 修改div的位置
            element.style.left = current + "px";
        }
    }, 15)
}
