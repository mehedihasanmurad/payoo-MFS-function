
document.getElementById("cash-out-btn").addEventListener("click", function () {
    const cashOutMoney = getInputFiledValueById("cash-out-input");
    const cashOutPin = getInputFiledValueById("pin-number-cash-out-input");
    //validation check
    if (isNaN(cashOutMoney)) {
        alert("please correct something");
        return;
    }

    // wrong way to this system
    if (cashOutPin === 1122) {
        const balance = getTextValueById("account-balance");
        //validation check
        if (cashOutMoney > balance) {
            alert("apnar account a taka nai");
            return;
        }
        const newBalance = balance - cashOutMoney;
        document.getElementById("account-balance").innerText = newBalance;

        //show transaction history
        const div = document.createElement("div");
        div.classList.add("bg-yellow-300");
        div.innerHTML = `
            <h2 class="text-3xl font-bold">Cash Out Money</h2>
            <p>${cashOutMoney} withdraw and new Balance ${newBalance}</p>
        `
        document.getElementById("transaction-container").appendChild(div);
    }
    else {
        alert("failed to the money.")
    }
})