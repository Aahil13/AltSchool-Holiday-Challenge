"use strict";

const input = document.querySelector(".number-input");
const button = document.querySelector(".btn");
const nameInput = document.querySelector(".name-text");

button.addEventListener("click", (e) => {
  e.preventDefault();
  detectNumber(input.value);
});

function detectNumber(phoneNumber) {
  if (phoneNumber != "") {
    if (phoneNumber.length > 3) {
      let previx = phoneNumber.substring(0, 4);
      const capitalizedName = nameInput.value[0].toUpperCase() + nameInput.value.slice(1);
      if (
        previx == "0803" ||
        previx == "0703" ||
        previx == "0903" ||
        previx == "0806" ||
        previx == "0706" ||
        previx == "0813" ||
        previx == "0810" ||
        previx == "0814" ||
        previx == "0816"
      ) {
        return alert(`Hurray, ${capitalizedName} your network provider is Mtn`);
      } else if (
        previx == "0805" ||
        previx == "0705" ||
        previx == "0905" ||
        previx == "0807" ||
        previx == "0815" ||
        previx == "0811" ||
        previx == "0905"
      ) {
        return alert(`Hurray, ${capitalizedName} your network provider is Glo`);
      } else if (
        previx == "0809" ||
        previx == "0909" ||
        previx == "0817" ||
        previx == "0818"
      ) {
        return alert(
          `Hurray, ${capitalizedName} your network provider is 9Mobile`
        );
      } else if (
        previx == "0802" ||
        previx == "0902" ||
        previx == "0701" ||
        previx == "0808" ||
        previx == "0708" ||
        previx == "0812"
      ) {
        return alert(
          `Hurray, ${capitalizedName} your network provider is Airtel`
        );
      } else {
        return alert(`${capitalizedName} please input a valid Nigerian number`);
      }
    }
  }
}
