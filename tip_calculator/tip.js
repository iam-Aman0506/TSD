let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");


function calculatedBill() {
    if (billAmountElement.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input.";
    } else if (percentageTipElement.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input.";
    } else {
        document.getElementById("errorMessage").textContent = "";
        let billAmountInput = parseInt(billAmountElement.value);
        let percentageTipInput = parseInt(percentageTipElement.value);
        let calculatedTip = (percentageTipInput / 100) * billAmountInput;
        document.getElementById("tipAmount").value = calculatedTip;
        let totalBill = calculatedTip + billAmountInput;
        document.getElementById("totalAmount").value = totalBill;

    }
}