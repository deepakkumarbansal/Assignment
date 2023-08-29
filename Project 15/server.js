let array = [1,5,9,7,5,3,2,8,4,6];

let minAndMax = array =>{
    return {
        max: Math.max(...array),
        min: Math.min(...array)
    }
}

let obj = minAndMax(array);
console.log(obj);
