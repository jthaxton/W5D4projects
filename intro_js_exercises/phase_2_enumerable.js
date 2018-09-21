Array.prototype.myEach = function(callback) { 
  for(let i = 0; i < this.length; i++){
    callback(this[i]);
  }
}
  
Array.prototype.myMap = function(callback) {
  const res = [];
   for(let i = 0; i < this.length; i++){
    res.push(callback(this[i]));
  }
  return res;
}
  
    
Array.prototype.myReduce = function(callback, acc) {
  acc = acc || this[0];
  for(let i = 0; i < this.length; i++){
    acc = callback(acc, this[i]);
  }
  return acc;
}