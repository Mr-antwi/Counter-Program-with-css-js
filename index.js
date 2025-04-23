const textInput = document.getElementById('textInput');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const output = document.getElementById('output');

let temp;

function tempConvert() {
    if(toFahrenheit.checked){
        temp = Number(textInput.value);
        temp = (temp * 9 / 5) + 32;
        output.textContent = temp.toFixed(2) + "°F";
    }

    else if(toCelsius.checked){
        temp = Number(textInput.value);
        temp = (temp - 32) * 9 / 5
        output.textContent = temp.toFixed(2) + "°C";
    }

    else{
        output.textContent = "Select a unit"
    }
}