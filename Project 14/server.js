let array = [1,2,3,4,5];
let extractPerticular = (array)=>{
    const [first,second,...rest] = array;
    const last = rest.pop();
    return [first, second, last];
}
let values = extractPerticular(array);
console.log(`first: ${values[0]}, second: ${values[1]}, third: ${values[2]}`);