function calculate() {
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const discount = parseFloat(document.getElementById('discount').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    
    const importValue = price * quantity;
    const totalPaymentSoles = importValue - (importValue * (discount / 100));
    const totalPaymentDollars = totalPaymentSoles / exchangeRate;
    const message = totalPaymentSoles < 600 ? "Pagar en una Cuota" : "Pagar en varias Cuotas";
    
    document.getElementById('import').textContent = `Import: S/ ${importValue.toFixed(2)}`;
    document.getElementById('totalSoles').textContent = `Total Payment (S/): S/ ${totalPaymentSoles.toFixed(2)}`;
    document.getElementById('totalDollars').textContent = `Total Payment (USD): $${totalPaymentDollars.toFixed(2)}`;
    document.getElementById('message').textContent = message;
}
