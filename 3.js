function charCount(source, searched){
	var i;	
  	var counter=0;
 	for(i = 0; i<source.length; i++){
    	if(source.charAt(i) == searched){
         	counter++;
        }
    
    }
	return counter;
}
// Contoh pemanggilan
charCount("arizal arkan", "a");
