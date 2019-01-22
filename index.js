function break0ut(array, changeValue, stopValue){
  for(let i = 0; i< array.length;i++){
   if(array[i]!==stopValue){
  array.splice([i],changeValue)
}
 else {
   break
 }
 return array
 }
}

