// 多个函数在页面加载时执行，如果逐一绑定到onload事件上，它们当中只有最后那个才会被执行，
// 可以先创建一个匿名函数来容纳多个函数，然后把那个匿名函数绑定到onload事件上
function addLoadEvent(func){//参数：打算在页面加载完毕时执行的函数的名字
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function()
        {
            oldonload();
            func();
        }
    }
}