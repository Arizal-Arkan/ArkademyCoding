function gambar(input){
  var j;
  var i;
  var output;
  //Loop untuk baris
  for(j = 0; j < input; j++){
    output = "";
    
  	//Loop untuk kolom
  	for(i = 0; i < input; i++){
      
      if(i == j || i == Math.abs(j - input + 1))
        output += " X ";
      else 
        output += " = ";
    }
    
    console.log(output);
  }
}
//Untuk memanggil fungsi di atas
gambar(7);
