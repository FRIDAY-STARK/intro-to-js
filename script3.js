function genCheck(x){
	if(x<1965){
		alert("Please enter any year number in 1965-2025.")
	}
	else if(x<=1981){
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

genCheck(1921);
genCheck(1970);
genCheck(1990);
genCheck(2002);
genCheck(2023);
genCheck(2077);