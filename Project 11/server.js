let form = document.getElementById("form");
form.addEventListener("submit",submitForm);

function submitForm(event){
    event.preventDefault();
    let givenString = document.getElementById("input").value;
    document.getElementById("input").value = "" // Nothing will be display on textArea after submit
    let Btn = document.getElementById("submit")
    Btn.innerText = "Clear Result"
    function count(givenString){
        let array = [...givenString]; // array make but repeated values included
        let myMap = new Map();
        array.forEach((arrayItem)=>{
            if(myMap.has(arrayItem)){
            let x = myMap.get(arrayItem);
            x++;
            myMap.set(arrayItem,x);
            }
            else{
            myMap.set(arrayItem,1);
            }
        });
        return myMap
    }
    
    let myMap = count(givenString);
    console.log(myMap);
    displayArea = document.getElementById("result");
    [...myMap].forEach((item)=>{
        list = document.createElement("li");
        if(item[0] == " "){
            item[0] = "'space'";
        }
        list.textContent = item[0] + " : " + item[1];
        displayArea.appendChild(list);
    })
    // let lists = document.querySelectorAll("li");
    Btn.addEventListener("click",()=>{
        // lists.forEach((list)=>displayArea.removeChild(list));
        displayArea.innerHTML = ""
    })
}



