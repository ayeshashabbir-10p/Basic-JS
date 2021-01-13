var array=[];
function rangeOfNumbers(startNum, endNum) {
  
    if (startNum>endNum){
    return [startNum];
    }
  

    else{
  
      
      array.push(startNum);
      startNum++
      
      rangeOfNumbers(startNum,endNum);
      console.log(array);
    
    }
   
  };
  rangeOfNumbers(5,10);