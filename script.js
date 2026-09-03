console.log("System Online: Welcome to Fortune Private Pool and Events Place");
const myButton = document.getElementById("submit-btn");

myButton.addEventListener("click", function() {
  const userName = document.getElementById("name").value;
  const tourChoice = document.getElementById("tour-type").value;
  const resultBox = document.getElementById("booking-result");

  // Validation Check: Is the name box empty?
  if (userName === "") {
    resultBox.innerText = "Please enter your full name before submitting.";
    resultBox.style.color = "red"; // Change text to red for an error
    return; // Stops the code from running further
  }

  let totalPrice = 0;

  if (tourChoice === "day") {
    totalPrice = 3500;
  } else if (tourChoice === "night") {
    totalPrice = 6500;
  }

  const message = "Thank you, " + userName + "! Your " + tourChoice + " tour is reserved. Total: ₱" + totalPrice;

  // Reset color to primary theme and display message
  resultBox.style.color = "#005f73";
  resultBox.innerText = message;
});