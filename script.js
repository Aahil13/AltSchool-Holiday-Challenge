"use strict";

const input = document.querySelector(".number-input");
const button = document.querySelector(".btn");
const nameInput = document.querySelector(".name-text");
const networkImg = document.querySelector(".network-img");

button.addEventListener("click", (e) => {
  e.preventDefault();
  detectNumber(input.value);
});

const previx = {
  mtnPrevix: [
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
  airtelPrevix: ["0802", "0902", "0701", "0808", "0708", "0812"],
  gloPrevix: ["0805", "0705", "0905", "0807", "0815", "0811", "0905"],
  etisalatPrevix: ["0809", "0909", "0817", "0818"],
};

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
      handleValidation(previx.airtelPrevix, `Airtel`);
      handleValidation(previx.gloPrevix, `Glo`);
      handleValidation(previx.mtnPrevix, `Mtn`);
      handleValidation(previx.etisalatPrevix, `9mobile`);
    }
  }
}
