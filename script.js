const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
addEventListener("click", convert);
function convert(){
    if(toFahrenheit.checked){
        temp = (parseFloat(textBox.value) * 9/5) + 32;
        result.textContent = temp.toFixed(2) + " °F";
    }
else if(toCelsius.checked){
        temp = (parseFloat(textBox.value) - 32) * 5/9;
        result.textContent = temp.toFixed(2) + " °C";
    } 
else{
result.textContent = "Select a unit";
}
}
