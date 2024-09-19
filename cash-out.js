document.getElementById("outBtn").addEventListener("click", function (event) {
  event.preventDefault();
  let inputOutAmount = document.getElementById("inputOutAmount");
  let valueOutAmount = inputOutAmount.value;
  let inputOutPin = document.getElementById("inputOutPin");
  let valueOutPin = inputOutPin.value;
  if (valueOutPin === "1234") {
    let money = document.getElementById("money").innerText;
    document.getElementById("money").innerText =
      Number(money) - Number(valueOutAmount);
  } else {
    alert("Please enter your valid pin!!");
  }
  ///
});
