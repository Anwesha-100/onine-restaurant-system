document.addEventListener("DOMContentLoaded", function() {
    const paymentMethodSelect = document.getElementById("payment-method");
    const creditCardDetails = document.getElementById("credit-card-details");

    paymentMethodSelect.addEventListener("change", function() {
        const selectedPaymentMethod = paymentMethodSelect.value;

        if (selectedPaymentMethod === "credit-card") {
            creditCardDetails.style.display = "block";
        } else {
            creditCardDetails.style.display = "none";
        }
    });

    const paymentForm = document.getElementById("payment-form");

    paymentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const selectedPaymentMethod = paymentMethodSelect.value;
        const cardNumber = document.getElementById("card-number").value;
        const expDate = document.getElementById("exp-date").value;

        // Implement payment processing logic here based on the selected payment method and card details
        if (selectedPaymentMethod === "credit-card") {
            console.log("Processing credit card payment...");
            console.log("Card Number: " + cardNumber);
            console.log("Expiration Date: " + expDate);
        } else if (selectedPaymentMethod === "cash") {
            console.log("Processing cash payment...");
        } else if (selectedPaymentMethod === "paypal") {
            console.log("Processing PayPal payment...");
        }
    });
});