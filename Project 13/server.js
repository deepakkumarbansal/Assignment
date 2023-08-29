let a = 5;
let b = 6;
[a,b] = swap(a,b)
function swap(){
    [b, a] = [...arguments];
    return [a,b]
}
console.log("a: "+ a);
console.log("b: "+ b);