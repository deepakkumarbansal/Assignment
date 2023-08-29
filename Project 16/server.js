const person = {
    name : "Mithun",
    age :21,
    address : {
        street : "B8, Block B, Industrial Area.",
        city : "Sector 62, Noida",
        state : "Uttar Pradesh",
    }
};

function nameAndStreet(person){
    const {name, address:{street}} = person;
    return {name,street}
}
let x = nameAndStreet(person);
console.log(x);