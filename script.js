const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
    billValue = billInput.value;
    tipValue = tipInput.value;
    totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener('click', calculateTotal);

