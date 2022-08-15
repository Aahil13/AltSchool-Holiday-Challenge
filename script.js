"use strict";

const input = document.querySelector(".number-input");
const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);

  function detect_number(phone) {
    if (phone != "") {
      if (phone.length > 3) {
        let previx = phone.substring(0, 4);
        console.log(previx);
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
          return console.log("MTN");
        } else if (
          previx == "0805" ||
          previx == "0705" ||
          previx == "0905" ||
          previx == "0807" ||
          previx == "0815" ||
          previx == "0811" ||
          previx == "0905"
        ) {
          return console.log("GLO");
        } else if (
          previx == "0809" ||
          previx == "0909" ||
          previx == "0817" ||
          previx == "0818"
        ) {
          return console.log("9MOBILE");
        } else if (
          previx == "0802" ||
          previx == "0902" ||
          previx == "0701" ||
          previx == "0808" ||
          previx == "0708" ||
          previx == "0812"
        ) {
          return console.log("AIRTEL");
        } else {
          return console.log("UNKNOWN");
        }
      }
    } else {
      return "UNKNOWN";
    }
  }
  detect_number(input.value);
});
