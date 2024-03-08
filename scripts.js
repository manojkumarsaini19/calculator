let currentInput = 0;
const displayElement = document.getElementById('display');
function handleButtonClick(event){
    const buttonValue = event.target.innerText;
    console.log(buttonValue);
    if(buttonValue==='=' || buttonValue==='C'){
        calculate();
} else if (buttonValue ==='C'){
    clearDisplay();
}else{
    appendToDisplay(buttonValue);
}
}
  
function appendToDisplay(value){
    if( currentInput===0){
        currentInput=value;
    }else{
        currentInput+= value;
    }
    updateDisplay();
    }
    function updateDisplay(){
        displayElement.innerText=currentInput;
    } 
    function clearDisplay(){
        currentInput='0';
    }
    function calculate(){
        try{
            currentInput=eval(currentInput).toString();
            updateDisplay()
        }catch (error){
            currentInput='Error';
            updateDisplay();
        }
        }
    
    
