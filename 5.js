function minMax (array){
    var min = array[0];
    var minIndex = 0;
    var i;
    var y;
    
    for(i = 1; i < array.length; i++){
        
    	if(min > array[i]){
        	min = array[i];
            minIndex = i;
        }
    }
    
    var max = array[minIndex];
    
    for(y = minIndex; y<array.length; y++){
    	if(max < array[y]){
        	max = array[y];
        }
    
    }
    return [min,max];
}
//Contoh pemanggilan
minMax(['f','a','b','c','d']);
