function convertCurrency() {
    const amount = parseFloat(document.getElementById('amountInput').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const exchangeRate = 80;

    const convertedAmount = (amount * exchangeRate).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}
