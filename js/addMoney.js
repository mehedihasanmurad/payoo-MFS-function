//alada jaygay function ache oitake aikhane call kore ba parameter kore man pawya jay

document.getElementById("add-money-btn").addEventListener("click", function () {
    const addMoneyInput = getInputFiledValueById("add-money-input");
    const pinNumberInput = getInputFiledValueById("pin-number-input");

    //validation check
    if (isNaN(addMoneyInput)) {
        alert("please correct something");
        return;
    }

    //wrong way to this system
    if (pinNumberInput === 1122) {
        const balance = getTextValueById("account-balance");
        const updateBalance = balance + addMoneyInput;
        document.getElementById("account-balance").innerText = updateBalance;

        //add to transaction history
        const p = document.createElement("p");
        p.innerText = `Added: ${addMoneyInput} tk/= and Total Balance: ${updateBalance}`
        document.getElementById("transaction-container").appendChild(p);
    }
    else {
        alert("Failed  to money add.")
    }
})