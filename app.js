let input = document.getElementById("input");
let displayValue = "";
let btns = document.querySelectorAll(".calc-btn");
console.log(btns);

for (item of btns) {
  item.addEventListener("click", (event) => {
    btnText = event.target.innerText;
    // console.log(btnText);

    if (btnText === "X") {
      btnText = "*";
      displayValue += btnText;
      input.innerHTML = displayValue;
    } else if (btnText === "AC") {
      displayValue = "";
      input.innerHTML = displayValue;
    } else if (btnText === "=") {
      input.innerHTML = eval(displayValue);
    } else if (btnText === "DEL") {
      let displayLength = displayValue.length;
      displayValue = displayValue.slice(0, displayLength - 1);
      input.innerHTML = displayValue;
    } else {
      displayValue += btnText;
      input.innerHTML = displayValue;
    }
  });
}
