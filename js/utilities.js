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
    const inputNumberValue = parseFloat(inputFieldValue);
    return inputNumberValue;
}

function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumberValue = parseFloat(textValue);
    return textNumberValue;
}


function showFeaturesById(id) {
    //sobaike hidden kore debo prothom a
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transaction-section").classList.add("hidden");
    //show all features by id
    document.getElementById(id).classList.remove("hidden")
}