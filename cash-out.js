document.getElementById("outBtn").addEventListener("click", function (event) {
  event.preventDefault();

  let inputOutAmount = document.getElementById("inputOutAmount");
  let valueOutAmount = inputOutAmount.value;
  let inputOutPin = document.getElementById("inputOutPin");
  let valueOutPin = inputOutPin.value;
  let outDemo = document.getElementById("outDemo");
  if (valueOutPin === "1234") {
    let money = document.getElementById("money").innerText;
    document.getElementById("money").innerText =
      Number(money) - Number(valueOutAmount);
    outDemo.innerText = "";
    outDemo.style.visibility = "hidden";
  } else {
    outDemo.innerText = "Invalid Pin!";
    outDemo.style.color = "red";
    outDemo.style.fontWeight = "bold";
    outDemo.style.fontSize = "12px";
    outDemo.style.visibility = "visible";
  }

  inputOutAmount.value = "";
  inputOutPin.value = "";
});
document.getElementById("inputOutPin").addEventListener("click", function () {
  let outDemo = document.getElementById("outDemo");
  outDemo.innerText = "";
  outDemo.style.visibility = "hidden";
});
