function toggleRTLPresence(){
	if(document.body.classList.contains("rtl")){
		document.body.classList.remove("rtl");
		return "";
	} else {
		document.body.classList.add("rtl");
		return "rtl";
	}	
}