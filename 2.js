function random (baris) {
	var characters = "0123456789abcdefghijklmnopqrstuvwxyz";
  	var result;
  	var hasil = [];
  
    for (var i = 0; i<baris; i++) {
 		result = "";
  		
        for ( var y = 0; y<32; y++) {
        	result += characters.charAt(Math.floor(Math.random() * characters.length))  
        }
    	hasil.push(result);
      
    }
 	return hasil;
}
//Contoh Pemanggilan
random(3);
