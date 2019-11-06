"use strict";
const picker = new Picker(document.querySelector(".js-date-picker"), {
  format: "MMM D, YYYY",
  text: {
    title: "Pick a date"
  }
});
picker();
