document.getElementById("addBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const inputAmount = document.getElementById("inputAmount");
  const amountValue = inputAmount.value;
  const inputPin = document.getElementById("inputPin");
  const pinValue = inputPin.value;
  let addDemo = document.getElementById("addDemo");
  if (pinValue === "1234") {
    let money = document.getElementById("money");
    let totalMoney = money.innerText;

    document.getElementById("money").innerText =
      Number(totalMoney) + Number(amountValue);
    addDemo.innerText = "";
    addDemo.style.visibility = "hidden";
  } else {
    addDemo.innerText = "Invalid Pin!";
    addDemo.style.color = "red";
    addDemo.style.fontWeight = "bold";
    addDemo.style.fontSize = "12px";
    addDemo.style.visibility = "visible";
  }

  inputAmount.value = "";
  inputPin.value = "";
});
document.getElementById("inputPin").addEventListener("click", function () {
  let addDemo = document.getElementById("addDemo");
  addDemo.innerText = "";
  addDemo.style.visibility = "hidden";
});
