"use strict";

////////////variables
const input = document.querySelector(".number-input");
const button = document.querySelector(".btn");
const nameInput = document.querySelector(".name-text");
const networkImg = document.querySelector(".network-img");

////////////Event that listens to button click
button.addEventListener("click", (e) => {
  e.preventDefault();
  detectNumber(input.value);
});

// ////////Object that holds the prefixs of all network numbers in Nigeria
const prefix = {
  mtnPrefix: [
    "0803",
    "0703",
    "0903",
    "0806",
    "0706",
    "0813",
    "0810",
    "0814",
    "0816",
  ],
  airtelPrefix: ["0802", "0902", "0701", "0808", "0708", "0812"],
  gloPrefix: ["0805", "0705", "0905", "0807", "0815", "0811", "0905"],
  etisalatPrefix: ["0809", "0909", "0817", "0818"],
};


//////////////Triggers when the button is clicked
function detectNumber(phoneNumber) {
  if (phoneNumber != "") {
    if (phoneNumber.length > 3) {
      const capitalizedName =
        nameInput.value[0].toUpperCase() + nameInput.value.slice(1);

      function handleValidation(networkProvider, networkName) {
        networkProvider.forEach((e) => {
          if (phoneNumber.substring(0, 4) == e) {
            alert(
              `Hurray, ${capitalizedName} your network provider is ${networkName}`
            );
            networkImg.src = `./img/${networkName}.svg`;
          }
        });
      }
      handleValidation(prefix.airtelPrefix, `Airtel`);
      handleValidation(prefix.gloPrefix, `Glo`);
      handleValidation(prefix.mtnPrefix, `Mtn`);
      handleValidation(prefix.etisalatPrefix, `9mobile`);
    }
  }
}
