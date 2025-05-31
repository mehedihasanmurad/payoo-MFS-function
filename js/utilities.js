/*
* common shared functions here
*/

//no parameter
// function getInputFiledValueById() {
//     const addMoneyInput = document.getElementById("add-money-input").value;
//     return addMoneyInput;
// }

//with parameter
function getInputFiledValueById(id) {
    const inputFieldValue = document.getElementById(id).value;
    return inputFieldValue;
}