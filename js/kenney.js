function toggle_visibility(cl){
	
	var elements = document.getElementsByClassName(cl);
	
	for(var i = 0; i < elements.length; i++){ elements[i].classList.toggle("hidden"); }
	
}