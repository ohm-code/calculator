//store all information in an array - calculationarray 
//have secondary array for memory function
//addeventlistener for click on all number keys to add to temporary number storage
//addeventlistener for click on all operation calculation buttons to send temporary number to main array and include function as it's own array item
let display = "";//store display as key entry string replaceChild() to the div.display on click
let memory = "";
let autosave = "";
let justCalculated = false; //to keep track of if the equals sign was the last key pressed

const displayRef = document.querySelector('.display');
const memoryRef = document.querySelector('.memorydisplay');
const autosaveRef = document.querySelector('.autosave');
const button = document.querySelectorAll('button');
const numericalButtons = document.querySelectorAll('.numericalButtons');
const calculationButtons = document.querySelectorAll('.calculationButtons');
const operators = ['*','/','+','-'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const nonDisplayButtons = ['=','M','M+','Cl','Del'];
const equalsButton = document.getElementById('calculate');
const memoryButtonCall = document.getElementById('memorybutton');
const memoryButtonAdd = document.getElementById('memorybutton+')
const deleteButton = document.getElementById('deletebutton');
const clearButton = document.getElementById('clearbutton');
const autosaveButton = document.getElementById('autosavebutton');
const helpButton = document.getElementById ('helpbutton');


initializeButtons()


function initializeButtons(){
    for (let i = 0; i<numericalButtons.length;i++){
        numericalButtons[i].addEventListener('click',appendDisplay)
    }
    for (let x = 0; x<calculationButtons.length;x++){
        calculationButtons[x].addEventListener('click',appendDisplay)    
    }
    //add event listeners for memory, memory+, cl, del 
    equalsButton.addEventListener('click',calculate);
    deleteButton.addEventListener('click', del);
    clearButton.addEventListener('click', clear);
    memoryButtonCall.addEventListener('click',memoryCall);
    memoryButtonAdd.addEventListener('click',memoryAdd);
    autosaveButton.addEventListener('click',autosaveCall);
}
    
function calculate(){
    let calculationArray = display.split(' ');
    let calcArrayHolder = []; // temporary hold for calculating higher operations first 
    for (let i = 1; i<calculationArray.length-1; i+=2){ 
        switch(calculationArray[i]){  // iterate through array calculting higher order operations mult and div first and storing everything in calcArrayHolder
            case '*':
                calcArrayHolder.push(multiply(calculationArray[i-1],calculationArray[i+1]));
                console.log(calcArrayHolder);
                break;
            case '/':
                calcArrayHolder.push(divide(calculationArray[i-1],calculationArray[i+1]));
                console.log(calcArrayHolder);
                break;         
            case '+':
                calcArrayHolder.push(calculationArray[i-1],calculationArray[i]);
                console.log(calcArrayHolder);
                break;
            case '-':
                calcArrayHolder.push(calculationArray[i-1],calculationArray[i]);
                console.log(calcArrayHolder);
                break;                      
        }}
    let calculatedValue = parseFloat(calcArrayHolder[0]); //set initial value for calculateValue as first number
    for (let i = 1; i<calcArrayHolder.length-1; i+=2){ //iterate through lower order operations add and subtract
        switch(calcArrayHolder[i]){
            case '+':
                calculatedValue = add(calculatedValue,calcArrayHolder[i+1]);
                console.log(calculatedValue);
                break;
            case '-':
                calculatedValue = subtract(calculatedValue,calcArrayHolder[i+1]);
                console.log(calculatedValue);
                break;   
    }}
    display = calculatedValue; //set the display to the final calculatedValue
    correctFloatIssues(); //to correct the issues with float numbers calculating incorrectly due to nature of numbers in float
    autosave = display; //store display value in autosave
    updateDisplay();
    updateAutosave();
    justCalculated = true; //toggle justCalculated value
}; 

function appendDisplay() {
    if (justCalculated == true){
        justCalculated = false;
        if (numbers.includes(this.textContent)){
            console.log("caught!!@")
            display = "";
    }};
    if (operators.includes(this.textContent)){  //include space before and after operator added to string. Later used to split to array by " "
        if ((this.textContent == '-')&&(display == "")){
            console.log("- success!")
            display+= this.textContent;
            updateDisplay();
            return;
        }
        else {display += ' ' + this.textContent + ' '};
    } else{
        display += this.textContent; //numbers just get added to display string

    }
    updateDisplay();
    }

function updateDisplay() {displayRef.textContent = display}; //function to call to update display 
function updateMemoryDisplay() {memoryRef.textContent = memory}; 
function updateAutosave() {autosaveRef.textContent = autosave}; 
function autosaveCall() {display = autosave; updateDisplay()};

function correctFloatIssues(){
   display = Math.round((display*10000).toFixed(4))/10000;
   console.log(display);
}
function add(currentvaluestore, nextnumber){
    console.log(parseFloat(currentvaluestore)+parseFloat(nextnumber));
    return parseFloat(currentvaluestore)+parseFloat(nextnumber);
};
function subtract(currentvaluestore, nextnumber){
    console.log(parseFloat(currentvaluestore)-parseFloat(nextnumber));
    return parseFloat(currentvaluestore)-parseFloat(nextnumber);
};
function multiply(currentvaluestore, nextnumber){
    console.log(parseFloat(currentvaluestore)*parseFloat(nextnumber));
    return parseFloat(currentvaluestore)*parseFloat(nextnumber);
};
function divide(currentvaluestore, nextnumber){
    console.log(parseFloat(currentvaluestore)/parseFloat(nextnumber));
    return parseFloat(currentvaluestore)/parseFloat(nextnumber);
};
function memoryAdd(){
    memory = display; //have memoryarray = calculationarray 
    updateMemoryDisplay();
};
function memoryCall(){
    display = memory;
    updateDisplay();
    updateMemoryDisplay();
}
function clear(){
    display = "";
    updateDisplay();
    //if calculation array is [], set memoryarray to []
};

function del(){
    if(display.charAt(display.length-1)==" "){
        console.log("del space success");
        display = display.slice(0,-2)
    }
    else{display = display.slice(0,-1)};
    updateDisplay()
    //pop last number off temporary storage
    //if temporary storage "", pop last item off calculation array and put that item in temp memory
};


