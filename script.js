function shortcut(s1, s2) {
	if(s1.length==0 || s2.length==0){
		return "";
	}
	return s1[0]+s2[0];
	
}

//Do not change the code below
var s1 = prompt("Enter s1:");
var s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));

