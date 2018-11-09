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
// 编写一个insertAfter函数
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement)
    }else{
        parent.insertBefore(newElement,parent.nextSibling)
    }
}
function preparPlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imageGallery')) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/lock.jpg");
    placeholder.setAttribute("alt","my img gallery");
    var desc = document.createElement("p");
    desc.setAttribute("id","description");
    var desctext = document.createTextNode("Choose an image");
    desc.appendChild(desctext);
    // document.body.appendChild(placeholder);//HTML-DOM
    // document.body.appendChild(desc);//HTML-DOM
    var gall = document.getElementById("imageGallery");
    // gall.parentNode.insertBefore(placeholder,gall);
    // gall.parentNode.insertBefore(desc,gall);
    insertAfter(placeholder,gall);
    insertAfter(desc,gall);
}
function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imageGallery")) return false;
    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        links[i].onclick = function(){
            return !showPic(this);
        }
    }
}
function showPic(whichPic){
	// console.log(whichPic)
    if(!document.getElementById("placeholder")) return false;
	var source = whichPic.getAttribute("href");//var source = whichPic.href; //HTML-DOM
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);//placeholder.src = source //HTML-DOM
	if(document.getElementById("description")){
        var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        var description = document.getElementById("description");
        // console.log(description.firstChild.nodeType);
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
addLoadEvent(preparPlaceholder);
addLoadEvent(prepareGallery);
