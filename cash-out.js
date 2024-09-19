document.getElementById("outBtn").addEventListener("click", function (event) {
  event.preventDefault();

  let inputOutAmount = document.getElementById("inputOutAmount");
  let valueOutAmount = inputOutAmount.value;
  let inputOutPin = document.getElementById("inputOutPin");
  let valueOutPin = inputOutPin.value;
  // let outDemo = document.getElementById("outDemo");
  if (valueOutPin === "1234") {
    let money = document.getElementById("money").innerText;
    document.getElementById("money").innerText =
      Number(money) - Number(valueOutAmount);
  } else {
    let outDemo = document.getElementById("outDemo");
    outDemo.innerText = "Invalid Pin!";
    outDemo.style.color = "red";
    outDemo.style.fontWeight = "bold";
    outDemo.style.fontSize = "12px";
  }
  document.getElementById("inputOutPin").addEventListener("click", function () {
    let outDemo = document.getElementById("outDemo");
    outDemo.style.visibility = "hidden";
  });
  inputOutAmount.value = "";
  inputOutPin.value = "";
});
