const inputElement= document.getElementById("input")
const inputFrom= document.getElementById("from")
const inputTo= document.getElementById("to")
const inputBtn= document.getElementById("converter-btn")
const inputOutput= document.getElementById("output")
const inputMessage= document.getElementById("message")

function converter (){

    const fromValue = inputFrom.value 
    const toValue = inputTo.value 

    if(fromValue === toValue){
        inputOutput.value = inputElement.value;
        inputMessage.textContent="eu";
        return;
    }

    //converter a entrada para metros
    let metros;
    switch(fromValue){
        case "m":
            metros = inputElement.value;
            break;
        case "km":
            metros = inputElement.value * 1000;
            break;
        case "cm":
            metros = inputElement.value / 100;
            break;
        case "mm":
            metros = inputElement.value / 1000;
            break;
    }
    //converter para a unidade de saída
    let result;
    switch(toValue){
        case "m":
            result = metros;
            break;
        case "km":
            result = metros / 1000;
            break;
        case "cm":
            result = metros * 100;
            break;
        case "mm":
            result = metros * 1000;
            break;
    }

    //Exibir resultado no input
    inputOutput.value = result;

    //Exibir resultado na mensagem
    const fromLabel = inputFrom.options[inputFrom.selectedIndex].text;
    const toLabel = inputTo.options[inputTo.selectedIndex].text;

    const message =` ${inputElement.value} ${fromLabel} equivalem a  ${result} ${toLabel} `;
    inputMessage.textContent = message;
}


inputBtn.addEventListener("click",converter);