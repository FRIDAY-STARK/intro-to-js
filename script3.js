function genCheck(x){
	if(x<=1981 && x>=1965){
		alert("Generation X");
	}else if(x<=1996){
		alert("Generation Y");
	}else if(x<=2010){
		alert("Generation Z");
	}else if(x<=2025){
		alert("Gen Alpha");
	}else{
		alert("Please enter any year number in 1965-2025.")
	}
}

genCheck(1970);