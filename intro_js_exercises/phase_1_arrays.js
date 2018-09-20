Array.prototype.uniq = function() {
    const result = [];
    this.forEach( function(el){
       if(!result.includes(el)){
            result.push(el);
        } 
    });
    return result;
}

Array.prototype.two_sum = function  () {
  const result = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
}

Array.prototype.transpose = function () {
  const result = [];
  for(let rowN = 0; rowN < this.length; rowN++) {
    let row = [];
    
    for(let colN = 0; colN < this[0].length; colN++) {
      row.push(this[colN][rowN]);
      
    }
      result.push(row);
  }
    return result;
}