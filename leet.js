
//leet question 1

var createCounter = function(n) {
  let count=n
      return function() {
          return n++
      };
  };
  


//leet question 2

let arr = [1,2,3]
let filter=function(arr,f){
        let dub=[]
        for (let i=0;i<arr.length;i++){
            if(f(arr[i],i)){
                dub.push(arr[i])  
            }
        }
        return dub
    }
let newarr=filter(arr,function firstIndex(n, i) { return i === 0; })
console.log(newarr)

//leet question 3


let narr=function(ar,fn){
    let nli=ar.map(fn)
    return nli
}
let ar=[1,2,3]
let newList=narr(ar,function plusone(n) { return n + 1; })
console.log(newList)

//leet question 3


function bj(obj){
  if (Object.keys(obj).length===0||obj.length===0){
    return true
  }
  return false
}
obj = [4,2]

console.log(bj(obj))

//leet code 4

var map = function(arr, fn) {
  let dub=[]
    for (let i=0;i<arr.length;i++){
        dub.push(fn(arr[i],i))
    }
    return dub
};
