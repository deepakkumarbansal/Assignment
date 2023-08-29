let submitBtn = document.getElementById("submit");
let resetBtn = document.getElementById("reset");
let resultSet = new Set();
let displayArea = document.getElementById("displayArea");
let input = document.getElementById("input");
submitBtn.addEventListener("click",displayResult);
function displayResult(){
    resetBtn.style.display = "block";
    submitBtn.style.display = "none";
    let inputValue = input.value;
    let regEx = /^\d*$/g;
    let isAllNumbers = regEx.test(inputValue);
    if(!isAllNumbers){
        inputValue = inputValue.replace(/\D/g,""); // remove all non-digit values
    }
    [...inputValue].forEach((element)=>{
        resultSet.add(parseInt(element)); //to convert string to number and add to resultSet
    });
    //display the result
    let resultText = document.createElement("p");
    resultText.style.fontWeight = 800;
    resultText.style.textDecoration = "underline";
    resultText.textContent = "Unique digits:"
    let uniqueCount = document.createElement("span");
    uniqueCount.textContent =" "+ [...resultSet].length;
    resultText.appendChild(uniqueCount);
    displayArea.appendChild(resultText);
    [...resultSet].forEach((item)=>{
        let list = document.createElement("li");
        list.textContent = item;
        displayArea.appendChild(list);
    })
}

resetBtn.addEventListener("click",()=>{
    resetBtn.style.display = "none";
    submitBtn.style.display = "block";
    displayArea.innerHTML = "";
    input.value = "";
})