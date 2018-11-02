function showPic(whichPic){
	console.log(whichPic)
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
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