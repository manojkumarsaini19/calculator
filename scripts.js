let currentInput ='0';
const displayElement = document. getElementById('display');
function handleButtonClick(event){
    const buttonVelue =event.target.innertext;
    if(buttonvalue==='=' || buttonValue==='C'){
        calculate();
} else if (buttonValue ==='C'){
    clearDisplay();
}else{
    appendTodisplay(buttonvalue);
}
}
  
function appendToDisplay(value){
    if( currentInput==='0'){
        currentInput=value;
    }else{
        currentInput+= value;
    }
    updateDisplay();
    }
    function updateDisplaydate(){
        displayElement.innerText=currentInput
    } 
    function clearDisplay(){
        currentInput='0';
    }
    function calculate(){
        try{
            currentInput=eval(currebtInput).toString();
            updateDisplay()
        }catch (error){
            currentInput='Error';
            updateDisplaydate();
        }
        }
    
    
