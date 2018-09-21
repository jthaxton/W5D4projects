

Array.prototype.range = function  (start, end) {
  if (start === end) {
    return [this[start]];
  }
  return [this[start]].concat(this.range(start + 1, end));
}

Array.prototype.sumRec = function  () {
  if(this.length === 1){
    return this[0];
  }
  return this.shift() + this.sumRec();
  
}

function exponent1 (base, exp) {
  if(exp === 0) {
    return 1;
  }
  
  return base * exponent1(base, exp - 1);
}


function exponent2(base, exp) {

  if(exp === 0) {
    return 1;
  }
  
  if(exp === 1) {
    return base ;
  }
  
  if(exp % 2 === 0) {
    return exponent2(base, exp / 2) ** 2;
  } 

  return base * (exponent2(base, (exp - 1) / 2) ** 2);
  
}

function fib(n) {
  if(n === 1) {
    return [1];
  }
  if(n === 2) {
    return [1,1];
  }
  return fib(n - 1).concat(fib(n - 1)[fib(n - 1).length - 1] + fib(n - 1)[fib(n - 1).length - 2]);
}

function deepDup(arr) {
  return arr.map(el => el instanceof Array ? deepDup(el) : el );
}


function bsearch(arr, target){
  if (arr === []) {
    return false;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid + 1, arr.length);
  if (target === arr[mid]) {
    return mid;
  }
  else if (target < arr[mid]) {
    return bsearch(left, target);
  }
  else {
    return bsearch(right, target) + left.length + 1;
  }
  
  
  
}

function mergesort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  
  return merge(mergesort(left), mergesort(right));
  
}

function merge(arr1, arr2) {
  let merged = [];
  while (arr1.length != 0 && arr2.length != 0) {
    if (arr1[0] <= arr2[0] ) {
      merged.push(arr1.shift());
    }
    else {
      merged.push(arr2.shift());
    }
  }
  return merged.concat(arr1, arr2);
}

function subsets(arr){
  if (arr.length === 1) {
    return [arr];
  }
  
  subs = subsets(arr.slice(1, arr.length));
  return subs.map(el => el.concat([arr[0]])).concat(subs, [[arr[0]]]);
}