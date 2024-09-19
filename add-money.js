document.getElementById("addBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const inputAmount = document.getElementById("inputAmount");
  const amountValue = inputAmount.value;
  const inputPin = document.getElementById("inputPin");
  const pinValue = inputPin.value;
  // let money = document.getElementById("money");
  if (pinValue === "1234") {
    let money = document.getElementById("money");
    let totalMoney = money.innerText;
    // money.innerText = Number(totalMoney) + Number(amountValue);
    document.getElementById("money").innerText =
      Number(totalMoney) + Number(amountValue);
  }

  inputAmount.value = "";
  inputPin.value = "";
});
