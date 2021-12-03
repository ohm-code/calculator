//store all information in an array - calculationarray 
//have secondary array for memory function
//addeventlistener for click on all number keys to add to temporary number storage
//addeventlistener for click on all operation calculation buttons to send temporary number to main array and include function as it's own array item

function calculate(){
    //have a current value store that is equal to array[0]
    //perform function stored in array[n] with currentvaluestore and array[n+1]as parameters
    //iterate by i+2
}; //addevent listener on click to the equals button 

function add(currentvaluestore, nextnumber){
    console.log(currentvaluestore+nextnumber);
    return currentvaluestore+nextnumber;
};
function subtract(){
    console.log(currentvaluestore-nextnumber);
    return currentvaluestore-nextnumber;
};
function multiply(){
    console.log(currentvaluestore*nextnumber);
    return currentvaluestore*nextnumber;
};
function divide(){
    console.log(currentvaluestore/nextnumber);
    return currentvaluestore/nextnumber;
};
function memory(){
    //have memoryarray = calculationarray 
};
function clear(){
    //set calculation array to []
    //if calculation array is [], set memoryarray to []
};
function del(){
    //pop last number off temporary storage
    //if temporary storage "", pop last item off calculation array and put that item in temp memory
};
