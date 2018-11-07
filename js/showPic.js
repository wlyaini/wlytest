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
        if(description.firstChild.nodeValue == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
function popUp(winURL){
	window.open(winURL,"popup","width=320,height=480");
}
window.onload = prepareLinks;
function prepareLinks(){
	if(!document.getElementsByTagName) return false; //如果你不理解这个方法，请离开
	var links = document.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++){
		if(links[i].getAttribute("class") == "popup"){
			links[i].onclick = function(){
				popUp(this.getAttribute("href"));
				return false;
			}
		}
	}
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
function addLoadEvent(func){
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
addLoadEvent(prepareGallery)