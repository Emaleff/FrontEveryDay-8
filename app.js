const cost1 = document.getElementById("val1");
const cost2 = document.getElementById("val2");
const cost3 = document.getElementById("val3");
const val1 = +cost1.textContent;
const val2 = +cost2.textContent;
const val3 = +cost3.textContent;
const persent = 0.15;
const fullVall = 1;
const monthsInYear = 12;

function valInYear(val) {
  return (val * monthsInYear * (fullVall - persent)).toFixed();
}
const val1InYear = valInYear(val1);
const val2InYear = valInYear(val2);
const val3InYear = valInYear(val3);
console.log(val1InYear);
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    cost1.textContent = val1InYear;
    cost2.textContent = val2InYear;
    cost3.textContent = val3InYear;
  } else {
    cost1.textContent = val1;
    cost2.textContent = val2;
    cost3.textContent = val3;
  }
});
