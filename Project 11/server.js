let Submitbtn = document.getElementById("submit");
let resetBtn = document.getElementById("reset")
let resultArea = document.getElementById("result");
let textArea = document.getElementById("input");
Submitbtn.addEventListener("click", displayResult);
function displayResult(){
    Submitbtn.style.display = "none";
    resetBtn.style.display = "block";
    let inputStringValue = textArea.value;
    let myMap = new Map();
    [...inputStringValue].forEach((item)=>{
        if(myMap.has(item)){
            value = myMap.get(item);
            myMap.set(item, ++value);
        }
        else{
            myMap.set(item,1);
        }
    });
    let resultHeading = document.createElement("p");
    resultHeading.style.fontWeight = 800;
    resultHeading.style.textDecoration = "underline";
    resultHeading.innerText = "Result:";
    resultArea.appendChild(resultHeading);
    [...myMap].forEach(element =>{
        let list = document.createElement("li");
        if(element[0] == " "){
            element[0] = "' '";
        }
        list.textContent = element[0] + " : " + element[1];
        resultArea.appendChild(list);
    })
}

resetBtn.addEventListener("click",clearResult);
function clearResult(){
    textArea.value = "";
    resultArea.innerHTML = "";
    resetBtn.style.display = "none";
    Submitbtn.style.display = "block";
}