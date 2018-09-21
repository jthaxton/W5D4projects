Array.prototype.bubbleSort = function  () {
  // let sorted = false;
  for(let i = 0; i < this.length; i++) {
    // let sorted = true;
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] > this[j] ) {
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
        // sorted = false;
      }
    }
  }
  return this;
}

String.prototype.substrings = function  () {
  let subs = [];
  
  for(let i = 0; i < this.length; i++) {

    for(let j = i + 1; j < this.length; j++) {
      subs.push(this.slice(i,j));

      
    }
  }
  return subs;
}